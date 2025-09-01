function createPromise(promiseNumber){
    return new Promise((res)=>{
        const time = Math.random() * 2000 + 1000; // 1–3 seconds
        setTimeout(()=>{
            res({promiseNumber, time: (time/1000).toFixed(3)});
        }, time);
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
        totalTime = Math.max(totalTime, Number(result.time)); // Longest time

        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = `Promise ${result.promiseNumber}`;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.textContent = result.time;
        tr.appendChild(td2);

        output.appendChild(tr); // <-- Append the row to tbody
    });

    const trlast = document.createElement("tr");
    const tdrow = document.createElement("td");
    tdrow.textContent = "Total";
    trlast.appendChild(tdrow);

    const tdrow2 =  document.createElement("td");
    tdrow2.textContent = totalTime.toFixed(3);
    trlast.appendChild(tdrow2);

    output.appendChild(trlast); // <-- Append total row
	console.log(document.querySelectorAll("tr"));
});


