import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p className="p-6">Recipe not found.</p>;
  }

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-500 hover:underline">← Back</Link>
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full max-w-md rounded mb-4" />
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Preparation</h2>
      <p className="mb-4">Step-by-step instructions go here.</p>
    </div>
  );
}

export default RecipeDetail;
