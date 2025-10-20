let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net', '.us']

function randomDomain(arr1, arr2, arr3, arr4) {
    for (let i in arr1) {
        for (let a in arr2) {
            for (let n in arr3) {
                for (let d in arr4) {
                    console.log(`${arr1[i]}${arr2[a]}${arr3[n]}${arr4[d]}`)
                }
            }
        }
    }
}
randomDomain(pronoun, adj, noun,domain);