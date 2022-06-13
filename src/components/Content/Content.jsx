import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import style from "./Content.module.css";
import products from '../../assets/items'

function Content() {
  return (
    <div className={style.content}>
    {products.map(product => {
      return (
        <Product
        image={product.image}
        price={product.price}
        title={product.name}
        oldPrice={product.oldPrice}
      />
      )
    })}
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  oldPrice: PropTypes.string,
};

export default Content;