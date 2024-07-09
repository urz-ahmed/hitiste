// "use client";
// import appwriteService from "@/appwrite/config";
// import useAuth from "@/context/useAuth";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, {FormEvent, useState} from "react";

// const Signup = () => {

//     const router = useRouter()
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//         name: "",
//     })
//     const [error, setError] = useState("")

//     const {setAuthStatus} = useAuth()

//     const create = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         try {
//             const userData = await appwriteService.createUserAccount(formData);
//             if (userData) {
//                 setAuthStatus(true)
//                 router.push("/profile")
//             }
//         } catch (error: any) {
//             setError(error.message)
//         }
//     }

//     return(
//         <div className="flex items-center justify-center">
//             <div className={`mx-auto w-full max-w-lg bg-gray-200/50 rounded-xl p-10`}>
//                 <div className="mb-2 flex justify-center">
//                     <span className="inline-block w-full max-w-[60px]">
//                         <img src="/favicon.ico" alt="Logo" />
//                     </span>
//                 </div>
//                 <h2 className="text-center text-2xl font-bold leading-tight text-black">
//                     Sign up to create account
//                 </h2>
//                 <p className="mt-2 text-center text-base text-gray-600">
//                     Already have an account?&nbsp;
//                     <Link
//                         href="/login"
//                         className="font-medium text-primary transition-all duration-200 hover:underline"
//                     >
//                         Sign In
//                     </Link>
//                 </p>
//                 {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
//                 <form onSubmit={create} className="mt-8">
//                     <div className="space-y-5">
//                         <div>
//                             <label htmlFor="name" className="text-base font-medium text-gray-900">
//                                 Full Name
//                             </label>
//                             <div className="mt-2">
//                                 <input
//                                     className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                                     type="text"
//                                     placeholder="Full Name"
//                                     id="name"
//                                     value={formData.name}
//                                     onChange={(e) =>
//                                         setFormData((prev) => ({ ...prev, name: e.target.value }))
//                                     }
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="text-base font-medium text-gray-900">
//                                 Email address
//                             </label>
//                             <div className="mt-2">
//                                 <input
//                                     className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                                     type="email"
//                                     value={formData.email}
//                                     onChange={(e) =>
//                                         setFormData((prev) => ({ ...prev, email: e.target.value }))
//                                     }
//                                     placeholder="Email"
//                                     id="email"
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <div className="flex items-center justify-between">
//                                 <label htmlFor="password" className="text-base font-medium text-gray-900">
//                                     Password
//                                 </label>
//                             </div>
//                             <div className="mt-2">
//                                 <input
//                                     className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                                     type="password"
//                                     placeholder="Password"
//                                     value={formData.password}
//                                     onChange={(e) =>
//                                         setFormData((prev) => ({
//                                             ...prev,
//                                             password: e.target.value,
//                                         }))
//                                     }
//                                     id="password"
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <button
//                                 type="submit"
//                                 className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-primary/80"
//                             >
//                                 Create Account
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup;
import * as z from "zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { SignupValidation } from "@/lib/validation";
import Loader from "@/components/shared/Loader";
import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
const SignUpPage = () => {
  const { toast } = useToast();
  const {checkAuthUser, isLoading: isUserLoading} = useUserContext()
  const navigate = useRouter();
  // Queries
  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } = useCreateUserAccount();
  const { mutateAsync: signInAccount, isPending: isSigningInUser } = useSignInAccount();
  //   const form = useForm<z.infer<typeof SignupValidation>>({
  //     resolver: zodResolver(SignupValidation),
  //     defaultValues: {
  //       name: "",
  //       username: "",
  //       email: "",
  //       password: "",
  //     },
  //   });
  
  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z
      .string()
      .min(2, { message: "Membership ID must be at least 5 characters." }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const newuser = await createUserAccount(values);
    if (!newuser) {
      return toast({title: "Signup failed. Please try again"});
    }
    const session= await signInAccount({
      email:values.email,
      password:values.password
    })
    if(!session){
      return toast({title: "Signin failed. Please try again"});
    }
    const isLoggedIn = await checkAuthUser()

    if(isLoggedIn){
      form.reset();
      navigate.push('/events');
    }else{
      return toast({title: "Sign up failed. Please try again"})
    }
  }

  return (
    <Form {...form}>
      <div className="mt-20 flex flex-col justify-center items-center">
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Create a new account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To Join ISTE HIT LEARN, Please enter your details
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 mt-4 flex flex-col justify-center items-center"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Membership ID</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormDescription>
                  Enter a registered mail address
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {isCreatingAccount ? (
              <div className="flex-center gap-2">
                <Loader />
                Loading
              </div>
            ) : (
              "SignUp"
            )}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link
              href="/signin"
              className="font-mono underline cursor-pointer text-small-semibold ml-1"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};
export default SignUpPage;
