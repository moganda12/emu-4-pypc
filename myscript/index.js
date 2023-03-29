const arch = require(['arch/index'], function arch() {});
let memory = require(['memory'], function memory() {});
memory = memory.memory;

function KB(KBs = 1) {
    return memory(KBs * 1024);
};

function MB(MBs = 1) {
    return KB(1024 * MBs);
};

function GB(GBs = 1) {
    return MB(1024 * GBs)
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
