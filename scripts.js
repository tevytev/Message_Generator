const secretMessageObj = {
    msgPartOne: ['You', 'Yo grammy', 'yo daddy', 'yo lil girlfriend'],
    msgPartTwo: ['can', 'cant', 'should', 'shouldnt'],
    msgPartThree: ['live in', 'visit', 'leave', 'work in'],
    msgPartFour: ['the US', 'the Dominican Republic', 'Florida', 'the Maldives'],
    randomMsgGen () {

        const msgPartRandomizer = (arr1, arr2, arr3, arr4) => {
            let randomNum1 = Math.floor(Math.random() * 4);
            let randomNum2 = Math.floor(Math.random() * 4);
            let randomNum3 = Math.floor(Math.random() * 4);
            let randomNum4 = Math.floor(Math.random() * 4);

            let randomSelection1 = arr1[randomNum1];
            let randomSelection2 = arr2[randomNum2];
            let randomSelection3 = arr3[randomNum3];
            let randomSelection4 = arr4[randomNum4];

            return `${randomSelection1} ${randomSelection2} ${randomSelection3} ${randomSelection4}.`
        }
        return msgPartRandomizer(this.msgPartOne, this.msgPartTwo, this.msgPartThree, this.msgPartFour);
    },
}