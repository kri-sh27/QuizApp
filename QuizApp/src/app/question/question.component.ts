import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from '../services/questionservice.service';
import { UserresponseService } from '../services/userresponse.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  constructor(
    private questionser: QuestionserviceService,
    private res: UserresponseService
  ) {}

  currentquestion: number = 0;
  questionlist: any[] = [];
  prevflag = false;
  data: any = '';
  radiostatus: boolean = false;
  qlist: any[] = [];
  result: any = 0;

  ngOnInit(): void {
    this.getAllQuestions();
  }

  // this method collects all the details from api
  getAllQuestions() {
    this.questionser.getQuestionJson().subscribe((res) => {
      this.questionlist = res;
    });
    //console.log(this.questionlist)
  }

  //this is for proceeding to next question
  next() {
    this.res.addRes({
      username: localStorage.getItem('name'),
      id: this.currentquestion + 1,
      selected: this.data,
    });
    this.currentquestion++;
    this.radiostatus = false;
    if (this.questionlist.length === this.res.getRes().length) {
      this.res.submitRes();
    }
  }
  
  onchange(e: any) {
    this.data = e.target.value;
  }

  //this is for geeting back to previous question
  previous() {
    this.currentquestion--;
  }

 
}
