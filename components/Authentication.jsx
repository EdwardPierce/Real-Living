import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import userPic from "../public/assets/user1.svg";
import SignElement from "./SignElement";

const Authentication = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <SignElement
          image={session.user.image}
          signFunction={signOut}
          signText="Sign Out"
          signInStatus={true}
        />
      </>
    );
  }
  return (
    <>
      <SignElement
        image={userPic}
        signFunction={signIn}
        signText="Sign In"
        signInStatus={false}
      />
    </>
  );
};

export default Authentication;
