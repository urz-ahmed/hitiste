"use client"
// import useAuth from "@/context/useAuth"
import { useRouter } from "next/navigation"
import { useUserContext } from "@/context/useUserContext"

import React from "react"

const ProtectedLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {

    const router = useRouter();
    const { isAuthenticated } = useUserContext();

    if (!isAuthenticated) {
        router.replace("/login");
        return <></>;
    }
    return children

}

export default ProtectedLayout;