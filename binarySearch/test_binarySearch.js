import { binarySearch, compare, stringCompare, nameCompare } from "./binarySearch.js";

const nums = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];
const ordliste = ["aarhus", "andedam", "andegård", "bondefanget", "bondegård", "børnearbejde", "gadefejer", "gaardejer", "gær", "gødning", "kalapøjser", "kalundborg", "kørt", "kårde", "ålborg"];
const persons = [
  { name: "Draco Malfoy", house: "Slytherin" },
  { name: "Harry Potter", house: "Gryffindor" },
  { name: "Hermione Granger", house: "Gryffindor" },
  { name: "Neville Longbottom", house: "Gryffindor" },
  { name: "Ron Weasley", house: "Gryffindor" },
];

console.log(binarySearch(31, nums, compare));

console.log(binarySearch("gaardejer", ordliste, stringCompare));

console.log(binarySearch("Ron Weasley", persons, nameCompare));
