const Product = () => {
  return (
    <div>
      <img src="/product.png" alt="Producto" />
      <h3>Producto</h3>

      <input type="checkbox" name="isAvaliable" id="isAvaliable" />
      <div>
        <div>
          <button>
            <img src="/delete.png" alt="Eliminar" />
          </button>
          <button>
            <img src="/edit.png" alt="Editar" />
          </button>
        </div>
        <p>$10.00</p>
      </div>
    </div>
  );
};

export default Product;
