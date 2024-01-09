import React, { useState, useEffect } from 'react';

const Products = () => {
  const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      })
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <section id="app" className="products">
      {products.map((x) => (
        <div key={x.id} className="product">
          <img src={x.image} alt={x.title} />
          <p>{x.title}</p>
          <p className="price">€{x.price}</p>
          <button className="button" onClick={() => deleteProduct(x.id)}>
            Ištrinti
          </button>
        </div>
      ))}
    </section>
  );
};

export default Products;
