import { Component, OnInit } from '@angular/core';
import { UpdateCheckService } from './update-check.service';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent implements OnInit{
  title = 'firebase-app-angular';

  constructor(
    private _updateCheck: UpdateCheckService,
    private _swPush: SwPush,
  ){
    this._updateCheck.checkForUpdate()
  }

  ngOnInit(): void {
      this._swPush.messages.subscribe((message: any) => {
        console.log(message)
        alert(message)
      })
  }

}
