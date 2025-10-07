import React from "react";
import CustomNav from "./CustomNav";

const Header: React.FC = () => (
  <header className="w-full fixed top-0 left-0 z-50">
    <CustomNav baseColor="#051E4A" menuColor="#000000" />
  </header>
);

export default Header;
