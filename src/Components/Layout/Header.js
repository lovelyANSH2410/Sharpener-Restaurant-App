import React, { Fragment } from "react";
import "./Header.module.css";
import classes from "./Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://media.istockphoto.com/id/1204371265/photo/flat-lay-of-turkish-traditional-foods-for-celebrating-holiday-wode-composition.jpg?s=612x612&w=0&k=20&c=X-9XA8TIOe-GxtYnojNLUfu-_rXR1Zab1GYqAu1ne64="
          alt="logo"
        />
      </div>
    </Fragment>
  );
};

export default Header;
