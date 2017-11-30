import { Component, Inject, OnInit } from '@angular/core';
import {DeckService} from "../deck/deck.service";
import {MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-save-deck-dialog',
    templateUrl: './save-deck-dialog.component.html',
    styleUrls: ['./save-deck-dialog.component.css']
})

export class SaveDeckDialogComponent implements OnInit {

    newDeckName: string;

    constructor(public deckService : DeckService,
                public matDialogRef : MatDialogRef<SaveDeckDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: {deckId: string},
                public snackBar: MatSnackBar) {
        console.log("construcing SaveDeckDialogComponent");
        console.log(data);
        //this.newDeckName = data.deck.name;
    }

    ngOnInit() {
    }

    public renameDeck(): void {
        this.deckService.renameDeck(
            this.data.deckId,
            this.newDeckName
        ).then(
            succeeded => {
                //this.cardAddSuccess = true
                this.snackBar.open("Renamed deck", null, {
                    duration: 2000,
                });
                //this.refreshDeck();
            },
            err => {
                console.log(err);
                this.snackBar.open("Error renaming deck", null, {
                    duration: 2000,
                });
            });
        this.matDialogRef.close();
    }
}
