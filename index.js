class Set {
  constructor() {
    this.items = {};
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  values() {
    return Object.values(this.items);
  }
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }
  difference(otherSet) {
    // A diferença entre conjuntos são os elementos de um conjunto que não pertence a outro.
    const differenceSet = new Set();
    this.values().forEach(value => {
      // Se o valor do conjunto que chamou a função não estiver no conjunto passado por parâmetro é porque esse valor faz parte do conjunto diferença
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }
  isSubsetOf(otherSet) {
    // Se o conjunto da função que chamou for maior que o conjunto passado por parâmetro então retorne false porque
    // Aí não pode ser subconjunto. Subconjunto maior que o conjunto original? Não tem como meu nobre!
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true; // Caso eu passe um conjunto vazio, um conjunto vazio é subconjunto de todos os conjuntos
    this.values().every(value => { 
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    console.log(this.items)
    /* O Object.keys() é um método embutido no JavaScript que retorna um array contendo as chaves de um objeto. 
    Em outras palavras, ele extrai as chaves do objeto e as retorna como elementos de uma matriz. */
    /** this.items é o meu objeto */
    /** Quando eu faço Object.keys(this.items).length eu estou dizendo: pegue todas as chaves do objeto que estã em this.items e e verique o tamanho dele depois porque a quantidade de chaves é quantidade de elementos */
    return Object.keys(this.items).length;
  }
  clear() {
    this.items = {};
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const values = this.values();
    let objString = `${values[0]}`;
    for (let i = 1; i < values.length; i++) {
      objString = `${objString},${values[i].toString()}`;
    }
    return objString;
  }
}


console.log("Criando um novo conjunto")
let conjunto = new Set();
console.log(conjunto)

console.log("Adicionando 1 ao conjunto")
conjunto.add(1)

console.log("Mostrando o conjunto")
console.log(conjunto.toString())

console.log(conjunto.delete(2))

console.log(conjunto.delete(1))

console.log(conjunto.has(1))

console.log(conjunto.values())


conjunto.add(1)
conjunto.add(2)

let conjunto2 = new Set();

conjunto2.add(3)
conjunto2.add(4)

let conjunto3 = new Set();

conjunto3 = conjunto.union(conjunto2);

console.log(conjunto);
console.log(conjunto2);
console.log(conjunto3);

let a = new Set()
let b = new Set()
let c = new Set()

a.add(1)
a.add(2)
b.add(2)
b.add(3)
b.add(4)

c = a.intersection(b)
console.log(c)

console.log("\nDiferenca entre 2 conjuntos")
a.clear()
b.clear()
c.clear()

a.add(2)
a.add(5)
a.add(7)
a.add(8)
a.add(14)
a.add(19)

b.add(1)
b.add(4)
b.add(7)
b.add(10)
b.add(14)
b.add(23)

console.log("Conjunto A: " + a.toString())
console.log("Conjunto B: " + b.toString())

c = a.difference(b)
console.log("Conjunto diferenca: " + c.toString())

console.log("Subconjunto: ")
a.clear()
b.clear()
a.add(1)
a.add(2)
b.add(3)

console.log("Conjunto A: " + a.toString())
console.log("Conjunto B: " + b.toString())
console.log("Conjunto B é subconjunto do conjunto A? " + b.isSubsetOf(a))

console.log(a.size())
