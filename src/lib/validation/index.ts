import * as z from "zod";

// ============================================================
// USER
// ============================================================
const popularEmailDomains = ["gmail.com", "yahoo.com", "outlook.com"];

const emailDomainValidator = (email: string) => {
  const domain = email.split("@")[1];
  return popularEmailDomains.includes(domain);
};
const usernameValidator = z
  .string()
  .min(5, { message: "Membership ID must be at least 5 characters." })
  .regex(/^[a-z]+$/, {
    message: "Username must be lowercase letters only and without spaces.",
  });

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: usernameValidator,
  email: z.string().email().refine(emailDomainValidator, {
    message: "Only these domains supported (gmail.com, yahoo.com, outlook.com)",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});

export const EditProfileValidation = z.object({
  name: z.string().min(4, { message: "Too short" }),
  bio: z.string(),
  file: z.custom<File[]>(),
});
// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "Minimum 5 characters." })
    .max(2200, { message: "Maximum 2,200 characters" }),
  file: z.custom<File[]>(),
  location: z
    .string()
    .min(1, { message: "This field is required" })
    .max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});
