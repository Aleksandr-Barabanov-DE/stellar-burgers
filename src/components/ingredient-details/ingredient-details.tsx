import { FC, useEffect } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useSelector } from '../../services/store';
import { getIngredientsState } from '../../services/slices/IngredientsSlice';
import { useParams } from 'react-router-dom';

// Удален вызов dispatch(getIngredientsList())
export const IngredientDetails: FC = () => {
  const { ingredients } = useSelector(getIngredientsState);

  const { id } = useParams<{ id: string }>();

  const ingredientData = ingredients.find(
    (ingredient) => ingredient._id === id
  );

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
