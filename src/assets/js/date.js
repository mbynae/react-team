let year = new Date().getFullYear();
let month = new Date().getMonth()+1 < 10 ? `0${new Date().getMonth()+1}` : new Date().getMonth()+1;
let date = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate();
let calendar = `${year}-${month}-${date}`;