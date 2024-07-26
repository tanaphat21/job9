import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonGrid, IonRow, IonCol,IonLabel, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonGrid, IonRow, IonCol,IonLabel,IonButton],
})
export class HomePage {
  constructor() {}
}