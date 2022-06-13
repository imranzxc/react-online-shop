import React from "react";
import style from "./Content.module.css";

function Product(props) {
  console.log(props);
  return (
    <div className={style.product}>
      <img className={style.img} src={props.image} alt={props.title} />
      <div className={style.productContent}>
        <div className={style.priceContent}>
          <h2 className={style.price}>{props.price}</h2>
          <span className={style.oldPrice}>{props.oldPrice}</span>
        </div>
        <p className={style.title}>{props.title}</p>
        <button className={style.button}>Купить</button>
      </div>
    </div>
  );
}

export default Product;