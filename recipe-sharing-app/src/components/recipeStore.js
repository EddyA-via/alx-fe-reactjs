import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',

  // Set all recipes (e.g., from localStorage)
  setRecipes: (recipes) => set({
    recipes,
    filteredRecipes: recipes,
  }),

  // Add a new recipe
  addRecipe: (recipe) => set((state) => {
    const newRecipes = [...state.recipes, recipe];
    return {
      recipes: newRecipes,
      filteredRecipes: newRecipes,
    };
  }),

  // Update an existing recipe by ID
  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedList = state.recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    return {
      recipes: updatedList,
      filteredRecipes: updatedList.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      ),
    };
  }),

  // Delete a recipe by ID
  deleteRecipe: (recipeId) => set((state) => {
    const updatedList = state.recipes.filter((r) => r.id !== recipeId);
    return {
      recipes: updatedList,
      filteredRecipes: updatedList.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      ),
      favorites: state.favorites.filter((id) => id !== recipeId),
    };
  }),

  // Search term and dynamic filtering
  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(term.toLowerCase())
      )
    ),
  })),

  // Favorite logic
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Mock recommendation generator
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));
