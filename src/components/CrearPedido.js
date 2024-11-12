"use client";
import { Button } from '@mui/material';
import pedidoSubject from '../observers/pedidoSubjectInstance';

export function CrearPedido() {
  // Método simulado para añadir un pedido (en una aplicación real vendría de una API o WebSocket)
  const agregarPedido = () => {
    const nuevo = { id: Math.floor(Math.random() * 1000), nombre: 'Pedido ' + (Math.floor(Math.random() * 1000)), estado: 'preparando' };
    pedidoSubject.nuevoPedido(nuevo);
  };

  return (
    <div>
      <h1>Crear Pedido</h1>
      <button onClick={agregarPedido}>Agregar Pedido</button>
    </div>
  );
}