import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <p className="sidebar-title"> Menu </p>
      <Link to="/dashboard" className="sidebar-items">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        Dashboard
      </Link>
      <Link to="/admin/products" className="sidebar-items">
        <i class="fa fa-laptop" aria-hidden="true"></i>
        Products
      </Link>
      <Link to="/admin/orders" className="sidebar-items">
        <i class="fa fa-clone" aria-hidden="true"></i>
        Orders
      </Link>
      <Link to="/admin/users" className="sidebar-items">
      <i className="fa fa-users"></i> Users
      </Link>
      <Link to="/admin/reviews" className="sidebar-items">
        <i className="fa fa-star"></i> Reviews
      </Link>
    </aside>
  );
};

export default Sidebar;
