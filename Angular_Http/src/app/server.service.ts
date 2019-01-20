import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

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
    return this.http.get(this.link)
            .map(
              (response: Response) => {
                const data = response.json();
                for (const server of data) {
                  server.name = "X_" + server.name;
                }
                return data;
              }
            )
            .catch(
              (error: Response) => {
                return Observable.throw('Something went wrong...');
              }
            );
  }
}
