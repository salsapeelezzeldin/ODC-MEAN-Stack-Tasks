class Data{
    static getId = (arr, key, val)=>{
        return arr.findIndex(el=> el[key] == val)
    }

    static compare(key, order) {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }
        
        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
        
        let comparison = 0
        if (varA > varB) 
            comparison = 1
        else if (varA < varB) 
            comparison = -1
        
        return ( order === 'asc' ? comparison : comparison * -1 )
        }
    }


}
module.exports = Data