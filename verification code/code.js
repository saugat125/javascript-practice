function Verification_Code(){
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let verification_code = '';

    for (let i = 0; i < 5; i++) {
      randomIndex = Math.random() * letters.length;
      verification_code = verification_code + letters.charAt(randomIndex);
    }   
    return verification_code;
}

console.log(Verification_Code());


