import { binarySearchRecursive, compare, stringCompare } from "./binarySearchRecursive.js";

const nums = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

const ordliste = ["aarhus", "andedam", "andegård", "bondefanget", "bondegård", "børnearbejde", "gadefejer", "gaardejer", "gær", "gødning", "kalapøjser", "kalundborg", "kørt", "kårde", "ålborg"];

console.log(binarySearchRecursive(34, nums, 0, nums.length - 1, compare));

console.log(binarySearchRecursive("andedam", ordliste, 0, ordliste.length - 1, stringCompare));
