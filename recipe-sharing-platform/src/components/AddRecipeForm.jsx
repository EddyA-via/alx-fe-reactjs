import React, { useState } from "react";
import { useRecipeStore } from "../recipeStore";

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // ✅ steps state
  const [errors, setErrors] = useState({}); // ✅ errors state

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    addRecipe({
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split(".").map((s) => s.trim()), // split steps into array
    });

    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 space-y-4"
    >
      <h2 className="text-lg font-semibold">Add a New Recipe</h2>

      <div>
        <label className="block font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded w-full p-2"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div>
        <label className="block font-medium">Ingredients (comma-separated)</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border rounded w-full p-2"
        />
        {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
      </div>

      <div>
        <label className="block font-medium">Steps (separated by periods)</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border rounded w-full p-2"
        />
        {errors.steps && <p className="text-red-500">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  );
}
