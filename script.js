document.getElementById('workerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const birthDate = document.getElementById('birthDate').value;
    const email = document.getElementById('email').value;
    const zipcode = document.getElementById('zipcode').value;

    const firstChar = name.charAt(0);
    const lastChar = name.charAt(name.length - 1);
    const zipcodeChars = zipcode.substring(1, 3);

    const birthSum = calculateBirthSum(birthDate);
    const emailDomain = email.split('@')[1].split('.')[0];

    const uniqueCode = `${firstChar}${lastChar}${zipcodeChars}${birthSum}${emailDomain}`;
    
    displayResult(uniqueCode);
});

function calculateBirthSum(birthDate) {
    const digits = birthDate.replace(/-/g, '').split('');
    let sum = digits.reduce((acc, num) => acc + Number(num), 0);
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, num) => acc + Number(num), 0);
    }
    return sum;
}

function displayResult(code) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Generált Kód: ${code}`;
    resultDiv.style.opacity = 0;
    resultDiv.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        resultDiv.style.opacity = 1;
        resultDiv.style.transform = 'translateY(0)';
    }, 100);
}
