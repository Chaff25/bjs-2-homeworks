"use strict";

function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: Infinity, max: -Infinity, avg: 0 };
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }

  const avg = parseFloat((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let sumOdd = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let countEven = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
      countEven++;
    }
  }
  return countEven > 0 ? sumEven / countEven : 0;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let subArr of arrOfArr) {
    const result = func(...subArr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}