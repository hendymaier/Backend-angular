import { Component,DoCheck, OnInit } from '@angular/core';
import { ArticlesModule } from '../../models/articles/articles.module';
import {ArticlesService} from '../../services/articles.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  article: ArticlesModule [];
  public searchString: string;

  constructor(private articleservice: ArticlesService){
    this.article=[];
    this.searchString="";

  }

  ngOnInit(): void {
     this.getArticles();
  }

  getArticles(){
  
    this.articleservice.getArticle()
    
    .subscribe( response =>{

         if(response)
         {
          this.article=response;
         
         }
         else {
         
        }

      },
      err => {
          console.log(err);
      }

   )
  }

  

  deleteArticle(id: string){
   
    
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {

      this.articleservice.delete(id)
      .subscribe( response =>{
         swal("Poof! Your file has been deleted!", {
          icon: "success",
         });
        this.getArticles();
      },
      err => { console.log(err);})
        
      } 
      
      else {
        swal("Your file is safe!");
      }
    });


    

  }

  searcharticles(){
  
    this.articleservice.search(this.searchString)
    .subscribe( response =>{

      this.thisarticle(response);
     
      },
      err => {
          console.log(err);
      }

   )
  }
 
  thisarticle(a: any)
  {
  return this.article=a;
  }
 

}
