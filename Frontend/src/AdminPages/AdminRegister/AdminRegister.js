import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!firstName || !lastName || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/admins/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      if (response.status === 201) {
        toast.success("Registration successful!");
        setTimeout(() => {
          navigate("/admin/adminlogin");
        }, 1500);
      }
    } catch (error) {
      console.error("Error registering:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(errorMessage);
    }
  };



  return (
    <>
      <section>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "hsl(0, 0%, 96%)",
            minHeight: "100vh",
            margin: 0,
            padding: "50px 0",
          }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Phone illustration"
                />
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleSubmit}>
                      {/* First Name input */}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                        <label className="form-label">First Name</label>
                      </div>
                      {/* Last Name input */}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                        <label className="form-label">Last Name</label>
                      </div>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label">Email address</label>
                      </div>
                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label className="form-label">Password</label>
                      </div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Register
                      </button>
                    </form>
                    <h6>
                      Already have an account?
                      <Link
                        to="/admin/adminlogin"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        Click here
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Toast Container for notifications */}
          <ToastContainer position="bottom-right" autoClose={8000} />
        </div>
      </section>
    </>
  );
}
