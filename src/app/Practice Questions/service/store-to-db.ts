import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreSignupStatusToDB {
  storeToDB(status: boolean) {
    localStorage.setItem('isUserSignup', JSON.stringify(status));
  }
}
