const takes = ["horimiya", "sao", "op", "dragonball", "fairytail"];
function vote(take, choice) {
    if (localStorage.getItem(take + "-voted")) {
        return;
    }
    const key = take + "-" + choice;
    let count = Number(localStorage.getItem(key)) || 0;
    count = count + 1;
    localStorage.setItem(key,count);
    localStorage.setItem(take + "-voted", choice);
    document.getElementById(key).textContent = count;
    lockButtons(take);
}
function lockButtons(take) {
    document.getElementById(take + "-agree").parentElement.disabled = true;
    document.getElementById(take + "-disagree").parentElement.disabled = true;
}
for(const take of takes) {
    for (const choice of ["agree", "disagree"]) {
        const key = take + "-" + choice;
        document.getElementById(key).textContent = localStorage.getItem(key) || 0;
    }
    if(localStorage.getItem(take + "-voted")) {
        lockButtons(take);
    }
}