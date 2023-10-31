import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="py-6 px-10 flex justify-between bg-zinc-500 text-white">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
