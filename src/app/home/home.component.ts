import { Component, OnInit } from '@angular/core';

import { ProductoService } from "../servicios/producto.service";
import { NgForm } from '@angular/forms';
import { Producto } from '../models/Producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos();
    this.resetForm();
  }

  onSubmit(productForm: NgForm){
    this.productoService.insertProducto(productForm.value);
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm){
    if(productForm != null){
      productForm.reset();
      this.productoService.productoElegido = new Producto();
    }
  }

}
