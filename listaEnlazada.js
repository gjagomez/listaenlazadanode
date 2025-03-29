class Nodo {
    constructor(dato, enlace = null) {
        this.dato = dato;
        this.enlace = enlace;
    }

    toString() {
        return `${this.dato} => ${this.enlace}`;
    }

    leerDato() {
        return this.dato;
    }

    siguiente() {
        return this.enlace;
    }
}

class Lista {
    constructor() {
        this.primero = null;
    }

    // Devuelve el primer nodo de la lista
    leerPrimero() {
        return this.primero;
    }

    // Inserta un nuevo nodo al principio de la lista
    insertarCabezaLista(entrada) {
        const nuevo = new Nodo(entrada, this.primero);
        this.primero = nuevo;
    }

    // Inserta un nuevo nodo después del nodo anterior
    insertarLista(anterior, entrada) {
        const nuevo = new Nodo(entrada, anterior.enlace);
        anterior.enlace = nuevo;
    }

    // Elimina el primer nodo que contiene el valor de entrada
    eliminar(entrada) {
        let actual = this.primero;
        let anterior = null;

        while (actual !== null && actual.dato !== entrada) {
            anterior = actual;
            actual = actual.enlace;
        }

        if (actual !== null) {
            if (actual === this.primero) {
                this.primero = actual.enlace;
            } else {
                anterior.enlace = actual.enlace;
            }
        }
    }

    // Busca un nodo que contenga el dato especificado
    buscarLista(destino) {
        let indice = this.primero;
        while (indice !== null) {
            if (indice.dato === destino) {
                return indice;
            }
            indice = indice.enlace;
        }
        return null;
    }

    // Muestra los elementos de la lista
    visualizar() {
        let n = this.primero;
        const elementos = [];
        while (n !== null) {
            elementos.push(n.dato);
            n = n.enlace;
        }
        console.log(elementos.join(' '));
    }

    toString() {
        return `=> ${this.primero}`;
    }

    // Método nuevo: invertir() - Invierte el orden de la lista enlazada.
    invertir() {
        let anterior = null;
        let actual = this.primero;
        let siguiente = null;

        while (actual !== null) {
            siguiente = actual.enlace; // Guardamos el siguiente nodo
            actual.enlace = anterior;  // Invertimos el enlace
            anterior = actual;         // Avanzamos el nodo anterior
            actual = siguiente;        // Avanzamos al siguiente nodo
        }
        this.primero = anterior; // El primer nodo ahora es el último
    }

    // Método nuevo: eliminarDuplicados() - Elimina elementos duplicados de la lista.
    eliminarDuplicados() {
        let actual = this.primero;

        while (actual !== null && actual.enlace !== null) {
            let siguiente = actual;
            while (siguiente.enlace !== null) {
                if (siguiente.enlace.dato === actual.dato) {
                    siguiente.enlace = siguiente.enlace.enlace; // Elimina el duplicado
                } else {
                    siguiente = siguiente.enlace;
                }
            }
            actual = actual.enlace;
        }
    }

    // Método nuevo: obtenerDesdeElFinal(n) - Devuelve el n-ésimo elemento desde el final de la lista.
    obtenerDesdeElFinal(n) {
        let longitud = 0;
        let actual = this.primero;

        // Contamos la longitud de la lista
        while (actual !== null) {
            longitud++;
            actual = actual.enlace;
        }

        if (n > longitud || n <= 0) return null; // Si n es inválido, retornamos null

        let indice = this.primero;
        for (let i = 0; i < longitud - n; i++) {
            indice = indice.enlace; // Avanzamos hasta el n-ésimo desde el final
        }
        return indice.dato; // Retornamos el dato del nodo encontrado
    }
}

// Ejemplos de uso

const lista = new Lista();
lista.insertarCabezaLista(3);
lista.insertarCabezaLista(2);
lista.insertarCabezaLista(1);
lista.insertarCabezaLista(2); // Duplicado para probar eliminarDuplicados

console.log("Lista inicial:");
lista.visualizar(); 

// Eliminar duplicados
lista.eliminarDuplicados();
console.log("\nDespués de eliminar duplicados:");
lista.visualizar(); 

// Invertir la lista
lista.invertir();
console.log("\nDespués de invertir la lista:");
lista.visualizar();

// Obtener el 2do elemento desde el final
console.log("\nElemento 2 desde el final:");
console.log(lista.obtenerDesdeElFinal(2)); // Debería mostrar 2


// Pruebas automáticas

// Prueba 1: Lista vacía
const listaVacia = new Lista();
console.assert(listaVacia.visualizar() === "", "Test 1 fallido: Lista vacía");

// Prueba 2: Lista con un solo elemento
const listaUnElemento = new Lista();
listaUnElemento.insertarCabezaLista(5);
console.assert(listaUnElemento.visualizar() === "5", "Test 2 fallido: Lista con un solo elemento");

// Prueba 3: Lista con varios elementos
const listaConElementos = new Lista();
listaConElementos.insertarCabezaLista(3);
listaConElementos.insertarCabezaLista(2);
listaConElementos.insertarCabezaLista(1);
console.assert(listaConElementos.visualizar() === "1 2 3", "Test 3 fallido: Lista con múltiples elementos");

// Prueba 4: Eliminar duplicados
lista.insertarCabezaLista(2);
lista.insertarCabezaLista(2);
lista.eliminarDuplicados();
console.assert(lista.visualizar() === "3 2 1", "Test 4 fallido: Eliminar duplicados");

// Prueba 5: Invertir lista
lista.invertir();
console.assert(lista.visualizar() === "1 2 3", "Test 5 fallido: Invertir lista");

// Prueba 6: Obtener el 2do elemento desde el final
console.assert(lista.obtenerDesdeElFinal(2) === 2, "Test 6 fallido: Obtener el 2do elemento desde el final");
