// //1-Creo un array vacio llamado productos para ingresar mis productos

// const productos = [];

// //2. Creo una Función Productos. Funcion Contructora.  
// function Productos(accesorio, precio, stock){
// 	this.accesorio= accesorio;
// 	this.precio= precio;
// 	this.stock= stock
// }

// //3. Creo una función para crear accesorios
// const crearProductos= (accesorio, precio, stock) => {
// 	const producto= new Productos(accesorio, precio, stock);
// 	return producto;
// }

// //4. Ahora debo crear una función con el método push para guardar el producto ingresado por el usuario
// const agregarAProductos = (objetoProducto)=>{
// 	productos.push(objetoProducto);
// };

// //5. Pedir los datos del producto de ciclismo al usuario
// let accesorio= prompt("Ingrese un accesorio de ciclismo: ");
// let precio= prompt("Ingrese un precio: ");
// let stock= prompt("Ingrese la cantidad del producto: ");

// const instanciaDeProducto= crearProductos(accesorio, precio, stock);
// agregarAProductos(instanciaDeProducto);
// console.log(instanciaDeProducto);
// console.log(productos);