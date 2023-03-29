import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Tutorial3 = () => {
  return (
    <div style={{ color: "#E5D3B3", paddingLeft: "40px", paddingTop: "20px" }}>
      <h1>Spinach</h1>
      <div style={{ display: "flex" }}>
        <div>
          <p style={{ color: "#664229" }}>Description:</p>
          <p style={{ color: "#664229" }}>
            Celery is a biennial plant, which means it has a two-year life
            cycle. In the first year, it produces a rosette of leaves and a
            thick, fleshy root. In the second year, it produces a tall,
            flowering stalk and then dies.
          </p>
          <p style={{ color: "#664229" }}>
            The part of the celery plant that is commonly eaten is the petiole,
            or stalk. The leaves and seeds are also edible and can be used as a
            seasoning or garnish.
          </p>
          <p style={{ color: "#664229" }}>
            There are many different varieties of celery, including green,
            yellow, and red varieties. Some varieties are grown for their crisp
            texture and mild flavor, while others are grown for their medicinal
            properties.
          </p>
          <p style={{ color: "#664229" }}>
            Celery has a long history of medicinal use, dating back to ancient
            Greece and Rome. It has been used to treat a variety of ailments,
            including high blood pressure, arthritis, and digestive problems.
          </p>
          <p style={{ color: "#664229" }}>
            In addition to its nutritional and medicinal benefits, celery is
            also believed to have aphrodisiac properties. It is rich in
            androstenone, a hormone that is thought to stimulate sexual arousal
            in humans.
          </p>
          <p style={{ color: "#664229" }}>
            Celery is a popular vegetable in many cuisines around the world. In
            the United States, it is often used in soups,{" "}
          </p>
        </div>
        <div>
          <img
            style={{
              //1400:1000
              width: "525px",
              height: "375px",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
            src="https://cdn.britannica.com/30/82530-050-79911DD4/Spinach-leaves-vitamins-source-person.jpg"
          />
        </div>
      </div>
      <div>
        <p>Step for Beginners:</p>
        <ol>
          <li>Choose a sunny location with well-draining soil.</li>
          <li>Prepare the soil by adding compost or other organic matter.</li>
          <li>
            Sow lettuce seeds directly into the soil, or start them indoors and
            transplant them later.
          </li>
          <li>
            Water the lettuce regularly to keep the soil moist, but not
            waterlogged.
          </li>
          <li>
            Harvest the lettuce leaves by cutting them at the base of the stem.
          </li>
        </ol>
        <p>
          By following these simple steps, you can enjoy fresh, home-grown
          lettuce throughout the growing season.
        </p>

        <p>Essential Conditions for Growing Plants Successfully:</p>
        <ul>
          <li>Temperature:50°F - 70°F (10°C - 21°C)</li>
          <li>Air Humidity: 40% - 80%. </li>
          <li>
            Soil Humidity: Lettuce needs consistently moist soil to grow
            properly. The soil should be kept moist but not waterlogged
          </li>
          <li>
            Light Density: Least 6 hours of direct sunlight or 12 hours of
            bright
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tutorial3;
