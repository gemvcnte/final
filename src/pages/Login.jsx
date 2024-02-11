import React from "react";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Wand } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
const Login = () => {
  // const handleLogin = async () => {
  //   const response = await axios.post('/api/auth/login', )
  // }
  //

  return (
    <div className="">
      <Navbar />
      <div className="flex h-full m-auto">
        <div className="w-1/2 flex flex-col justify-center text-center h-lvh pb-10">
          <div className="flex flex-col font-mono text-xl items-center">
            Welcome Back Admin!{" "}
            <span className="flex pr-3  ">Log in to continue</span>
          </div>
          <div className="pt-5">
            <p className="">
              Don't have an account?{" "}
              <span className="w-24 underline font-semibold">
                Contact a nearby admin
              </span>
            </p>
          </div>
          <div className="flex justify-center text-center ">
            <div className="flex justify-center flex-col p-5 w-80">
              <Input
                type="email"
                className="w-50 px-5 my-10"
                placeholder="Email"
              />
              <Input
                type="password"
                className="w-50 px-5"
                placeholder="Password"
              />
              <Button className="my-10">Login</Button>
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-black relative h-full ">
          {/* <img */}
          {/*   className="absolute inset-0 w-full h-svh" */}
          {/*   src="https://wallpapercrafter.com/desktop3/982680-communication-desk-electronics-home-office-indoors.jpg" */}
          {/*   alt="background" */}
          {/* /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
