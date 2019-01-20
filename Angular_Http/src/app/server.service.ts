import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable()
export class ServerService {
  link = 'http://localhost:3000/api/http-test/';

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    // these headers are default, so I don't have to write that:
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.link, servers, { headers: headers });
  }

  getServers() {
    return this.http.get(this.link);
  }
}
