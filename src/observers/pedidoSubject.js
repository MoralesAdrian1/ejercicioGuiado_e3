import { notifyOrderStatusChange } from "@/app/utils/correo";

class PedidoSubject {
  constructor() {
    this.observers = []; // Lista de observadores (por ejemplo, componentes de UI que se suscriben a actualizaciones)
    this.pedidos = []; // Lista de pedidos pendientes
  }

  // Método para añadir un observador
  suscribir(observer) {
    this.observers.push(observer);
  }

  // Método para eliminar un observador
  desuscribir(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Método para notificar a los observadores
  notificar() {
    this.observers.forEach(observer => observer.actualizar(this.pedidos));
  }

  // Método para añadir un pedido nuevo
  nuevoPedido(pedido) {
    this.pedidos.push(pedido);
    this.notificar();
  }

  // Método para actualizar el estado de un pedido
  actualizarEstadoPedido(id, nuevoEstado) {
    const pedido = this.pedidos.find(p => p.id === id);
    if (pedido) {
      pedido.estado = nuevoEstado;
      this.notificar();
      this.enviarNotificacionEmail(pedido);
    }
  }

  // Método para enviar una notificación por email usando un servicio externo
  enviarNotificacionEmail(pedido) {
    const userEmail = 'adriangtoff@gmail.com'; // Reemplazar con el email del cliente
    notifyOrderStatusChange(userEmail, pedido.id, pedido.estado);
  }
}

export default PedidoSubject;