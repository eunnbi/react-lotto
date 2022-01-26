// value in ms
const oneSeconds = 1000;
const oneMinutes = 1000 * 60;
const oneHour = 1000 * 60 * 60;
const oneDay = 1000 * 60 * 60 * 24;

// 당첨 발표까지 남은 시간 계산
export const getRemainingTime = () => {
    const today = new Date();
    const resultDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()), 21, 0, 0);
    /*
    const resultDay = new Date(
        today.getFullYear(), 
        today.getMonth(), 
        today.getDate(), 
        22, 10, 0
    );
    */
    const diff = resultDay.getTime() - today.getTime();
    if (diff < 0){
        return 0;
    }
    const day = Math.floor(diff / oneDay);
    const hour = Math.floor((diff % oneDay) / oneHour);
    const minutes = Math.floor((diff % oneHour) / oneMinutes);
    const seconds = Math.floor((diff % oneMinutes) / oneSeconds);
    const remainingTime = {day, hour, minutes, seconds};
    return remainingTime;
}
