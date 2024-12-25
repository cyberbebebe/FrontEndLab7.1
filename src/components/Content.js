import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        <p id="hobby-main">Хобі:</p>
        <ul>
          <li id="hobby1">Музика</li>
          <li id="hobby2">Недопрограмування</li>
          <li id="hobby3">Комп'ютерні ігри</li>
          <li id="hobby4">Грати дурня</li>
        </ul>

        <p>Улюблені книги або фільми:</p>
        <ol>
          <li id="like1">"Майстер і Маргарита" - Михайло Булгаков</li>
          <li id="like2">"Острів проклятих" - Мартін Скорсезе</li>
          <li id="like3">"Вовк з Уолл-стріт" - Мартін Скорсезе</li>
          <li id="like4">"Бійцівський клуб" - Девід Фінчер</li>
        </ol>
      </div>
    );
  }
}

export default Content;
