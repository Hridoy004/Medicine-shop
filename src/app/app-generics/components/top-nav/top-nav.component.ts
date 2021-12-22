import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../../root-browser/services/cart.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  public totalItem : number = 0;
  @Input() headerTitle: string;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
