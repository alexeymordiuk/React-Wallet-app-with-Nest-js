import React, { FC } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface IDropDownListProps {
  selectedOption: { value: number; label: string };
  handleMonthSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: number;
    label: string;
  }[];
}

const DropDownList: FC<IDropDownListProps> = ({
  selectedOption,
  handleMonthSelect,
  options,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAnchorEl(null);
    handleMonthSelect(event);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {selectedOption.label}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            onClick={(event) => {
              const newEvent = {
                target: { value: option.value.toString() },
              } as React.ChangeEvent<HTMLSelectElement>;
              handleClose(newEvent);
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropDownList;
