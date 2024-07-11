"use client";

import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/useUserContext";
import React from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { isAuthenticated } = useUserContext();

  if (typeof window !== 'undefined' && !isAuthenticated) {
    router.push("/login");
    return <></>;
  }

  return <>{children}</>;
};

export default ProtectedLayout;
