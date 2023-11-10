import config from "@/config/config";
import { Client, Account, ID } from "appwrite";
import { SignInType, SignUpType } from "./authType";

export default function useAuth() { 

    const client = new Client()
        .setEndpoint(config.appWriteURL) // Your API Endpoint
        .setProject(config.appWriteProjectId); // Your project ID
    const account = new Account(client);


    const signUp = async (params: SignUpType) => {

        try {
            const userAccount = await account.create(ID.unique(), params.email, params.password, params.name);
            return (userAccount) ? signIn({email:params.email,password:params.password}) : userAccount;                
            
        } catch (error) {
            console.error(error);
            throw error;
        }
        
    }

    const signIn = async (params: SignInType) => { 
        try {
            const userAccount = await account.createEmailSession(params.email, params.password);
            return userAccount
        } catch (error) {
            console.error(error);
            throw error;
            
        }
    }

    const getCurrentUser = async () => { 
        try {
            const user = account.get();
            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const signOut = async () => { 
        try {
            return account.deleteSessions();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    return {
        signUp,
        signIn,
        signOut,
        getCurrentUser
    };

}