
import { LocationPipe } from './category.pipe';
import { FormsModule } from '@angular/forms';
import { MenuService} from '../services/menu.service';
import{ActivatedRoute} from '@angular/router';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {MdSnackBar} from '@angular/material';

import { Product } from './../models/Product';
import { ProductService } from './../services/product.service';
import { CartAction } from './../store/actions/cart.actions';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  
  products:Product[];
  quantity: number;
  value: any = []; 
  
  CartMessage = "Successfully added to the Cart";

  // Angular will know to supply an instance of the ProductService & Router when it creates a new ProductComponent
  // Because they are injected in the constructor
  constructor (private _MenuService: MenuService, private route:ActivatedRoute, private router:Router, private cartStore: CartAction,public snackBar: MdSnackBar) {
  
  }

  // openSnackBar() {
  //   this.snackBar.openFromComponent(PizzaPartyComponent, {
  //     duration: 500,
  //   });
  // }
  
  openSnackBar(message: string, action: string) {
    
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // Dynamic route for detail info when a product is clicked
  clickedProduct(product) {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }

  // When add to cart button is clicked
  addToCart(product) {
    
    // this.productService.addToCart(product)
    console.log(this.quantity)
    this.cartStore.addToCart(product, this.quantity || 1);
     this.openSnackBar(product.name,this.CartMessage);
  }

 

  ngOnInit() {
    let menu = this.route.snapshot.params['menu'];
    console.log(menu);
  
this._MenuService.getMenu(menu).subscribe(res => this.value = res);
  }

}
