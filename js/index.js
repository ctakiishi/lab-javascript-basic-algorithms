
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
