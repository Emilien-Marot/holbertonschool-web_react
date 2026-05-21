interface MajorCredits {
  credits: number;
  __brand: 'majorCredits'
}

interface MinorCredits {
  credits: number;
  __brand: 'minorCredits'
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  const result: MajorCredits = {credits: subject2.credits + subject1.credits, __brand: 'majorCredits'}
  return(subject1.credits + subject2.credits)
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  const result: MinorCredits = {credits: subject2.credits + subject1.credits, __brand: 'minorCredits'}
  return(subject1.credits + subject2.credits)
}
