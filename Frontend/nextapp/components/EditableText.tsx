import { useState, useRef, useEffect, ElementType } from "react";

interface EditableTextProps {
  label?: string;
  value: string;
  setValue: (newValue: string) => void;
  placeholder?: string;
  tag?: ElementType; // permite definir o elemento HTML (ex: "h1", "p", etc.)
}

export default function EditableText({
  label,
  value,
  setValue,
  placeholder = "",
  tag: Tag = "h1",
}: EditableTextProps) {
  const [editing, setEditing] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }
  }, [value, editing]);

  return (
    <div>
      {label && <label>{label}</label>}
      {editing ? (
        <textarea
          ref={textAreaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setEditing(false)}
          autoFocus
          placeholder={placeholder}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: "inherit",
            resize: "none",
            overflow: "hidden",
            width: "100%",
          }}
        />
      ) : (
        <Tag
          onClick={() => setEditing(true)}
          style={{
            cursor: "pointer",
            width: "100%",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          {value || placeholder}
        </Tag>
      )}
    </div>
  );
}