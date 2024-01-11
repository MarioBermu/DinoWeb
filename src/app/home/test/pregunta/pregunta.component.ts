import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pregunta.component.html',
  styleUrl: './pregunta.component.css'
})
export class PreguntaComponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public pointsA: number = 0;
  public pointsB: number = 0;
  public pointsC: number = 0;
  public winner: string = "";
  public URL: string = "";
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questionService.getQuestionJson().subscribe(
      res => {
        console.log('JSON recuperado:', res);
        this.questionList = res.questions;
      },
      error => {
        console.error('Error al cargar el JSON:', error);
      }
    );
  }

  nextQuestion() {
    this.currentQuestion++;

  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {

    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
    }
    if (option === "Tiranosaurio Rex") {
      this.pointsA += 1;
      console.log('Puntos A:', this.pointsA);
    } else if (option === "Velociraptor") {
      this.pointsB += 1;
      console.log('Puntos B:', this.pointsB);
    } else if (option === "Triceratops") {
      this.pointsC += 1;
      console.log('Puntos C:', this.pointsC);
    }
  }

  getWinner() {
    if (this.pointsA > this.pointsB && this.pointsA > this.pointsC) {
      this.winner = "Tiranosaurio Rex";
      this.URL = "https://static.wikia.nocookie.net/jurassicpark/images/8/88/FY3vrZzXwAAfklv-T.png/revision/latest/scale-to-width-down/1200?cb=20220804160841&path-prefix=es"
    } else if (this.pointsB > this.pointsA && this.pointsB > this.pointsC) {
      this.winner = "Velociraptor";
      this.URL = "https://www.duckshop.de/media/image/dc/ef/f1/Jurassic_Park_-_Velociraptor_103535717.jpg"
    } else if (this.pointsC > this.pointsA && this.pointsC > this.pointsB) {
      this.winner = "Triceratops";
      this.URL ="https://imagenes.muyinteresante.es/files/composte_image/uploads/2023/01/22/63cd065d4490e.jpeg"
    } else {
      this.winner = "Oviraptor";
      this.URL ="https://www.sopadesapo.com//imagenes_grandes/9788469/978846966325.JPG"
    }

  }

  resetQuiz() {
    this.getAllQuestions();
    this.pointsA = 0;
    this.pointsB = 0;
    this.pointsC = 0;
    this.currentQuestion = 0;
    this.progress = "0";

  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
  }
}
