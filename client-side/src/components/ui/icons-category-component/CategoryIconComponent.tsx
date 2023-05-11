import { FC } from "react";
import {
  CategoryIconCircle,
  CategoryIconWrapper,
} from "./CategoryIconComponent.styled";

interface ICategoryIconComponentProps {
  icon: JSX.Element;
  category: string;
}

const CategoryIconComponent: FC<ICategoryIconComponentProps> = ({
  icon,
  category,
}) => {
  return (
    <CategoryIconWrapper>
      <CategoryIconCircle>{icon}</CategoryIconCircle>
      <h3>{category}</h3>
    </CategoryIconWrapper>
  );
};

export default CategoryIconComponent;
