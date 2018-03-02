function nextBigNumber(n) {
    var tmp, t_count;
    var bin = n.toString(2);
    var count = bin.split('').filter(x => 1 == parseInt(x)).length;

    while (1) {
        n += 1;
        tmp = n.toString(2);
        t_count = tmp.split('').filter(x => 1 == parseInt(x)).length;
        if (t_count == count) {
            return n;
        }
    }
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(nextBigNumber(78));
