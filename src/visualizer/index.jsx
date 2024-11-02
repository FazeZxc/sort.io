import React, { useState, useEffect } from "react";
import {
  getMergeSortAnimations,
  getBubbleSortAnimations,
  getHeapSortAnimations,
  getQuickSortAnimations,
} from "../algorithms/index.jsx";
import "./visualizer.css";

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 30;
const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "red";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(randomIntFromInterval(5, 730));
    }
    setArray(newArray);
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const heapSort = () => {
    const animations = getHeapSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const [firstIndex, secondIndex] = animations[i];

      if (firstIndex < arrayBars.length && secondIndex < arrayBars.length) {
        if (i % 3 !== 2) {
          // Color change
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            arrayBars[firstIndex].style.backgroundColor = color;
            arrayBars[secondIndex].style.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          // Height change
          setTimeout(() => {
            const newHeight = array[firstIndex]; // Ensure newHeight corresponds correctly
            arrayBars[firstIndex].style.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      } else {
        console.error(
          `Invalid indices in animation: [${firstIndex}, ${secondIndex}]`
        );
      }
    }
  };

  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const [firstIndex, secondIndex] = animations[i];

      if (firstIndex < arrayBars.length && secondIndex < arrayBars.length) {
        if (i % 3 !== 2) {
          // Color change
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            arrayBars[firstIndex].style.backgroundColor = color;
            arrayBars[secondIndex].style.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          // Height change
          setTimeout(() => {
            const newHeight = array[firstIndex]; // Ensure newHeight corresponds correctly
            arrayBars[firstIndex].style.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      } else {
        console.error(
          `Invalid indices in animation: [${firstIndex}, ${secondIndex}]`
        );
      }
    }
  };

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{
            backgroundColor: PRIMARY_COLOR,
            height: `${value}px`,
          }}
        ></div>
      ))}
      <button onClick={resetArray}>Generate New Array</button>
      <button onClick={mergeSort}>Merge Sort</button>
      <button onClick={quickSort}>Quick Sort</button>
      <button onClick={heapSort}>Heap Sort</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

export default SortingVisualizer;
