import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="">
      <div className="w-full flex justify-evenly p-5">
        <div className="mr-auto"></div>
        <div className="m-auto pl-12">
          <img src={""} alt="Logo" />
        </div>
        <div className="ml-auto">
          <NavigationMenu>
            <NavigationMenuList>
              {" "}
              <NavigationMenuItem className="px-5">
                <Link to={"/auth/login"} legacyBehavior passHref>
                  <NavigationMenuLink>Login</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-5">
                <Link to={"/auth/login"} legacyBehavior passHref>
                  <NavigationMenuLink>Login</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="divider bg-black w-3/4"></div>
    </div>
  );
};

export default Navbar;
