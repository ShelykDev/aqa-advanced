function countdown(num) {
    if (num <= 0) {
        return 'the countdown is over';
    }

    console.log(num);
    countdown(num - 1);
}

countdown(5);