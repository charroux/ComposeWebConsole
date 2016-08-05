import { Component, OnInit } from '@angular/core';

import { ComposeProgram } from './composeProgram';
import { ComposeProgramService } from './composeProgram.service';

import './rxjs-extensions';

@Component({
  selector: 'my-app',

  template:` 
	<h1>{{title}}</h1>
	<div>
		<label>program name (.groovy): </label>
		<input [(ngModel)]="composeProgram.programName" placeholder=".groovy">
	</div>
	<div>
		<textarea [(ngModel)]="composeProgram.program" placeholder="compute code with data"></textarea>
	</div>
	program configuration:
	<div>
		<textarea [(ngModel)]="composeProgram.configuration"></textarea>
	</div>
	<button (click)="launchProgram()">Launch program</button>
	<button (click)="getProgramStatus()">Get Program Status</button>
	<button (click)="stopProgram()">Stop program</button>		
	<div>
		<textarea [(ngModel)]="serviceResponse" readonly></textarea>
	</div>
	`,

  providers: [ComposeProgramService]
})

export class AppComponent implements OnInit{
	title = 'Compose Web Console';
	composeProgram = new ComposeProgram();
	serviceResponse: any;

	constructor(private composeProgramService: ComposeProgramService) { }

  	getProgram() {
    		this.composeProgramService
		.getProgram()
		.then(composeProg => this.composeProgram = composeProg);	
	}

	launchProgram() {
    
		this.serviceResponse = "waiting...";
		this.composeProgramService
		.saveProgram(this.composeProgram)
		.then(result => this.serviceResponse = result)
		.catch(error => this.serviceResponse = error);
	}

	getProgramStatus() {
    
		this.composeProgramService
		.getProgramStatus()
		.then(result => this.serviceResponse = result);
	}


	stopProgram() {
    
		this.composeProgramService
		.stopProgram()
		.then(result => this.serviceResponse = result)
		.catch(error => this.serviceResponse = error);
	}
	
	ngOnInit() {
    		this.getProgram();
  	}
}