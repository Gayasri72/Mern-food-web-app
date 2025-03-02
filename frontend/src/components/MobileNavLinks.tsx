import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function MobileNavLinks() {
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        User Profile
      </Link>
      <Button className="flex items-center px-3 font-bold hover:bg-gray-500">Log Out</Button>
    </>
  );
}
