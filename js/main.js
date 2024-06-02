// modules
// 1. ***you need to have local server running to make modules
// 2. need to have type="module" in script tag (and remeber when we use type="module" there's no need use defer or put script at the bottom it will automatically do that for us)
// 3. *** when we use type="module" it immediately initiate the "use strict"; 

/*import fighting from './playing.js';
import { shooting, horror} from './playing.js';

console.log(fighting());
console.log(shooting());
console.log(horror());*/
//////////////////////////
// to change the name of these functions ( as )
/*import fighting from './playing.js';
import { shooting as shoot, horror as horr} from './playing.js';

console.log(fighting());
console.log(shooting());
console.log(horror()); 
console.log(fighting());
console.log(shoot());
console.log(horr()); */
////////////////////////////////////
// another way to import** (import * as )
import * as Games from './playing.js';

console.log(Games.default());
console.log(Games.shooting());
console.log(Games.horror());
// we have a problem and that's because of the default function ****










