import Link from "next/link";
import React from "react";

const LoginLink = () => {
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/post">Post</Link>
          <span>Logout</span>
        </>
      )}
    </>
  );
};

export default LoginLink;
