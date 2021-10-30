import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  activeForm:boolean=false;
  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons(){  // this.items = [];
console.log(this.firestore.collection('coupons').valueChanges())
}

  //setorUpdateCoupons(){}

}
