function checkNum(value) {
    if(typeof value !== "number") throw "유효하지 않은 값입니다.";
    console.log("숫자형 값으로 확인됩니다.");
}

try {
checkNum(100);
checkNum("Wrong Type");
} catch(e) {
    console.log(`에러가 발생했습니다. >>>>> ${e}`);
} finally {
    console.log("완료");
}
