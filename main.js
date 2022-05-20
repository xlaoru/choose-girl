const wrapper = document.querySelector('.wrapper')
const mainOut = document.querySelector('.out')
const selectOther = document.querySelector('.select-other')

const skin = document.querySelector('#skin')
const hairOptions = document.querySelector('#hair')
const ageOptions = document.querySelector('#age')
const milfHairOptions = document.querySelector('#mhair')
const youngHairOptions = document.querySelector('#yhair')

const submitSkin = document.querySelector('.submit-skin')
const submitHair = document.querySelector('.submit-hair')
const submitAge = document.querySelector('.submit-age')
const submitMilfHair = document.querySelector('.submit-milf-hair')
const submitYoungHair = document.querySelector('.submit-young-hair')

let skinNoMatter = ['Victoria Lobov', 'Jane Wilde', 'webtolove', 'Jennifer Exxotic', 'Savannah Sixx', 'Riley Reid (OP)', 'Alina Lopez', 'Victoria June', 'Luna Star ', 'Vincent_Vega_Off', 'Pheonix Marie', 'Sybil', 'Codi Vore', 'Emanuelly Raquel', 'August Ames', 'Lady Fire', 'Jewelz Blu', 'Eva Lovia (OP)', 'Vina Sky', 'Violet Myers (OP)', 'Jia Lissa', 'Jessa Rhodes', 'Kissa Sins', 'LuxuruMur (OP)', 'Kenzie Madison', 'Yiny Leon', 'Rae Lil Black', 'Mia Molkova', 'Sweetie_Fox', 'Alina Li', 'Zirael_rem', 'Riley Star', 'LaSirena 69 (OP)', 'Rose Monroe', 'Vanessa Cage', 'Lenina Crowne (OP)', 'Lancy Lennon', 'Brianna Rose (OP)', 'Maya Farrel', 'Kiara Lord', 'Skye Blue', 'Hungry_kitty', 'Sasha Rose', 'Jada Stevens', 'Angel', 'Scarlet Chase']
let skinWhite = ['Victoria Lobov', 'Vincent_Vega_Off', 'Pheonix Marie', 'Sybil', 'Codi Vore', 'Emanuelly Raquel', 'August Ames', 'Lady Fire', 'Jewelz Blu', 'Eva Lovia (OP)', 'Violet Myers (OP)', 'Jia Lissa', 'Jessa Rhodes', 'Kissa Sins', 'LuxuruMur (OP)', 'Kenzie Madison', 'Yiny Leon', 'Mia Molkova', 'Sweetie_Fox', 'Zirael_rem', 'Riley Star', 'LaSirena 69 (OP)', 'Rose Monroe', 'Vanessa Cage', 'Lenina Crowne (OP)', 'Lancy Lennon', 'Brianna Rose (OP)', 'Kiara Lord', 'Skye Blue', 'Hungry_kitty', 'Sasha Rose', 'Angel', 'Scarlet Chase']
let skinAsia = ['Vina Sky', 'Rae Lil Black', 'Alina Li', 'Jade Kush', 'Lulu Chu']
let skinBlack = ['Jada Stevens', 'Maya Farrel']

let blond = ['Victoria Lobov', 'Alina Lopez', 'Codi Vore', 'Jessa Rhodes','LuxuruMur (OP)', 'Kenzie Madison', 'Mia Molkova', 'Zirael_rem', 'Riley Star', 'Vanessa Cage', 'Skye Blue', 'Angel']
let brownHair = ['Jane Wilde', 'webtolove', 'Riley Reid (OP)', 'Yiny Leon', 'Eva Lovia (OP)', 'August Ames', 'Vincent_Vega_Off']
let blackHair = ['Brianna Rose (OP)', 'Jennifer Exxotic', 'Savannah Sixx', 'Victoria June', 'Luna Star ', 'Emanuelly Raquel', 'Violet Myers (OP)', 'Kissa Sins', 'LaSirena 69 (OP)', 'Rose Monroe', 'Hungry_kitty', 'Sasha Rose', ]
let ginger = ['Pheonix Marie', 'Sybil', 'Lady Fire', 'Jia Lissa', 'Sweetie_Fox', 'Lenina Crowne (OP)', 'Lancy Lennon', 'Scarlet Chase', 'Kiara Lord']
let strange = ['Jewelz Blu', '']

let whiteMilf = ['Victoria Lobov', 'Jane Wilde', 'Jennifer Exxotic', 'Victoria June', 'Luna Star ', 'Pheonix Marie', 'Emanuelly Raquel', 'August Ames', 'Lady Fire', 'Eva Lovia (OP)', 'Jessa Rhodes', 'Kissa Sins', 'Yiny Leon', 'Mia Molkova', 'LaSirena 69 (OP)', 'Rose Monroe', 'Vanessa Cage', 'Lenina Crowne (OP)', 'Lancy Lennon', 'Brianna Rose (OP)', 'Kiara Lord', 'Sasha Rose', 'Scarlet Chase',]
let whiteYoung = ['webtolove', 'Savannah Sixx', 'Riley Reid (OP)', 'Alina Lopez', 'Vincent_Vega_Off', 'Sybil', 'Codi Vore', 'Jewelz Blu', 'Violet Myers (OP)', 'Jia Lissa', 'LuxuruMur (OP)', 'Kenzie Madison', 'Sweetie_Fox', 'Zirael_rem', 'Riley Star', 'Hungry_kitty', 'Angel',]

let whiteMilfBlond = ['Victoria Lobov', 'Pheonix Marie', 'Jessa Rhodes', 'Kissa Sins', 'Mia Molkova', 'Vanessa Cage']
let whiteMilfBrownHair = ['Jane Wilde', 'August Ames', 'Eva Lovia (OP)', 'Yiny Leon', 'Brianna Rose (OP)']
let whiteMilfBlackHair = ['Jennifer Exxotic', 'Victoria June', 'Luna Star ', 'LaSirena 69 (OP)', 'Rose Monroe', 'Sasha Rose', 'Emanuelly Raquel']
let whiteMilfGingerHair = ['Lady Fire', 'Lenina Crowne (OP)', 'Lancy Lennon', 'Kiara Lord', 'Scarlet Chase']

let whiteYoungBlond = ['Alina Lopez', 'Codi Vore', 'LuxuruMur (OP)', 'Kenzie Madison', 'Riley Star', 'Angel']
let whiteYoungBrownHair = ['webtolove', 'Riley Reid (OP)', 'Vincent_Vega_Off', 'Sybil']
let whiteYoungBlackHair = ['Savannah Sixx', 'Violet Myers (OP)', 'Hungry_kitty']
let whiteYoungGingerHair = ['Jia Lissa', 'Sweetie_Fox']
let whiteYoungStrange = ['Jewelz Blu', '', 'Zirael_rem']

function namePicker(array, arrayLength) {
    let randomName = array[Math.floor(Math.random() * arrayLength)]
    let cutName = array.indexOf(randomName)
    let result = array.splice(cutName, 1)

    // ласт имя не учитываются
    if (array.length === 0) {
        return 'You chose nothing'
    } else {
        return result
    }
}

submitSkin.addEventListener('click', function() {
    switch (skin.value) {
        case 'skin-nm':
            mainOut.textContent = namePicker(skinNoMatter, skinNoMatter.length)
            hairOptions.classList.add('close')
            submitHair.classList.add('close')
            ageOptions.classList.add('close')
            submitAge.classList.add('close')
            milfHairOptions.classList.add('close')
            submitMilfHair.classList.add('close')
            youngHairOptions.classList.add('close')
            submitYoungHair.classList.add('close')
            break
            
        case 'white':
            ageOptions.classList.toggle('close')
            submitAge.classList.toggle('close')
            milfHairOptions.classList.add('close')
            submitMilfHair.classList.add('close')
            youngHairOptions.classList.add('close')
            submitYoungHair.classList.add('close')
            break

        case 'asian':
            mainOut.textContent = namePicker(skinAsia, skinAsia.length)
            hairOptions.classList.add('close')
            submitHair.classList.add('close')
            ageOptions.classList.add('close')
            submitAge.classList.add('close')
            milfHairOptions.classList.add('close')
            submitMilfHair.classList.add('close')
            youngHairOptions.classList.add('close')
            submitYoungHair.classList.add('close')
            break

        case 'black':
            mainOut.textContent = namePicker(skinBlack, skinBlack.length)
            hairOptions.classList.add('close')
            submitHair.classList.add('close')
            ageOptions.classList.add('close')
            submitAge.classList.add('close')
            milfHairOptions.classList.add('close')
            submitMilfHair.classList.add('close')
            youngHairOptions.classList.add('close')
            submitYoungHair.classList.add('close')
            break
    }
})

submitAge.addEventListener('click', function() {
    switch(ageOptions.value) {
        case 'age-nm': 
            hairOptions.classList.toggle('close')
            submitHair.classList.toggle('close')
            youngHairOptions.classList.add('close')
            submitYoungHair.classList.add('close')
            milfHairOptions.classList.add('close')
            submitMilfHair.classList.add('close')
            break

        case 'milf':
            milfHairOptions.classList.toggle('close')
            submitMilfHair.classList.toggle('close')
            youngHairOptions.classList.add('close')
            submitYoungHair.classList.add('close')
            hairOptions.classList.add('close')
            submitHair.classList.add('close')
            break

        case 'young':
            youngHairOptions.classList.toggle('close')
            submitYoungHair.classList.toggle('close')
            milfHairOptions.classList.add('close')
            submitMilfHair.classList.add('close')
            hairOptions.classList.add('close')
            submitHair.classList.add('close')
            break
    }
})

submitHair.addEventListener('click', function() {
    switch (hairOptions.value) {
        case 'hair-nm':
            mainOut.textContent = namePicker(skinWhite, skinWhite.length)
            break;
        case 'blond':
            mainOut.textContent = namePicker(blond, blond.length)
            break;
        case 'brown-hair':
        mainOut.textContent = namePicker(brownHair, brownHair.length)
            break;
        case 'black-hair':
        mainOut.textContent = namePicker(blackHair, blackHair.length)
            break;
        case 'ginger':
        mainOut.textContent = namePicker(ginger, ginger.length)
            break;
    }
})

submitMilfHair.addEventListener('click', function() {
    switch (milfHairOptions.value) {
        case 'milf-nm': 
            mainOut.textContent = namePicker(whiteMilf, whiteMilf.length)
            break
        case 'milf-blond':
            mainOut.textContent = namePicker(whiteMilfBlond, whiteMilfBlond.length)
            break;
        case 'milf-brown-hair':
            mainOut.textContent = namePicker(whiteMilfBrownHair, whiteMilfBrownHair.length)
            break;
        case 'milf-black-hair':
            mainOut.textContent = namePicker(whiteMilfBlackHair, whiteMilfBlackHair.length)
            break;
        case 'milf-ginger-hair':
            mainOut.textContent = namePicker(whiteMilfGingerHair, whiteMilfGingerHair.length)
            break;
    }
})

submitYoungHair.addEventListener('click', function() {
    switch (youngHairOptions.value) {
        case 'young-nm': 
            mainOut.textContent = namePicker(whiteMilf, whiteMilf.length)
            break
        case 'young-blond':
            mainOut.textContent = namePicker(whiteYoungBlond, whiteYoungBlond.length)
            break;
        case 'young-brown-hair':
            mainOut.textContent = namePicker(whiteYoungBrownHair, whiteYoungBrownHair.length)
            break;
        case 'young-black-hair':
            mainOut.textContent = namePicker(whiteYoungBlackHair, whiteMilfBlackHair.length)
            break;
        case 'young-ginger-hair':
            mainOut.textContent = namePicker(whiteYoungGingerHair, whiteYoungGingerHair.length)
            break;
    }
})
