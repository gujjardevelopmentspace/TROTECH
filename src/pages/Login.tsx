import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <div className="space-y-4">
          <Input type="email" placeholder="Email" className="bg-gray-700 border-gray-600 text-white" />
          <Input type="password" placeholder="Password" className="bg-gray-700 border-gray-600 text-white" />
          
          <Button className="w-full bg-primary hover:bg-primary/90">Login</Button>
        </div>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
