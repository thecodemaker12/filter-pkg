# What is this?

Filter every data objects you have.

# Installation

`npm i filter-pkg --save`

Then

```
import { filterObj } from 'filter-pkg';
const arr = [1, 23, 56, 2, 9, 10, 7];
let test = filterObj(arr, 6, {op: 'inf'});
console.log(arr, test);
```