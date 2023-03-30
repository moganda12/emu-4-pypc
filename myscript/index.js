const arch = require('./arch/arch');
const memory = require('./memory');

function Byte(Bytes = 256) {
    return memory.crateMemory(Bytes)
};

function KB(KBs = 1) {
    return Byte(KBs * 1024);
};

function MB(MBs = 1) {
    return KB(1024 * MBs);
};

function GB(GBs = 1) {
    return MB(1024 * GBs)
};

time = 0;

class CPU {
    constructor(memory) {
        this.memory = memory;
        this.F_ROM = MB();

        this.regnames = [
            'r0', 'r1', 'r2', 'r3',
            'r4', 'r5', 'r6', 'r7',
            'acc', 'io0', 'io1', 'io2'
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
