import { http } from "./config";
import { Movie, User } from "~/model";
import { DvdDto, RentDto } from "~/model/rent.dto";

export interface HttpResponse<T> {
    data: {
        Data: T
        Message: string
        Status: string
        StatusCode: number
    }
}

export class QueryHandler<T> {    
    
    constructor(readonly api: string) {}    

    list = async (): Promise<HttpResponse<T[]>> => await http.get(`${this.api}/get`)
    get = async (id: string): Promise<HttpResponse<T>> => await http.get(`${this.api}/get/${id}`)
    post = async (entity: T): Promise<HttpResponse<T>> => await http.post(`${this.api}/post`, entity) 
    put = async (entity: T): Promise<HttpResponse<T>> => await http.put(`${this.api}/put`, entity)
    delete = async (id: string): Promise<HttpResponse<boolean>> => await http.delete(`${this.api}/${id}`) 
}

export class WiproService {
    readonly customer = new QueryHandler<User>('customers') 
    readonly dvd = new QueryHandler<DvdDto>('dvds') 
    readonly locator = new QueryHandler<User>('locators') 
    readonly movie = new QueryHandler<Movie>('movies') 
    readonly rent = new QueryHandler<RentDto>('rents') 
}