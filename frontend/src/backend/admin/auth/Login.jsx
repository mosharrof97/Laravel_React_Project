import { useState } from "react";
import axios from "./../../../Api";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/admin/login", { email, password });
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  // const [error, setError] = useState("");
  // const [msg, setMsg] = useState("");

  // useEffect(() => {
  //   let login = localStorage.getItem("login");
  //   if (login) {
  //     naviget("/dashboard");
  //   }
  //   let loginStatus = localStorage.getItem("loginStatus");
  //   if (loginStatus) {
  //     setError(loginStatus);
  //     setTimeout(function () {
  //       localStorage.clear();
  //       window.location.reload();
  //     }, 3000);
  //   }
  //   setTimeout(function () {
  //     setMsg("");
  //   }, 5000);
  // }, [msg]);

  // const handleInputChange = (e, type) => {
  //   switch (type) {
  //     case "user":
  //       setError("");
  //       setEmail(e.target.value);
  //       if (e.target.value === "") {
  //         setError("Username has left blank");
  //       }
  //       break;
  //     case "password":
  //       setError("");
  //       setPassword(e.target.value);
  //       if (e.target.value === "") {
  //         setError("Password has left blank");
  //       }
  //       break;
  //     default:
  //   }
  // };

  // function loginSubmit() {
  //   if (email !== "" && password != "") {
  //     var url = "http://127.0.0.1:8000/api/student/login";
  //     var headers = {
  //       Accept: "application/json",
  //       "Content-type": "application/json",
  //     };
  //     var Data = {
  //       email: email,
  //       password: password,
  //     };
  //     fetch(url, {
  //       method: "POST",
  //       headers: headers,
  //       body: JSON.stringify(Data),
  //     })
  //       .then((response) => response.json())
  //       .then((response) => {
  //         console.log(response);
  //         if (
  //           response[0].result === "Invalid Email!" ||
  //           response[0].result === "Invalid password!"
  //         ) {
  //           setError(response[0].result);
  //         } else {
  //           setMsg(response[0].result);
  //           setTimeout(function () {
  //             localStorage.setItem("login", true);
  //             localStorage.setItem("email", email);
  //             naviget("/dashboard");
  //           }, 5000);
  //         }
  //       })
  //       .catch((err) => {
  //         setError(err);
  //         console.log(err);
  //       });
  //   } else {
  //     setError("All field are required!");
  //   }
  // }
  return (
    <>
      <section className="" style={{ backgroundColor: "#bbdbfa" }}>
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-5">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0 d-flex justify-content-center">
                  <div className="col-md-9 col-lg-10 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      {/* <p>
                        {error !== "" ? (
                          <div style={{ color: "#fd0217" }}>
                            <b>{error}</b>
                          </div>
                        ) : (
                          <div style={{ color: "#badbcc" }}>
                            <b>{msg}</b>
                          </div>
                        )}
                      </p> */}
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className=" fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0">Login From</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                      <form onSubmit={loginSubmit} action="">
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label" htmlFor="username">
                            Email
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <input
                            type="submit"
                            defaultValue="Login"
                            className="btn btn-dark btn-lg btn-block"
                          />
                        </div>
                      </form>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-3 pb-lg-2" style={{ color: "#393f81" }}>
                        Don`t have an account?{" "}
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
