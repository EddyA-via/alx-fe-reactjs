import React, { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({}); // <-- setErrors + errors

  // Validation function
  const validate = () => { // <-- validate
    let tempErrors = {};
    if (!title.trim()) tempErrors.title = "Title is required";
    if (!ingredients.trim()) tempErrors.ingredients = "Ingredients are required";
    if (!instructions.trim()) tempErrors.instructions = "Instructions are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // Run validation before adding
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions,
    };
    addRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>

      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      {errors.title && <p className="text-red-500">{errors.title}</p>}

      <textarea
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}

      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      {errors.instructions && <p className="text-red-500">{errors.instructions}</p>}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
