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
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <div className="">
      <div className="w-full flex justify-around p-5">
        <div className="mr-auto mt-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[16px]">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[550px]">
                    <li>
                      <Link to="/about/projects">Project</Link>
                    </li>
                    <li>
                      <Link to="/about/developers">Developers</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="m-auto pl-20">
          <img src={""} alt="Logo" />
        </div>
        <div className="ml-auto">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="">
                <Link to={"/"} legacyBehavior passHref>
                  <NavigationMenuLink>Announcements</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <Separator orientation="vertical" />
              <NavigationMenuItem className="px-5">
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;
