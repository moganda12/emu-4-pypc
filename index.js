const arc = require('arcsecond/index.ts');
const memory = require('memory.js');

function KB(KBs = 1) {
    if (KBs >= 1024) {
        throw new Error(`Kilobyte: ammount '${KBs}'KB is bigger than 1MB so use it instead`)
    }
    return memory(KBs * 1024);
};

function MB(MBs = 1) {
    if (KBs >= 1024) {
        throw new Error(`Megabyte: ammount '${MBs}'KB is bigger than 1GB so use it instead`)
    }
    return KB(1024);
};

function GB(GBs = 1) {
    return MB(1024)
};

time = 0;

class CPU {
    constructor(memoryLen) {
        this.memory = memory(memoryLen);
        this.F_ROM = MB()

        this.regnames = [
            'r0', 'r1', 'r2', 'r3',
            'r4', 'r5', 'r6', 'r7',
            'acc'
        ];

        this.ip = memory(8);

        this.reggies =  memory(this.regnames.length * 8);

        this.regimap = this.regnames.reduce((map, name, i) => {
            map[name] = i * 8;
            return map;
        }, {});
    };
    getRegister(name) {
        if (!(name in this.regimap)) {
            throw new Error(`getRegister: no such register '${name}'`);
        };
        return this.reggies.getBigUint64(this.regimap[name]);
    };
};

function assemble(file) {
    
};

cpu = new CPU(MB(8));

cpu.getRegister('r1');

console.log(cpu.getRegister('r1'))
