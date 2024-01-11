function changeColor() {
    let hex_Num = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

    let hex_Code = '';

    for (let i = 0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hex_Num.length)
        
        hex_Code = hex_Code + hex_Num[random_index]

    }
    document.getElementById('hex').innerHTML =hex_Code;
    document.getElementsByTagName('body')[0].style.background = '#' +hex_Code
}