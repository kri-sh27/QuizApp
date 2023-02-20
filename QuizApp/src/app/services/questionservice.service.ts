import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class QuestionserviceService {
  constructor(private http: HttpClient) {}
  baseurl = 'http://127.0.0.1:8086';
  
  getQuestionJson() {
    return this.http.get<any>(this.baseurl + '/questions');
  }



  // getQuestion(){
  //   return this.http.get<any>("/assests/questions.json");
  // }
}
