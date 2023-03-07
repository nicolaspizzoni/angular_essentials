import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService) { }

  product: Product = {
    name: '',
    price: 0
  }

  //Roda assim que o componente é montado
  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe((data) => {
      this.productService.showMessage("Produto criado")
      this.productService.cancel()
      console.log("DADOS", data)
    })
  }

  cancel(): void {
    this.productService.cancel()
  }

}
