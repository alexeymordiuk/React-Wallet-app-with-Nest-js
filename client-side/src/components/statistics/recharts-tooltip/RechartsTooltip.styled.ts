import { Theme, Typography, TypographyProps, styled } from "@mui/material";
import {
    NameType,
    Payload,
    ValueType,
  } from "recharts/types/component/DefaultTooltipContent";

export const RechartsTooltipListStyled = styled('ul')<{
    theme?: Theme;
  }>(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '170px',
    height: '70px',
  }));

  export const RechartsTooltipListItemStyled = styled('li')<{
    theme?: Theme;
    entry: Payload<ValueType, NameType>,
  }>(({ theme, entry }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    background: entry.payload.fill,
    padding: '15px',
    borderRadius: '10px'
}));

export const RechartsTooltipCategory = styled(Typography)<TypographyProps & { theme?: Theme, component?: string }>(({ theme }) => ({
  color: theme.colors.white
}))