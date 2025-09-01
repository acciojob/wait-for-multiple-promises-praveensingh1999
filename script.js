//your JS code here. If required.
function createPromise(promiseNumber){
	return new Promise((res)=>{
		const time = Math.random()*2000+10000;
		setTimeout(()=>{
			res({promiseNumber, time: (time/1000).toFixed(3)});
		},time);
	});
}
const promises = [
	createPromise(1),
	createPromise(2),
	createPromise(3)
];
Promise.all(promises).then(results => {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear loading message

    let totalTime = 0;

    results.forEach(result => {
        totalTime = Math.max(totalTime, result.time); // Keep track of the longest time
        const row = `<tr><td>Promise ${result.promiseNumber}</td><td>${result.time}</td></tr>`;
        output.innerHTML += row; // Add each promise's result
    });

    const totalRow = `<tr><td>Total</td><td>${totalTime}</td></tr>`;
    output.innerHTML += totalRow; // Add total row
});