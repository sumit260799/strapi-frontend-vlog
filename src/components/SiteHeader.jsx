import React from "react";
import { Link, Outlet } from "react-router-dom";
function SiteHeader() {
  return (
    <div className="site-header">
      <Link to="/">
        <h1>sumit reviews</h1>
      </Link>
      <Outlet />
    </div>
  );
}

export default SiteHeader;
