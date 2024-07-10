function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  const objHaveNumber = {};
  for (let i = 0; i < numbers.length; i++) {
    const different = target - numbers[i];
    if (different in objHaveNumber) {
      return [objHaveNumber[different], i];
    }
    objHaveNumber[numbers[i]] = i;
  }
  return [];
}

const numbers = [2, 7, 11, 15];
const target1 = 9;
const target2 = 23;

const result1 = twoSum(numbers, target1);
const result2 = twoSum(numbers, target2);

console.log(result1);
console.log(result2);
