let array = [1,2,3,4,5,6,7,8,9]         // исходный массив

let item = 7;                           // искомое число

let low = array[0];                     // нижняя граница в искомом диапазона в массиве
let high = array[array.length-1]        // верхняя граница в искомом диапазона в массиве    
let mid = Math.floor(low + high / 2)    // среднее округлённое значение искомого диапазона в массиве

while (low <= high) {                   // Пока эта часть не сократится до одного элемента
  mid = Math.floor(low + high / 2)      // проверяем средний элемент
  let guess = mid
  if (guess === item) {                 // Значение найдено
    return mid
  }
  if (guess > item) {                   // искомое значение больше текущего диапазона
    high = mid - 1                      // поэтому уменьшаем верхнюю границу диапазона 
  }
  if (guess < item) {                   // искомое значение меньше текущего диапазона
    low = high + 1                      // поэтому увеличиваем нижнюю границу диапазона
  }
  return 'None'                         // значение не существует
}


