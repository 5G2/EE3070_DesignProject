import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Tutorial2 = () => {
  return (
    <div style={{ color: "#E5D3B3", paddingLeft: "40px", paddingTop: "20px" }}>
      <h1>Celery</h1>
      <div style={{ display: "flex" }}>
        <div>
          <p style={{ color: "#664229" }}>Description:</p>
          <p style={{ color: "#664229" }}>
            Lettuce is a leafy green vegetable that is often used in salads and
            sandwiches. It is a member of the Asteraceae family, which also
            includes other popular vegetables such as daisies, sunflowers, and
            artichokes.
          </p>
          <p style={{ color: "#664229" }}>
            Lettuce is grown in many parts of the world and is available in
            several different varieties, including iceberg, romaine, butterhead,
            and leaf lettuce. It is a low-calorie vegetable that is a good
            source of vitamins A and K, as well as folate and potassium.
          </p>

          <p style={{ color: "#664229" }}>
            Lettuce is typically eaten raw, but can also be cooked in a variety
            of ways, such as sautéing or grilling. It is often used as a base
            for salads, sandwiches, and wraps, and can be combined with a wide
            range of other vegetables, fruits, and proteins to create a
            nutritious and flavorful meal.
          </p>
          <p style={{ color: "#664229" }}>
            Overall, lettuce is a versatile and nutritious vegetable that is a
            staple in many diets around the world.
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
            src="https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/celery.jpg?h=8bf7d235&itok=5W-SSPx2"
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

export default Tutorial2;
