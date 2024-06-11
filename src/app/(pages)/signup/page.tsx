"use client";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React from "react";
import Signup from "@/components/Signup";

const SignupPage = () => {
  const router = useRouter();
  const { authStatus } = useAuth();

  if (authStatus) {
    //if the user is logged in we dont want to show him the sign up page so we are redirecting him to the profile page
    router.replace("/profile");
    //we are returning an empty fragment as layout may have issues
    return <></>;
  }

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <Signup />
    </section>
  );
};

export default SignupPage;
