import { Theme, styled } from "@mui/material";


export const TransactionMobileControlsInner = styled('div')<{ theme?: Theme }>(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    gap: '20px'
}))