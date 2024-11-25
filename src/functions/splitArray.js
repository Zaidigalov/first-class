//делит массив на два равных массива

export default function splitArray(array) {
  const middleIndex = Math.ceil(array.length / 2); // Находим середину (с округлением вверх)
  const firstHalf = array.slice(0, middleIndex); // Срезаем первую половину
  const secondHalf = array.slice(middleIndex); // Срезаем вторую половину

  return [firstHalf, secondHalf]; // Возвращаем обе половины
}
