import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chrono',
    templateUrl: './chrono.component.html',
    styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {
    /**
     *
     */
    private isStarted: boolean;
    /**
     *
     */
    private minutes: number = 0;
    /**
     *
     */
    private seconds: number = 0;
    /**
     *
     */
    private milliseconds: number = 0;
    /**
     *
     */
    private timer: any;

    constructor() {}

    ngOnInit() {

    }

    /**
     * Switch between stop or start action.
     */
    private toggle() {

        if (this.isStarted) {
            this.stopTimer();
        } else {
            this.startTimer();
        }

        this.isStarted = !this.isStarted;
    }

    /**
     *
     */
    private startTimer() {

        this.milliseconds = 0;
        this.seconds = 0;
        this.minutes = 0;

        this.timer = setInterval(() => {

            this.milliseconds++;

            if (this.milliseconds > 99) {
                this.seconds++;
                this.milliseconds = 0;
            }

            if(this.seconds > 59) {
                this.minutes++; // .. On incrémente le nombre de minute
                this.seconds = 0; // et on affecte 0 a notre variable seconde
            }

        }, 10); // on exécute ce code toute les secondes
    }

    /**
     *
     */
    private stopTimer() {
        clearInterval(this.timer);
    }
}
