import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productLis: string[] = ["phone", "tablet", "headset"];
  item: string = '';

  addItems() {
    this.productLis.push(this.item);
  }

  deleteProduct(index: number) {
    this.productLis.splice(index, 1);
  }
}
