import { Theme, styled } from "@mui/material";
import { Payload } from "recharts/types/component/DefaultLegendContent";

export const RechartsCategotyListStyled = styled('ul')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: '15px',
    height: 'calc(100vh - 610px)',

    [`@media (max-width: 750px)`]: {
        height: 'calc(100vh - 800px)',
        gridTemplateColumns: '1fr',
    },
})

export const RechartsCategotyItemtStyled = styled('li')<{ theme?: Theme, entry: Payload; }>(({ theme, entry }) => ({
    "&:before": {
        content: "''",
        display: 'block',
        width: '10px',
        height: '10px',
        borderRaduis: '50%',
        background: entry.color
    },

    padding: '10px 5px',
    background: '#40423f',
    opacity: '0.7',
    borderRadius: '15px',
    fontSize: '15px',
    color: "#ffffff",
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
}))


