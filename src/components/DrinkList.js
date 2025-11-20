import React from "react";
import DrinkCard from "./DrinkCard";
import { drinks } from "../data/Drinks";

const DrinkList = ({ addToCart }) => {
  const categories = [
    "Promos",
    "Productos frescos",
    "Congelados",
    "Cerdo",
    "Otros",
  ];

  return (
    <section className="menu">
      <h2>Nuestros productos</h2>

      {categories.map((cat) => (
        <div key={cat} className={cat === "Promos" ? "promos-section" : ""}>
          <h3>
            {cat} {cat === "Promos" && "🎉"}
          </h3>

          {/* 👇 Si es Promos, usamos carrusel */}
          {cat === "Promos" ? (
            <div className="promos-carousel">
              {drinks
                .filter((d) => d.category === cat)
                .map((d) => (
                  <DrinkCard
                    key={d.name}
                    name={d.name}
                    emoji={d.emoji}
                    price={d.price}
                    addToCart={addToCart}
                  />
                ))}
            </div>
          ) : (
            <div className="drink-grid">
              {drinks
                .filter((d) => d.category === cat)
                .map((d) => (
                  <DrinkCard
                    key={d.name}
                    name={d.name}
                    emoji={d.emoji}
                    price={d.price}
                    addToCart={addToCart}
                  />
                ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default DrinkList;
