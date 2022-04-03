export const checkIfExistInLocalStorage = (key:string):boolean => {
    if (localStorage.getItem(key)) return true
    return false
}

export const getItemFromLocalStorage = (key:string):string =>{
    return JSON.parse(localStorage.getItem(key) || "empty")
}

export const setItemToLocalStorage = (key:string ,value:string):void =>{
    localStorage.setItem(key, JSON.stringify(value));
}