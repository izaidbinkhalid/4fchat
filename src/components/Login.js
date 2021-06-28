import React from "react";
import "firebase/app";

import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div style={{background: "#323232"}}>
      <div
        className="container-fluid offet-md-3"
        style={{
          margin: "auto",
          padding: "3rem",
          width: "100%",
          height: "100vh",
          display: "flex",
        }}
      >
        <div className="about Card">
          <div className="wrapper">"If you want to live a happy life,</div>
          <div className="wrapper2">
            tie it to a goal,not to people or things."
          </div>
          <div className="wrapper3">-Albert Einste.</div>
        </div>
        <div
          style={{
            width: "30%",
            margin: "auto",
            // marginTop: "3%",
            textAlign: "center",
            justifyItems: "center",
            // float: "right",
            border: "1px hidden",
            borderRadius: "2rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingBottom: "1rem",
            // paddingTop: "1rem",
            background: "#f5e5d6",
          }}
        >
          <h4
            style={{
              fontSize: "40px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Log In
          </h4>
          <br />
          <button
            type="primary"
            className="btn btn-success mb-3"
            style={{
              display: "flex",
              margin: "auto",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            block
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
            
          >
            Google Sign-In
          </button>
          <hr style={{ backgroundColor: "white" }} />
          <button
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            }
            type="Primary"
            className="btn btn-primary mb-3"
            style={{
              display: "flex",
              margin:"auto",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            
          >
            FaceBook Sign-In
          </button>
        </div>
      </div>
    </div>
    // <div id="login-page">
    //   <div id="login-card">
    //     <h2>Welcome to UniChat!</h2>
    //     <div
    //       className="login-button google"
    //       onClick={() =>
    //         auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    //       }
    //     >
    //       <GoogleOutlined /> Sign In with Google
    //     </div>
    //     <br /> <br />
    //     <div
    //       className="login-button facebook"
    //       onClick={() =>
    //         auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
    //       }
    //     >
    //       <FacebookOutlined /> Sign In With Facebook
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
