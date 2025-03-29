# ✨ Lista Enlazada en JavaScript

Este proyecto implementa una **Lista Enlazada** en node con operaciones esenciales y avanzadas como inserción, eliminación, búsqueda, inversión, eliminación de duplicados y obtención de elementos desde el final. Además, incluye pruebas automáticas con `console.assert()` para validar su funcionamiento.

---

## 📚 Características

✅ **Operaciones básicas:**  
- Inserción de elementos.  
- Eliminación de elementos.  
- Búsqueda de elementos.  

✅ **Funciones avanzadas:**  
- Invertir la lista (`invertir()`).  
- Eliminar duplicados (`eliminarDuplicados()`).  
- Obtener el n-ésimo elemento desde el final (`obtenerDesdeElFinal(n)`).  

✅ **Pruebas automáticas con `console.assert()`**  
✅ **Documentación detallada**  

---

## 🚀 Instalación y Ejecución

### 1️⃣ **Clonar el repositorio**  
```sh
git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/gjagomez/listaenlazadanode.git)
cd listaenlazadanode
```

### 2️⃣ **Ejecutar el código**  
Asegúrate de tener  **Node.js** instalado y ejecuta:  
```sh
node listaEnlazada.js
```

---

## 💪 Métodos Implementados

### **insertarCabezaLista(entrada)**
Inserta un nuevo nodo al inicio de la lista.  
📌 **Complejidad:** O(1).  
```js
lista.insertarCabezaLista(3); // Lista: 3
lista.insertarCabezaLista(2); // Lista: 2 -> 3
lista.insertarCabezaLista(1); // Lista: 1 -> 2 -> 3
```

### **eliminar(entrada)**
Elimina el primer nodo que contenga el valor especificado.  
📌 **Complejidad:** O(n).  
```js
lista.eliminar(2); // Lista: 1 -> 3
```

### **buscarLista(destino)**
Busca un nodo con el valor especificado y lo devuelve.  
📌 **Complejidad:** O(n).  
```js
let nodo = lista.buscarLista(3);
console.log(nodo.dato); // 3
```

### **invertir()**
Invierte el orden de la lista enlazada.  
📌 **Complejidad:** O(n).  
```js
lista.invertir();
lista.visualizar(); // Lista: 3 -> 2 -> 1
```

### **eliminarDuplicados()**
Elimina elementos duplicados de la lista.  
📌 **Complejidad:** O(n²).  
```js
lista.insertarCabezaLista(2); // Lista: 2 -> 1 -> 2 -> 3
lista.eliminarDuplicados();
lista.visualizar(); // Lista: 2 -> 1 -> 3
```

### **obtenerDesdeElFinal(n)**
Devuelve el n-ésimo elemento desde el final de la lista.  
📌 **Complejidad:** O(n).  
```js
console.log(lista.obtenerDesdeElFinal(2)); // 2 (segundo desde el final)
```

---

## 🔬 Pruebas Automáticas  

El código incluye **pruebas automáticas** con `console.assert()`.

Ejecuta:
```sh
node listaEnlazada.js
```

Ejemplo de prueba:
```js
console.assert(lista.obtenerDesdeElFinal(2) === 2, "Error: obtenerDesdeElFinal(2) debería ser 2");
```

---

## 📊 Complejidad Computacional  

| Método                     | Complejidad |
|----------------------------|------------|
| `insertarCabezaLista()`    | O(1)       |
| `eliminar(entrada)`        | O(n)       |
| `buscarLista(destino)`     | O(n)       |
| `invertir()`               | O(n)       |
| `eliminarDuplicados()`     | O(n²)      |
| `obtenerDesdeElFinal(n)`   | O(n)       |

---

## 📂 Ejemplos de Uso

### **Ejemplo 1: Lista vacía**
```js
const listaVacia = new Lista();
listaVacia.visualizar(); // Salida: (lista vacía)
console.assert(listaVacia.obtenerDesdeElFinal(1) === null, "Error: obtenerDesdeElFinal(1) en lista vacía debería ser null");
```

### **Ejemplo 2: Lista con un solo elemento**
```js
const listaUnElemento = new Lista();
listaUnElemento.insertarCabezaLista(5);
listaUnElemento.visualizar(); // Salida: 5
console.assert(listaUnElemento.obtenerDesdeElFinal(1) === 5, "Error: obtenerDesdeElFinal(1) debería ser 5");
```

### **Ejemplo 3: Lista con múltiples elementos**
```js
const lista = new Lista();
lista.insertarCabezaLista(3);
lista.insertarCabezaLista(2);
lista.insertarCabezaLista(1);
lista.visualizar(); // Salida: 1 2 3
```

---

## 📘 Licencia

Este proyecto está bajo la **MIT License**.

---



