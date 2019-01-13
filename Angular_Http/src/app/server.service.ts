import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  link = 'xxx';
  storeServers(servers: any[]) {
    return this.http.post(this.link, servers);
  }
}
