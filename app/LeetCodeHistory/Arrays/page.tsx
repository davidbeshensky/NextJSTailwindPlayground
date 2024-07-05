// src/LeetCodeProblem.js
"use client";
import React, { useState } from "react";

const LeetCodeProblem = () => {
  return (
    <div>
    <div>
      <h1 className="p-2 text-2xl">217. Contains Duplicate</h1>
      <p className="p-2 border-2 border-white">
        Given an integer array nums, return true if any value appears at least
        twice in the array, and return false if every element is distinct.
      </p>
      <pre className="p-4">
        <code>
          {`function containsDuplicate(nums: number[]): boolean {
              const numSet = new Set(nums);
              if (nums.length === numSet.size) {
                return false;
              } else {
                return true;
              }
            };`}
        </code>
      </pre>
      <h1 className="p-2">notes:</h1>
      <p className="p-2">
        the constructor for a set takes and iterable object which include
        Arrays, Strings, Typedarrays, Maps, Sets, and NodeLists. mostly just
        Arrays I'd assume... 
        Ex. const mySet = new Set(); you can add arguments to set() 
        or you can manually add using myset.add()
      </p>
    </div>
    </div>
  );
};

export default LeetCodeProblem;
