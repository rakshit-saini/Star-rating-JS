let stars = document.getElementsByClassName("star")
let output = document.getElementById("output")


function genstar(n) {
    remove()
    for (let i = 0; i < n; i++) {
        if (n == 1) {
            var cls = "one";
        }
        else if (n == 2) {
            var cls = "two";
        }
        else if (n == 3) {
            var cls = "three"
        }
        else if (n == 4) {
            var cls = "four"
        }
        else if (n == 5) {
            var cls = "five"
        }
        stars[i].className = "star " + cls
    }

    output.innerHTML = `  Rating is : ${n}/5`
}

function remove() {
    let i = 0
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}