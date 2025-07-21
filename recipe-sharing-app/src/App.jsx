import React, { useEffect } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import { useRecipeStore } from './store/recipeStore';

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Load sample data
  useEffect(() => {
    const sampleRecipes = [
      {
        id: 1,
        title: 'Spaghetti Bolognese',
        description: 'Classic Italian pasta dish with meat sauce.',
        ingredients: 'spaghetti, beef, tomato',
      },
      {
        id: 2,
        title: 'Chicken Stir Fry',
        description: 'Quick stir-fry with vegetables.',
        ingredients: 'chicken, soy sauce, broccoli, carrot',
      },
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
