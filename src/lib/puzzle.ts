export type GridIndex = 0 | 1 | 2 | 3 | 4;
export type WordIndex = `across_${GridIndex}` | `down_${GridIndex}`;

export type Puzzle = {
	clues: { [key in WordIndex]: string };
	answers: { [key in WordIndex | "wpp"]: string };
};

export type LetterStatus = "exact" | "inexact" | "absent";

export function statusForLetter(letter: string, wpp: string, pos: GridIndex): LetterStatus {
	if (letter === "") {
		return "absent";
	}
	if (letter === wpp[pos]) {
		return "exact";
	}
	if (wpp.includes(letter)) {
		return "inexact";
	}
	return "absent";
}

export const DemoPuzzle = {
	clues: {
		across_0: "1 across",
		across_1: "2 across",
		across_2: "3 across",
		across_3: "4 across",
		across_4: "5 across",
		down_0: "1 down",
		down_1: "2 down",
		down_2: "3 down",
		down_3: "4 down",
		down_4: "5 down"
	},
	answers: {
		across_0: "fbcde",
		across_1: "bcdef",
		across_2: "cdefb",
		across_3: "defbc",
		across_4: "efbcd",
		down_0: "fbcde",
		down_1: "bcdef",
		down_2: "cdefb",
		down_3: "defbc",
		down_4: "efbcd",
		wpp: "eqnvr"
	}
};
