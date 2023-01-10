var score = Number(prompt('Balingizni kiriting'));

if (!isNaN(score)) {
    if (score > 0 && score < 80) {
        console.log("o`qishga kiraolmadingiz");
    } else if (score >= 80 && score < 100) {
        alert("kantrakt 3000$");
        var money = Number(prompt("pulingizni kiriting"))
        if (money >= 3000) {
            console.log('O`qishga qabul qilindingiz ')
        } else {
            console.log("pulingiz yetmas ekan")
        }


    } else if (score >= 100 && score < 150) {
        alert("kantrakt 2000$");
        var money = Number(prompt("pulingizni kiriting"))
        if (money >= 2000) {
            console.log('O`qishga qabul qilindingiz ')
        } else {
            console.log("pulingiz yetmas ekan")
        }
    } else if (score >= 150 && score < 180) {
        console.log("o`qishga qabul qilindingiz")
    } else {
        console.log("notogri ball  kiritdingiz")
    }



} else {
    alert('raqamingizni kiritng')
}