import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Count Down Timer";
  timeLeft: number = 0;
  interval;
  inputTime: number ;
  numberOfSeconds : number = 60;
  hrs:number = 0;
  mins:number = 0;
  seconds:number = 0;

  startTimer() {
    if(this.inputTime>0)
    {
      var hours =this.inputTime/60 ;
      this.hrs = Math.floor(hours);
      if(this.hrs>0)
      {
        var mins = (hours- this.hrs) * 60;
        this.mins =Math.floor(mins);
        this.seconds =(Math.round(hours) *3600)%60 ; 
      }
      else
      {
        this.mins = Math.floor(this.inputTime%60);
        this.seconds = 0;
        
    }
      
      this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      }
      if (this.mins %60 == 0 && this.hrs>0) {
        this.hrs--;
        this.mins = 59;
        this.seconds = 59;
      }

      else if (this.seconds % 60 == 0 && this.mins > 0) {
        this.mins--;
        this.seconds = 59;

      }
      
      
      if (this.hrs == 0 && this.mins  == 0 && this.seconds == 0) {
        alert("Time Out!!!!")
        this.resetTimer();
        this.mins = 59;
        
      } 
    }, 1000);
  }
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.timeLeft = 0; 
    this.inputTime = 0;
    this.hrs = this.mins = this.seconds = 0;
  }
}
