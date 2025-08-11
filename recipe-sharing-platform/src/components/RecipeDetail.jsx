import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json"; // Ensure data.json exists in src/

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center p-4">Recipe not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {/* ✅ Image */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-auto rounded-lg mb-4"
        />
      )}

      {/* ✅ Ingredients */}
      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc pl-5">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* ✅ Instructions */}
      <h2 className="text-xl font-semibold mt-4">Instructions</h2>
      <ol className="list-decimal pl-5 space-y-2">
        {recipe.instructions?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
