export interface User {
    nome: string;
    papel: string;
    username: string;
    hashedpass: string;
}
export interface Login {
    email: string;
    password: string;
}