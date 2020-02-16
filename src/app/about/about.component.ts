import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../servicios/producto.service";
import { Producto } from '../models/Producto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  listaProductos: Producto[];
  productoEditar: Producto = new Producto();

  constructor(private productService: ProductoService) { }

  
  ngOnInit() {
    this.productService.getProductos()
      .snapshotChanges()
      .subscribe(item => {
        this.listaProductos = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.listaProductos.push(x as Producto);
        })
    });
  }

  elegirEditar(producto: Producto) {
    this.productoEditar = producto;
  }

  editar(){
    this.productService.updateProducto(this.productoEditar);
    this.productoEditar = new Producto();
  }

}
