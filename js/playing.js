/*
const fighting = () => {
    return "playing fighting game!";
}

const shooting = () => {
    return "playing shooting game!";
}
const horror = () => {
    return "playing horror game!";
}

// here we need to export one as default 
export default fighting;
// we can also export remaining functions as well
export { shooting, horror}; */
////////////////////////////////////////
// another method to export 
// *** remember while exporting default function we must need to use function keyword **** 
export default function fighting () {
    return "playing fighting game!";
}
///or 
export const shooting = () => {
    return "playing shooting game!";
}

export const horror = () => {
    return "playing horror game!";
}
////////////////////////////////////
/*export function shooting () {
    return "playing shooting game!";
}

export function horror () {
    return "playing horror game!";
}*/









