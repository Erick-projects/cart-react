import React from 'react';
import { data } from '../data';

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    const updatedProducts = allProducts.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    if (updatedProducts.some((item) => item.id === product.id)) {
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts(updatedProducts);
    } else {
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className='container-items'>
      {data.map((product) => (
        <div className='item' key={product.id}>
          <figure>
            <img src={product.urlImage} alt={product.title} />
          </figure>
          <div className='info-product'>
            <h2>{product.nameProduct}</h2>
            <p className='price'>${product.price}</p>
            <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
};
