import { FC } from "react";
import {
  CategoryIconCircle,
  CategoryIconWrapper,
  CategoryTitleStyled,
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
      <CategoryTitleStyled variant="accent2" component="h3">{category}</CategoryTitleStyled>
    </CategoryIconWrapper>
  );
};

export default CategoryIconComponent;
