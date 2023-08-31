import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private service:NewsService){}

  public newsArticles:Array<any>=[];

  ngOnInit():void{
    this.service.GetHeadlines().subscribe((data:any)=>{
      console.log(data.articles); 
      this.newsArticles=data.articles;

  });

}
}
