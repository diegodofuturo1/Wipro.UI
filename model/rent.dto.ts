import { Dvd, Movie, User } from ".";

export interface DvdDto {
    Id: string
    Price: string
    Movie: Movie
    Status: string
    IsRented: 'disponível' | 'alugado'
}

export interface RentDto {
    Id: string
    Dvd: Dvd
    Customer: User
    Locator: User
    Status: string
    RentDate: string
    ReturnDate: string
}