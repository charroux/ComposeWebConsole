import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ComposeProgram } from './composeProgram';

@Injectable()
export class ComposeProgramService {

	private composeUrl = 'http://localhost:4000/compose';  // URL to web api
	private statusURL = this.composeUrl + '/status';

	private errorMessage = 'err';

	constructor(private http: Http) { }

	getProgram(){
		return this.http.get(this.composeUrl)
              	.toPromise()
               	.then(response => response.json() as ComposeProgram )
		.catch(this.handleError);
	}

	getProgramStatus(){
		return this.http.get(this.statusURL)
              	.toPromise()
               	.then(response => response.text())
		.catch(this.handleError);
	}

	stopProgram(){
		let headers = new Headers();
    
		headers.append('Content-Type', 'application/json');

    
		let url = `${this.statusURL}`;

    
		return this.http
.put(url, "azerty", {headers: headers})

		.toPromise()
		.then(response => response.text())              
		.catch(response => Promise.reject(new Error(response._body + ' ' + response.status + ' ' + response.statusText)));
	}

	saveProgram(composeProgram: ComposeProgram)  {

		return this.put(composeProgram);
    
	}

	private put(composeProgram: ComposeProgram) {

		let headers = new Headers();
    
		headers.append('Content-Type', 'application/json');

    
		let url = `${this.composeUrl}`;

    
		return this.http
.put(url, JSON.stringify(composeProgram), {headers: headers})

		.toPromise()
		.then(response => response.text())              
		.catch(response => Promise.reject(new Error(response._body + ' ' + response.status + ' ' + response.statusText)));
	}

	private handleError(error: any) {
		console.error(error.status + '+' + error.statusText);
    		//return Promise.reject(error.message || error);
		return Promise.reject(error);
  	} 

}