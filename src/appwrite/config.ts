import conf from "@/conf/config";
import { Client, Account, ID } from "appwrite";

type createUserAccount = {
  email: string;
  password: string;
  name: string;
};
type loginUserAccount = {
  email: string;
  password: string;
};

//the client is used to talk to the appwrite
const appwriteClient = new Client();
//we're setting the details
appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

//the below account is responsible for creating the account
export const account = new Account(appwriteClient);

export class AppwriteService {
  //create a new record of user in the app write
  async createUserAccount({ email, password, name }: createUserAccount) {
    try {
      //the ID is directly from the appwrite
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //this.login is a cyustom method created for the purpose of the login
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: loginUserAccount) {
    try {
       return await account.createEmailPasswordSession(email,password)
    } catch (error:any) {
         throw (error);
            
    }
  }
  async isLoggedIn():Promise<boolean> {
    try {
     const data=await this.getCurrentUser();
     //we are returning a boolean value based on the presence of the data
     return Boolean(data);

    } catch (error) {
        
    }
    return false
  }
  
  async logout(){
    try {
        return await account.deleteSession("current")
    } catch (error) {
        console.log("Get Current User error :"+error);
    }
  }

  async getCurrentUser(){
    try {
      return account.get()
    } catch (error) {
        console.log("Get Current User error :"+error);
    }
    return null
  }
}


const appwriteService=new AppwriteService();
export default appwriteService;