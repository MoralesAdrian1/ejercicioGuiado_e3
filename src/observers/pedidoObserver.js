class PedidoObserver {
    constructor(componente) {
      this.componente = componente;
    }
  
    actualizar(pedidos) {
      // Aquí es donde se actualiza el estado del componente con los pedidos nuevos
      this.componente.setPedidos(pedidos);
    }
  }
  export default PedidoObserver;