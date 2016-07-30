import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ComposeProgram } from './composeProgram';

@Injectable()
export class ComposeProgramService {

	private composeUrl = 'http://localhost:8080/compose';  // URL to web api

	constructor(private http: Http) { }

	getProgram(){
		//console.error('==============================');
		return this.http.get(this.composeUrl)
              	.toPromise()
               	.then(response => response.json() as ComposeProgram )
		.catch(this.handleError);
	}

	private handleError(error: any) {
    		console.error('An error occurred', error);
    		return Promise.reject(error.message || error);
  	} 

}