import { Component, OnInit } from '@angular/core';
import { IProduct, IProductWrapper } from 'src/app/interfaces/i-product';
import { ProductModel } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<IProduct> = [];
  product: IProduct = {} as IProduct;
  showMore: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onAll();
  }

  onAll(): void {
    this.productService.all().subscribe(
      (response: IProductWrapper) => {
        console.log(response);
        this.products = response.products;
      }
    );
  } 

  showToggle(): void {
    this.showMore = !this.showMore;
  }

  showDetail(p: IProduct): void {
   this.product = p;
  }

}
