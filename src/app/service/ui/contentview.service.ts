import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentviewService {
  change: EventEmitter<Article>;

  constructor(){
      this.change = new EventEmitter();
  }
}
export interface Article {
  title: string;
  content?: string;
  contentUrl?:string;

}