import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter',
        [
          style({opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms',
          animate('550ms ease-out',
          style({opacity: 1, transform: 'translateY(0px)'})))
        ], {optional: true}),
        query(':leave', animate('50ms', style({opacity: 0})), {optional: true})
      ])
    ])
  ]
})
export class ServersComponent implements OnInit {
  servers$: Object;
  @ViewChild('f') addServerForm: NgForm;
  newServer = {
    name: '',
    id: 0,
    capacity: 0
  }
  constructor(private data: DataService) { }

  ngOnInit() {
    this.getServers();
  }

  private getServers() {
    this.data.getServers().subscribe(
      data => {
        this.servers$ = data;
        console.log(this.servers$);
      }
    )
  }

  onSubmit() {
    this.newServer.name = this.addServerForm.value.serverName;
    this.newServer.capacity = this.addServerForm.value.capacity;
    console.log(this.newServer);

    this.addServerForm.reset();
  }
}
