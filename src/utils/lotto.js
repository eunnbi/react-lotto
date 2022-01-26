import { dummyNumber } from "../constants";

// 당첨 번호 가져오기
export const getWinningNumber = () => {
    // 원래는 API 호출하여 데이터 가져오기
    const winningNumber = [
        dummyNumber.drwtNo1, 
        dummyNumber.drwtNo2, 
        dummyNumber.drwtNo3, 
        dummyNumber.drwtNo4, 
        dummyNumber.drwtNo5, 
        dummyNumber.drwtNo6, 
        dummyNumber.bnusNo
    ];
    return winningNumber;
}

// 로또 1장 번호 자동 생성
export const createLottoNum = () => {
    const lotto = [];
    for (let i = 0; i < 6; i++){
        let number = Math.floor(Math.random() * 45) + 1;
        while (lotto.indexOf(number) !== -1){
            number = Math.floor(Math.random() * 45) + 1;
        }
        lotto.push(number);
    }
    lotto.sort((num1, num2) => num1 - num2);
    return lotto;
}


export function createUserLotto(num){
    const userLotto = [];
    for (let i = 0; i < num; i++){
        const lottoNum = createLottoNum();
        userLotto[i] = lottoNum;
    }
    return userLotto;
}



// 가장 최신 회차 계산
export const getNextRound = () => {
    const startDate = new Date(2002, 11, 7, 23, 59, 59);
    const today = new Date();
    const diff = today.getTime() - startDate.getTime();
    const nextRound = Math.floor((diff / (1000 * 60 * 60 * 24 * 7))) + 2;
    return nextRound;
}
