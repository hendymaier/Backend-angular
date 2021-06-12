import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from '../global';
import { Observable } from 'rxjs';
//import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


@Injectable()

export class ArticlesService {

  public url: string;
  
  
  constructor(private _http: HttpClient) {

    this.url=global.url;
      
   }



   getArticle(/*last: any= null*/): Observable<any>{
      
    var article='articles'; //point enter this api params this controller 

   /* if(last!=null)
    {
    article='article';

    }/*/
  
    return this._http.get(this.url+ article);
   
  }
  delete(id: string)
  {
  
    var article='articles';
    return this._http.delete(this.url+ article+'/'+id);
  }

 search(searchstring: string){

  var article='articles';
  return this._http.get(this.url+ article+'/'+searchstring);
 }

}
