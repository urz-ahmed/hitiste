import { Client, Account, Databases, Storage, Avatars } from "appwrite";
// xxxxxxxxxxxxxxxxFor testing purpose never include in production
// console.log('Appwrite Config: ', {
//   url: process.env.NEXT_PUBLIC_APPWRITE_URL,
//   projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
//   databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASEID,
//   storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGEID,
//   userCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERCOLLECTION,
//   postCollectionId: process.env.NEXT_PUBLIC_APPWRITE_POSTCOLLECTION,
//   savesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_SAVESCOLLECTION
// });

export const appwriteConfig = {
  url: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  databaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASEID),
  storageId: String(process.env.NEXT_PUBLIC_APPWRITE_STORAGEID),
  userCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_USERCOLLECTION),
  postCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_POSTCOLLECTION),
  savesCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_SAVESCOLLECTION)
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
