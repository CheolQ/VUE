// import { moduleA } * as mymodule from './module.js'
// console.log(mymodule.moduleA)

import { moduleA as msg} from './module.js'
console.log(msg);

import defaultmoduleC from "./module.js";
defaultmoduleC();
