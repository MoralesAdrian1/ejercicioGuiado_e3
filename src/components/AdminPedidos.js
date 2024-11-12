"use client";
import { useEffect, useState } from 'react';
import pedidoSubject from '../observers/pedidoSubjectInstance';
import PedidoObserver from '../observers/pedidoObserver';

export function AdminPedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    // Crear un nuevo observador para este componente
    const observer = new PedidoObserver({ setPedidos });

    // Suscribir el componente a las actualizaciones de pedidos
    pedidoSubject.suscribir(observer);

    // Desuscribir el componente cuando se desmonte
    return () => {
      pedidoSubject.desuscribir(observer);
    };
  }, []);

  // Método para actualizar el estado de un pedido
  const actualizarEstado = (id, nuevoEstado) => {
    pedidoSubject.actualizarEstadoPedido(id, nuevoEstado);
  };

  return (
    <div>
      <h1>Lista de Pedidos Pendientes</h1>
      <ul>
        {pedidos.map(pedido => (
          <li key={pedido.id}>
            {pedido.nombre} - Estado: {pedido.estado}
            <button onClick={() => actualizarEstado(pedido.id, 'listo')}>Marcar como Listo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}