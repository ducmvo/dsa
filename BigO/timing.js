const addUpTo = (n) => {
    return n * (n+1) / 2;
}

const timing = () => {
	const time1 = performance.now();
    addUpTo(1_000_000_000);
    const time2 = performance.now();
    console.log(`Time elapsed: ${(time2-time1)/1000} seconds.`)
};

export default timing;
