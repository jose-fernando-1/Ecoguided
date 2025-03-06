# routes.py
from fastapi import APIRouter, HTTPException
import httpx
from config import SERVICES

router = APIRouter()

async def forward_request(service: str, path: str, method: str, data=None):
    """Encaminha a requisição para o serviço correto."""
    if service not in SERVICES:
        raise HTTPException(status_code=404, detail="Serviço não encontrado")
    
    url = f"{SERVICES[service]}{path}"
    
    async with httpx.AsyncClient() as client:
        if method == "GET":
            response = await client.get(url)
        elif method == "POST":
            response = await client.post(url, json=data)
        elif method == "PATCH":
            response = await client.patch(url, json=data)
        else:
            raise HTTPException(status_code=405, detail="Método não permitido")
    
    return response.json()

@router.get("/{service}/{path:path}")
async def proxy_get(service: str, path: str):
    return await forward_request(service, f"/{path}", "GET")

@router.post("/{service}/{path:path}")
async def proxy_post(service: str, path: str, data: dict):
    return await forward_request(service, f"/{path}", "POST", data)

@router.patch("/{service}/{path:path}")
async def proxy_patch(service: str, path: str, data: dict):
    return await forward_request(service, f"/{path}", "PATCH", data)
