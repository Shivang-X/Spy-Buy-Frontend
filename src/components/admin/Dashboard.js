import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import Sidebar from "./Sidebar";

import { useDispatch, useSelector } from "react-redux";

import { getAdminProducts } from "../../actions/productActions";
import { allOrders } from "../../actions/orderActions";
import { allUsers } from "../../actions/userActions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { users } = useSelector((state) => state.allUsers);
  const { orders, totalAmount, loading } = useSelector(
    (state) => state.allOrders
  );

  let outOfStock = 0;
  products.forEach((product) => {
    if (product.stock === 0) {
      outOfStock += 1;
    }
  });

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(allOrders());
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <h1 className="my-4">Admin Dashboard</h1>

          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              <MetaData title={"Admin Dashboard"} />

              <div className="row pr-4">
                <div className="col-xl-12 col-sm-12 mb-3">
                  <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="text-center card-font-size">
                        Total Amount
                        <br /> <b>${totalAmount && totalAmount.toFixed(2)}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="admin-cards">
              <div class="card-wrap">
                <div class="card-header one">
                  <i class="fas fa-laptop"></i>
                </div>
                <div class="card-content">
                  <h1 class="card-title">Users</h1>
                  <p class="card-text">
                  {users && users.length}
                  </p>
                  <Link to='/admin/users' class="card-btn one">View</Link>
                </div>
              </div>
              <div class="card-wrap">
                <div class="card-header two">
                  <i class="fab fa-css3-alt"></i>
                </div>
                <div class="card-content">
                  <h1 class="card-title">Products</h1>
                  <p class="card-text">
                  {products && products.length}
                  </p>
                  <Link to='/admin/products' class="card-btn two">View</Link>
                </div>
              </div>
              <div class="card-wrap">
                <div class="card-header three">
                  <i class="fab fa-html5"></i>
                </div>
                <div class="card-content">
                  <h1 class="card-title">Orders</h1>
                  <p class="card-text">
                  {orders && orders.length}
                  </p>
                  <Link to='/admin/orders' class="card-btn three">View</Link>
                </div>
              </div>
              <div class="card-wrap">
                <div class="card-header four">
                  <i class="fab fa-js-square"></i>
                </div>
                <div class="card-content">
                  <h1 class="card-title">Out of stock</h1>
                  <p class="card-text">
                    {outOfStock}
                  </p>
                </div>
              </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
