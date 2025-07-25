import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { v4 as uuidv4 } from 'uuid';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const addRecipe = useRecipeStore((state) => (newRecipe) =>
    state.recipes.push(newRecipe)
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: uuidv4(),
      title,
      description,
      ingredients: ingredients.split(',').map((i) => i.trim()),
    };

    addRecipe(newRecipe);

    setTitle('');
    setDescription('');
    setIngredients('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <div>
        <label>Title:</label><br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label><br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Ingredients (comma-separated):</label><br />
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
