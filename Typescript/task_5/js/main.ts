
export interface MajorCredits {
    _majorCreditBrand: void;
    credits: number;
}

export interface MinorCredits {
    _minorCreditBrand: void;
    credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

const major1: MajorCredits = { credits: 3 };
const major2: MajorCredits = { credits: 4 };
const minor1: MinorCredits = { credits: 2 };
const minor2: MinorCredits = { credits: 1 };

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
