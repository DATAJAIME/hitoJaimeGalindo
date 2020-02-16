import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/Producto';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  listaProductos: Producto[];

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

  eliminar($key: string){
    this.productService.deleteProducto($key);
  }
}
