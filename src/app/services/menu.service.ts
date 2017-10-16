import{Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

import { Http, Response, Headers } from '@angular/http';

@Injectable()

export class MenuService{
    
    url:string="https://desi-dine-7f4ab.firebaseio.com/.json";
   

constructor(private http :Http){

}

  getMenu(res) {
    return this.http.get("https://desi-dine-7f4ab.firebaseio.com/"+res+"/.json")
      .map(res =>res.json());

  }

//   getcatag(id){
//     return this.http.get("https://development-5978e.firebaseio.com/"+id+"/categories/.json").map(res =>res.json());
//   }
    



}