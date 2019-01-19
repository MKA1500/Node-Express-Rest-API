import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  link = 'http://localhost:3000/api/servers/';
  storeServers(servers: any[]) {
    return this.http.post(this.link, servers);
  }
}
