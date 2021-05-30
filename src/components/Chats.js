import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const Chats = (props) => {
  const history = useHistory();
  const { user } = useAuth();
  const [Loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  };

  const getFile = async (url) => {
    const responce = await fetch(url);
    const data = await responce.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      setLoading(false);
      history.push("/");

      return;
    } else {
      console.log("user????????????", user);
      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "Project-ID": process.env.REACT_APP_CHAT_ENGINE_ID,
            "User-Name": user.email,
            "User-Secret": user.uid,
          },
        })
        .then((res) => {
          console.log("first re", res);
          setLoading(false);
        })
        .catch((err) => {
          console.log("err", err);
          let formdata = new FormData();
          formdata.append("username", user.email);
          formdata.append("secret", user.uid);

          getFile(user.photoURL).then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);
            console.log(avatar)

            axios
              .post("https://api.chatengine.io/users/", formdata, {
                headers: {"PRIVATE-KEY": process.env.REACT_APP_CHAT_ENGINE_KEY},
              })
              .then(() => setLoading(false))
              .catch((error) => {
                console.log(error);
                setLoading(false);
              });
          });
        });
    }
  }, [user, history]);

  if (!user || Loading) return <div style={{textAlign:'center',margin:'auto',width:"100%",height:"100%"}}>
      <img src='200.gif' />
  </div> ;

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">4F chat</div>
        <div onClick={() => handleLogout()} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh-50px)"
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
