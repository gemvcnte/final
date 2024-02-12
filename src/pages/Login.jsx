import axios from "axios";
import { useState, React } from "react";
import { Input } from "../components/ui/input";
import { Wand } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const history = useHistory();
  const handleLogin = async () => {
    if (!emailAddress || !password) {
      setError("Please enter both email and password.");
      return;
    }
    try {
      const response = await axios.post("/api/auth/login", {
        emailAddress,
        password,
      });

      const { role } = response.data;

      if (role === "dean") {
        history.push("/dean/dashboard");
      }
    } catch (error) {
      setError("Invalid email address or password. Please try again later.");
      console.error(error);
    }
  };

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
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <Input
                type="password"
                className="w-50 px-5"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="my-10" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-black  h-full ">
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
