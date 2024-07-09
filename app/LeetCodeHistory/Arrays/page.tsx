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
    <div>
        <h1>understanding hash maps</h1>
        <pre className="p-4">
        <code>
          {`function isAnagram(s,t,map = new Map()) {
            const isEqual = s.length === t.length;
            if (isEqual) return false;

            addFrequency(s, map);
            subtractFrequency(t, map);

            return checkFrequency(map);
            };

            const addFrequency = (str, map) => {
                for (const char of str) {
                    const count = (map.get(char) || 0) + 1;

                    map.set(char, count);
                }
            }

            const subtractFrequency = (str, map) => {
                for (const char of str) {
                    if (!map.has(char)) continue;

                    const count = map.get(char) - 1;
                    
                    map.set(char, count);
                }
            };

            const checkFrequency = (map) => {
                for (const [char, count] of map) {
                    count isEmpty = count === 0;
                    if (!isEmpty) return false;
                }
                return true;
            };`}
        </code>
      </pre>   
    <div>
    Explaining the solution: first we check if the lengths are equal to return that specific case quickly
    addFrequency s, map; this function iterates over each character in string s and updates the hash map with the frequency of each character.
    </div>
    </div>

    </div>
  );
};

export default LeetCodeProblem;
