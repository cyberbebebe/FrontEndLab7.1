import React, { useState } from "react";
import odesaImg from "../odesa.jpg";

function Image() {
  const [imgVisible, setImgVisible] = useState(true);
  const [imgSize, setImgSize] = useState(35);

  const handleAddImg = () => {
    setImgVisible(true);
  };

  const handleRemoveImg = () => {
    setImgVisible(false);
  };

  const handleIncreaseImg = () => {
    setImgSize((prevSize) => prevSize + 5);
  };

  const handleDecreaseImg = () => {
    if (imgSize > 5) {
      setImgSize((prevSize) => prevSize - 5);
    }
  };

  return (
    <div>
      <p>Одеса - місто, адміністративний центр Одеської області...</p>

      <div>
        <button onClick={handleAddImg}>Додати</button>
        <button onClick={handleIncreaseImg}>Збільшити</button>
        <button onClick={handleDecreaseImg}>Зменшити</button>
        <button onClick={handleRemoveImg}>Видалити</button>
      </div>
      <div>
        <img
          src={odesaImg}
          alt="Фото Одеси"
          id="odesa-img"
          style={{
            display: imgVisible ? "block" : "none",
            width: `${imgSize}%`,
            height: `${imgSize}%`,
          }}
        />
      </div>
      <p>
        <a href="https://uamedtours.com.ua/about-ukraine/city/odesa">
          Детальніше про Одесу
        </a>
      </p>
    </div>
  );
}

export default Image;
