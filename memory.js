const memory = size => {
    let MEME = new ArrayBuffer(size);
    let MEMORY = new DataView(MEME);
    return MEMORY;
};
