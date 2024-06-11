const conf={
    port:3000,
    appwriteUrl:String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId:String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
}
//we created this file because sometimes we face the error that the env is not present , so we are creating this file to make sure that the file is available
export default conf