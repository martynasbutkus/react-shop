import './form.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/";

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault();

    const inputData = {
      image: img,
      title: title,
      price: price,
    };

    if (img && title && price) {
      fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      })
        .then((resp) => resp.json())
        .then((data) => {
          alert(data.msg);
          navigate('/')
        })
        .catch((error) => console.log(error));
    } else {
      alert("Užpildykite visus laukelius");
    }
  };

  return (
    <>
      <h1>Pridėti prekę</h1>
      <form>
        <input
          type="url"
          placeholder="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </>
  );
};

export default Form;
