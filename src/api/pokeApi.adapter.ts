// Adapter tipo middleware
import axios from 'axios';

export interface HttpAdapter {
    // Esta interfaz forza que se tenga la clase que sea pero debe tener GET
    // Y debe trabajar con <T> para retornar una promsa de <T>
    // Por ello las clases: PokeApiFetchAdapter y PokeApiAdapter la implementan
    // Por eso se puede usar una clase u otra y se cumple la sustitución de Liskov
    get<T>(url: string): Promise<T>;
}


export class PokeApiFetchAdapter implements HttpAdapter{
    async get<T>( url: string ): Promise<T>{
        const resp = await fetch( url );
        const data: T = await resp.json();

        console.log("desde Fetch");
        return data;
    }
}


export class PokeApiAdapter implements HttpAdapter{

    // propiedad de la clase que almacena la libreria de terceros axios
    private readonly axios = axios;

    // async get(url:string) => {
    //     // peticion get
    //     return;
    // }

    // recibe, trabaja y retorna info que no se sabe que es por eso se coloca el generico <T>
    async get<T>( url: string ): Promise<T>{
        const { data } = await this.axios.get<T>( url );

        console.log("desde axios");
        return data;
    }

    async post(url: string, data: any) {
        
    }
    async patch(url: string, data: any) {
        
    }
    async delete(url: string) {
        
    }
}