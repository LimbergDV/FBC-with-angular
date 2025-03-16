import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateCheckService {

  constructor(
    private _appRef: ApplicationRef,
    private _update: SwUpdate
  ) { }
   checkForUpdate() {
    const appIsStable$ = this._appRef.isStable.pipe(first(isStable => isStable === true));
    const everyFiveSeconds$ = interval(5 * 1000);
    const everyFiveSecondsOnceAppIsStable$ = concat(appIsStable$, everyFiveSeconds$)
    everyFiveSecondsOnceAppIsStable$.subscribe(async () => {
      try {
        const updateFound = await this._update.checkForUpdate();
        console.log(updateFound ? 'New version' : 'No changes')
      } catch (error) {
        console.error(error)
      }
    })
  }

}
