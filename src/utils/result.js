import { LOTTO_RULES } from "../constants";

// 유저 로또 번호와 당첨 번호 매칭
export function matchNumbers(userLotto, winningNumber){
    if (userLotto.length === 0 || winningNumber.length === 0){
        return;
    }
    const result = JSON.parse(JSON.stringify(userLotto));
    for (let i = 0; i < userLotto.length; i++){
        for (let j = 0; j < 6; j++){
            for (let k = 0; k < 7; k++){
                if (userLotto[i][j] === winningNumber[k]){
                    if (k !== 6){
                        result[i][j] = {
                            value: userLotto[i][j],
                            correct: true,
                        };
                    }
                    else{
                        result[i][j] = {
                            value: userLotto[i][j],
                            bonus: true
                        };
                    }
                    break;
                }
                else{
                    result[i][j] = {
                        value: userLotto[i][j],
                        correct: false
                    }
                }
            }
        }
    }
    return result;
}

// 당첨 결과 계산
export function calcWinningResult(matchedLotto){
    if (!matchedLotto) { return;}
    const result = [];
    for (let i = 0; i < matchedLotto.length; i++){
        let correct = 0;    // 맞은 번호 개수
        let bonus = 0;      // 보너스 번호 개수
        for (let j = 0; j < 6; j++){
            if (matchedLotto[i][j].correct){
                correct++;
            }
            if (matchedLotto[i][j].bonus){
                bonus++;
            }
        }
        if (bonus === 1 && correct === 5){ // 2등
            result.push({
                result: LOTTO_RULES[6].RESULT,
                prize: LOTTO_RULES[6].PRIZE
            });
        }
        else if (correct === 6){    // 1등
            result.push({
                result: LOTTO_RULES[7].RESULT,
                prize: LOTTO_RULES[7].PRIZE
            });
        }
        else{ // 나머지 등수
            result.push({
                result: LOTTO_RULES[correct].RESULT,
                prize: LOTTO_RULES[correct].PRIZE
            });
        }
    }
    return result;
}

// 당첨 금액 계산
export function calcPrize(winningResult){
    let prize = 0;
    winningResult.forEach(result => prize += result.prize);
    return prize;
}

// 수익률 계산
export function calcProfitRate(prize, pay){
    return ((prize / pay) * 100 - 100).toFixed(2);
}