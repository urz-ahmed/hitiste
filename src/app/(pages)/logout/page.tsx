// "use client";
// import appwriteService from "@/appwrite/config";
// // import useAuth from "@/context/useAuth";
// import { useRouter } from "next/navigation";
// import React, {useEffect} from "react";

// const LogoutPage = () => {
//     const router = useRouter();
//     const {setIsAuthenticated} = useUserContext();

//     useEffect(() => {
//         appwriteService.logout()
//         .then(() => {
//             setIsAuthenticated(false);
//             router.replace("/");
//         })
//     }, []);

//     return(
//         <></>
//     )
// }


// export default LogoutPage;
