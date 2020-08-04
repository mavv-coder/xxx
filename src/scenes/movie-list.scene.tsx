import React from "react";
import { PictureListContainer } from "../pods/picture-list";
import { NavbarComponent } from "../layout/components";
import { ShoppingCartContainer } from "../layout/components/shopping-cart";
import { useAppContext } from "../core/context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const MovieListScene: React.FC = () => {
  const { visibleCart } = useAppContext();
  const classes = useStyles();
  return (
    <>
      <NavbarComponent />
      <div className={classes.flexContainer}>
        <PictureListContainer />
        {visibleCart && <ShoppingCartContainer />}
      </div>
    </>
  );
};
