const minRoomCapacity = 0;
const maxRoomCapacity = 5;

export const incrementHandler = (currentNumber: number, incrementAction: React.Dispatch<React.SetStateAction<number>>) => (
    incrementAction(currentNumber < maxRoomCapacity ? currentNumber + 1 : currentNumber)
);

export const decrementHandler = (currentNumber: number, incrementAction: React.Dispatch<React.SetStateAction<number>>) => (
    incrementAction(currentNumber > minRoomCapacity ? currentNumber - 1 : currentNumber)
);