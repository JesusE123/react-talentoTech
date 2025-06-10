export type User = {
    email:string,
    password:string,
    isLogged:boolean,
    role:"Admin" | "User"
}