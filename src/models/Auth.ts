export interface LoginCredsDTO {
    email: string
    password: string
}

export enum Gender {
    Male,
    Female,
}

export interface UserRegisterDTO {
    // minLength: 1
    fullName: string
    // minLength: 6
    password: string
    // minLength: 1
    email: string
    address?: string
    birthDate?: string
    gender: Gender
    phoneNumber?: string
}

export interface TokenResponse {
    token?: string
}
