import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

// https://indepth.dev/reference/rxjs/operators/take-while
// https://www.learnrxjs.io/learn-rxjs/operators/filtering/takewhile
// Example 1: Take values under limit
//emit 1,2,3,4,5
const srcList$ = of(1, 2, 3, 4, 5);
//allow values until value from source is greater than 4, then complete
const example = srcList$.pipe(takeWhile((val) => val <= 4));
const subscribe = example.subscribe((val) => console.log(val));
//output: 1,2,3,4
