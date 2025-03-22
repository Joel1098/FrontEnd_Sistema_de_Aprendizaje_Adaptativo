"use client";

import AuthToggle from "./AuthToggle";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-36 bg-white max-md:px-5 max-md:py-24">
      <section className="flex flex-col ml-3.5 max-w-full w-[479px]">
        <h1 className="self-center text-base text-black">Bienvenido </h1>
        <AuthToggle />
        <LoginForm />
      </section>
    </main>
  );
}

export default Login;
