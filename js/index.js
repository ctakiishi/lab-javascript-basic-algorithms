<<<<<<< HEAD
// Iteration 1: Names and Input
let hacker1 = 'Victor Moraes'

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Cynthia Takiishi'

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigatos has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let result1 = hacker1.toUpperCase().replace(/,/g,' ')

console.log(result1)

let result2 = ''

for (let i=hacker2.length -1; i>=0; i--) {
    result2 += hacker2[i]
}

console.log(result2)

let lexicography = hacker1.localeCompare(hacker2)

if(lexicography === -1) {
    console.log(`The driver's name goes first.`)
} else if (lexicography === 1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log('What?! You both have the same name?')
}

// Bonus 1:
let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat placerat augue, nec finibus lectus accumsan at. Vestibulum porta eros non est laoreet, eu mattis libero egestas. Cras sit amet mi odio. Suspendisse convallis tortor id magna luctus molestie. Suspendisse commodo, nibh et vehicula lobortis, mauris orci euismod erat, a vestibulum lorem nisi sit amet ante. Nulla rhoncus sem metus, porttitor vehicula tortor fringilla aliquam. Duis quis risus quis diam maximus rhoncus ut non ex. Aliquam ornare in orci dignissim congue. Praesent auctor diam in nisl suscipit accumsan. Maecenas placerat iaculis sem quis aliquam.

Integer gravida eros lacinia dolor rhoncus auctor. Nulla eu sem non lacus semper viverra posuere ut eros. Nunc sollicitudin turpis mauris, et commodo erat mattis sit amet. Suspendisse tincidunt cursus purus, et elementum elit luctus vel. Etiam felis nisi, faucibus non ex sit amet, convallis tincidunt dolor. Integer ornare sem quis metus ultrices, eget viverra purus sodales. Morbi quis neque consequat, vehicula ex vel, vestibulum dui. Nulla varius maximus ligula, blandit venenatis est volutpat nec. Morbi ultricies, leo vel maximus consequat, sapien dolor volutpat sapien, at viverra elit enim id est. Morbi eget facilisis erat. Sed porttitor rhoncus augue, id auctor erat fringilla a. Curabitur in sem consequat, tempor lorem eget, sodales velit. Proin quis libero a massa accumsan ornare. Proin mollis in erat vitae mattis.

Donec fermentum ante eget enim ullamcorper, ac volutpat tortor interdum. Etiam rhoncus ultrices iaculis. Curabitur sagittis mi et justo dignissim consectetur. Fusce nec mauris in erat congue feugiat. Sed efficitur bibendum blandit. Ut volutpat suscipit nibh, id dignissim libero eleifend et. Nam velit lectus, vehicula eu orci at, blandit finibus odio. Integer mollis mauris at risus gravida, et congue lectus hendrerit. Morbi at vestibulum lectus. Nullam pellentesque nulla molestie, commodo nisl non, blandit erat. In finibus quam erat, in vehicula dolor consequat et.`

let wordCount = paragraph.split(' ')
let arr = wordCount.length
let etCount = 0

for (let i=0; i<wordCount.length; i++) {
    if(wordCount[i].includes("\n") === true) {
        arr += 1
    }
}

console.log(arr)

for (let i=0; i<wordCount.length; i++) {
    if((wordCount[i].replace(`\n\n`, ' ')  === 'et') || (wordCount[i].replace(`.`, '')  === 'et')) {
        etCount += 1
    }
}
console.log(etCount)

// Bonus 2:
let phraseToCheck = `A man, a plan, a canal, Panama!`

let palindrome = phraseToCheck.replace(/[^\w]/gi, '').toLowerCase()

let reversePhrase = ''

for (let i=palindrome.length -1; i>=0; i--) {
    reversePhrase += palindrome[i]
}

if (reversePhrase === palindrome) {
    console.log('They are palindrome!')
} else {
    console.log('They are not palindrome!')
}
=======

// Iteration 1: Names and Input
let hacker1 = 'Cynthia';
console.log(`The drive´s name is ${hacker1}`);
let hacker2 = 'Mauricio';
console.log(`The navigator´s name is ${hacker2}`);

// Iteration 1: Names and Input
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let result = '';
for (let i=0;i<hacker1.length;i++){
    result += hacker1[i].toUpperCase();
    if(i<hacker1.length-1){
        result += ' ';
    }
}
console.log(result);

let reverse = '';
for(let j=hacker2.length-1;j>=0;j--){
    reverse +=hacker2[j];
}
console.log(reverse);

let lexicography = hacker1.localeCompare(hacker2);
if(lexicography === -1) {
    console.log('The driver´s name goes first.')
} else if (lexicography === 1) {
    console.log('Yo, the navigator goes first definitely.')
} else {
    console.log('What?! You both have the same name?')
}

// Bonus 1

let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ex sed ipsum euismod placerat. Aliquam facilisis varius lectus sed ultricies. Pellentesque quis odio arcu. Quisque eu dictum nulla. Aenean ullamcorper tempus odio, tempus ultricies lectus venenatis et. Mauris mattis nulla nec semper faucibus. Fusce ac gravida tortor. Sed sapien libero, luctus vehicula dolor in, laoreet vulputate sapien. Ut urna libero, vulputate ut nisi ut, porta porttitor est. Duis sed consectetur diam. Integer eu ipsum ac neque tempor vestibulum. Sed bibendum, ipsum vel cursus consequat, quam mi pharetra lacus, sed elementum nisi turpis a risus. Mauris non pellentesque magna.

In nec sagittis nisi. Vivamus dignissim suscipit tempus. Pellentesque vel quam leo. Aliquam vestibulum ornare sapien, et dictum lacus eleifend et. Aliquam ornare imperdiet tortor, id bibendum lorem euismod ut. Ut ullamcorper posuere augue, ac mattis magna maximus ac. Fusce pellentesque vulputate aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis bibendum quis enim porta convallis. Nunc facilisis mi ac turpis porta venenatis. Nullam sodales dolor non tellus accumsan, vel pulvinar ante scelerisque. Aliquam a metus libero. Cras ligula est, dictum at laoreet a, luctus dignissim metus. Fusce ultricies dolor consectetur lobortis tempus. Sed tincidunt mauris ac elit tempor, id tempor quam varius.

Suspendisse porttitor, velit vitae fringilla porttitor, enim risus feugiat nibh, in bibendum turpis dolor vel ipsum. Ut ornare sapien vel lectus ornare fermentum. Nam fringilla elit at tempor ultrices. Phasellus auctor interdum massa a suscipit. Sed erat tellus, fringilla et maximus eget, lobortis eu orci. Vivamus gravida purus sed metus rhoncus rhoncus. Donec vehicula blandit ipsum, non iaculis urna tempor quis. Phasellus gravida scelerisque libero, et faucibus turpis. Cras iaculis finibus sapien, sit amet fermentum ante tincidunt a.`;

let arr = paragraph.split(' ');
let countWords = arr.length;

for(let i=0;i<arr.length;i++) {
    if(arr[i].indexOf("\n") > 0) {
        countWords += 1;
    }
} 

console.log(countWords);


let countEt = 0;

for(let i=0;i<arr.length;i++) {
    if(arr[i] === "et"||arr[i] === "et.") {
        countEt += 1;
    }
}

console.log(countEt);

// Bonus 2

let phraseToCheck = `No 'x' in Nixon`;

let palindrome = phraseToCheck.replace(/[^\w]/gi, '').toLowerCase().split('').reverse().join('');

if(phraseToCheck.replace(/[^\w]/gi, '').toLowerCase() === palindrome) {
    console.log('They are palindrome!')
} else {
    console.log('They are not palindrome!')
}
>>>>>>> b0c1431e7df86a46f56696a8a780c9dad3739461
