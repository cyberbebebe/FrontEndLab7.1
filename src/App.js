import React, { useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import "./App.css";

function App() {
  
  useEffect(() => {
    const n = 6;
    const targetIndex = n % 10; // Індекс цільового рядка

    // Рекурсивна функція для обробки текстових вузлів
    function wrapTextNodes(parent) {
      const childNodes = Array.from(parent.childNodes);

      childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
          // Створення span для кожного текстового вузла
          const span = document.createElement("span");
          span.textContent = node.nodeValue;
          parent.replaceChild(span, node); // Замінюємо текстовий вузол на span
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          // Рекурсія для вкладених елементів
          wrapTextNodes(node);
        }
      });
    }

    // Обгортання всіх текстових вузлів у body
    wrapTextNodes(document.body);

    // Після обгортання додаємо події
    const elements = document.querySelectorAll("body span");
    elements.forEach((element, index) => {
      element.addEventListener("click", () => {
        if (index === targetIndex) {
          element.classList.toggle("highlight");
        } else if (index === targetIndex + 1) {
          element.classList.toggle("highlight-green");
        }
      });
    });

    // Очищення подій при демонтажі компонента
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("click", () => {
          element.classList.toggle("highlight");
          element.classList.toggle("highlight-green");
        });
      });
    };
  }, []);

  return (
    <div>
      <Header />
      <Content />
      <Image />
      </div>
  );
}

export default App;
