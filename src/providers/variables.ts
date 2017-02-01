import { Injectable } from '@angular/core';

@Injectable()
export class Variables {
  
	host: any;

  	constructor() {
    	this.host = "http://saludasualcance.net/";
  	}

	setHost(value) {
    	this.host = value;
  	}

  	getHost() {
    	return this.host;
  	}

}