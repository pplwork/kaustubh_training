function swap(items, left, right){
    var temp = items[left];
    items[left] = items[right];
    items[right] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
    return items;
}

class Person{
  constructor(name, age, salary, sex){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.sex = sex;
  }
  static Sort(arr, field, order){
      const propComparator = (propName) =>
            (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1
    if(order === 'asc'){
        const temp = arr.sort(propComparator(field))
        console.log(temp)
      }
      if(order === 'desc'){
        const temp = arr.sort(propComparator(field))
        console.log(temp.reverse())
      }
  }
}

const p1 = new Person('demo1', 24, 50000, 'male')
const p2 = new Person('demo2', 34, 30000, 'female')
const p3 = new Person('demo3', 45, 40000, 'male')
const p4 = new Person('demo4', 23, 60000, 'female')
const p5 = new Person('demo5', 13, 70000, 'male')

let demo =[
  p1,p2,p3,p4,p5                    
] 

Person.Sort(demo, 'name', 'desc')
