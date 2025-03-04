import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Logout = () => {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const logout = async () => {
      setIsLoggingOut(true);
      const token = localStorage.getItem('sessionToken');
      if (token) {
        try {
          await axios.post('http://127.0.0.1:8000/api/users/logout', {}, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `token ${token}`
            }
          });
        } catch (error) {
          console.error("Erro ao fazer logout:", error);
        }
      }

      localStorage.removeItem('username');
      localStorage.removeItem('sessionToken');
      router.push('/').then(() => {
        window.location.reload();
      });
    };

    if (!isLoggingOut) {
      logout();
    }
  }, [router, isLoggingOut]);

  return null;
};

export default Logout;