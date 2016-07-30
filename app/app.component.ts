import { Component, OnInit } from '@angular/core';

import { ComposeProgram } from './composeProgram';
import { ComposeProgramService } from './composeProgram.service';

import './rxjs-extensions';

@Component({
  selector: 'my-app',

  template:` 
	<h1>{{title}}</h1>
	<div>
		<label>program name: </label>
		<input [(ngModel)]="composeProgram.programName" placeholder="programName">
	</div>
	<h2>{{composeProgram.programName}}:</h2>
	<div>
		<textarea [(ngModel)]="composeProgram.program"></textarea>
	</div>
	{{composeProgram.program}}
	<button (click)="launchProgram()">Launch program</button>
	`,

  providers: [ComposeProgramService]
})

export class AppComponent implements OnInit{
	title = 'Compose Web Console';
	composeProgram = new ComposeProgram();

	constructor(private composeProgramService: ComposeProgramService) { }

  	getProgram() {
    		this.composeProgramService.getProgram().then(composeProg => this.composeProgram = composeProg);	
	}

	launchProgram() {
    
		console.error('launchProgram');		
	}

	ngOnInit() {
    		this.getProgram();
  	}
}