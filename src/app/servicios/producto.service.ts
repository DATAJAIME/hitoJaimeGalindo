import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Producto } from '../models/Producto';

@Injectable()

export class ProductoService {

  listaProductos: AngularFireList<any>;
  productoElegido: Producto = new Producto();

  constructor(private firebase: AngularFireDatabase) { }

  getProductos() {
    return this.listaProductos = this.firebase.list('productos');
  }

  insertProducto(product: Producto) {
    this.listaProductos.push({
      name: product.name,
      desc: product.desc,
      price: product.price
    })
  }

  updateProducto(product: Producto) {
    this.listaProductos.update(product.$key, {
      name: product.name,
      desc: product.desc,
      price: product.price
    })
  }

  deleteProducto($key: string){
    this.listaProductos.remove($key);
  }
}
