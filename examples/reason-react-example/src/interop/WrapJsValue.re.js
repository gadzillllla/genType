/** 
 * @flow strict
 * @generated 
 * @nolint
 */

const MyMath = require('./MyMath');

// In case of type error, check the type of 'round' in 'WrapJsValue.re' and './MyMath'.
export const roundTypeChecked: (number) => number = MyMath.round;

// Export 'round' early to allow circular import from the '.bs.js' file.
export const round: mixed = roundTypeChecked;

// In case of type error, check the type of 'area' in 'WrapJsValue.re' and './MyMath'.
export const areaTypeChecked: (Ipoint) => number = MyMath.area;

// Export 'area' early to allow circular import from the '.bs.js' file.
export const area: mixed = function _(Arg1) { const result = areaTypeChecked({x:Arg1[0], y:Arg1[1]}); return result };

// In case of type error, check the type of 'getValueAtIndex' in 'WrapJsValue.re' and './MyMath'.
export const getValueAtIndexTypeChecked: (myArray<string>, number) => string = MyMath.getValueAtIndex;

// Export 'getValueAtIndex' early to allow circular import from the '.bs.js' file.
export const getValueAtIndex: mixed = getValueAtIndexTypeChecked;

// $FlowExpectedError: Reason checked type sufficiently
const WrapJsValueBS = require('./WrapJsValue.bs');

import type {myArray} from './MyMath';

export interface Ipoint {+x: number, +y?: number};

export type { myArray };

export const myArea: (Ipoint) => number = function _(Arg1) { const result = WrapJsValueBS.myArea([Arg1.x, Arg1.y]); return result };

export const roundedNumber: number = WrapJsValueBS.roundedNumber;

export const areaValue: number = WrapJsValueBS.areaValue;
