const str = s => targetString => {
    if(targetString.startsWith(s)) {
        //.........
        return(s)
    } else {
        throw new Error(`Tried to match ${s.slice(0,10)} but got ${targetString.slice(0, len(s))}`)
    }
};

const test = str('hello');
