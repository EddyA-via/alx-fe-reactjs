import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; // adjust the path if your data.json is in public

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulating fetch from data.json
    const foundRecipe = data.find((item) => String(item.id) === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipe.name}</h1>
      <p className="mt-2">{recipe.description}</p>

      <h2 className="text-xl mt-4 font-semibold">Ingredients</h2>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
