import utils from '../utils/utils';

export default class Cpu {
	fontSet: Uint8Array = new Uint8Array([
		0xf0,
		0x90,
		0x90,
		0x90,
		0xf0, // 0
		0x20,
		0x60,
		0x20,
		0x20,
		0x70, // 1
		0xf0,
		0x10,
		0xf0,
		0x80,
		0xf0, // 2
		0xf0,
		0x10,
		0xf0,
		0x10,
		0xf0, // 3
		0x90,
		0x90,
		0xf0,
		0x10,
		0x10, // 4
		0xf0,
		0x80,
		0xf0,
		0x10,
		0xf0, // 5
		0xf0,
		0x80,
		0xf0,
		0x90,
		0xf0, // 6
		0xf0,
		0x10,
		0x20,
		0x40,
		0x40, // 7
		0xf0,
		0x90,
		0xf0,
		0x90,
		0xf0, // 8
		0xf0,
		0x90,
		0xf0,
		0x10,
		0xf0, // 9
		0xf0,
		0x90,
		0xf0,
		0x90,
		0x90, // A
		0xe0,
		0x90,
		0xe0,
		0x90,
		0xe0, // B
		0xf0,
		0x80,
		0x80,
		0x80,
		0xf0, // C
		0xe0,
		0x90,
		0x90,
		0x90,
		0xe0, // D
		0xf0,
		0x80,
		0xf0,
		0x80,
		0xf0, // E
		0xf0,
		0x80,
		0xf0,
		0x80,
		0x80 // F
	]);

	i: number = 0x000;
	memBuffer: ArrayBuffer = new ArrayBuffer(0x1000);
	memory: Uint8Array = new Uint8Array(this.memBuffer);
	pc: number = 0x200;
	pStart: number = 0x200;
	stack: number[] = new Array(0x10);
	sp: number = 0;
	v: Uint8Array = new Uint8Array(0x10);

	display: boolean[] = utils.setArray(new Array(0x800), false);
	displayHeight: number = 32;
	displayWidth: number = 64;

	input: boolean[] = utils.setArray(new Array(0x10), false);
	delayTimer: number = 0;
	soundTimer: number = 0;
	randomNG: number = utils.rng();

	paused = -1;
	speed = 10;

	opcode: number = (this.memory[this.pc] << 8) | this.memory[this.pc + 1];

	loadRom = (rom: Uint8Array) => {
		this.memory.set(rom, 0x200);
	};

	run = () => {
		if (this.paused >= 0) {
			// pressed goes here
		}
		// this.cycle
		this.pc += 2;
	};
}
