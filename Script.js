const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const WALLET_ADDRESS_LENGTH = 42; // Typically Ethereum wallet length
const PASSWORD_LENGTH = 12; // Random password length

function generateWallet() {
    const walletAddress = generateWalletAddress();
    const password = generateRandomPassword();

    const outputDiv = document.getElementById("wallet-output");
    outputDiv.innerHTML = `
        <p><strong>Wallet Address:</strong> ${walletAddress}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
}

function generateWalletAddress() {
    let address = "0x"; // Ethereum addresses start with 0x
    for (let i = 0; i < WALLET_ADDRESS_LENGTH - 2; i++) {
        address += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
    }
    return address;
}

function generateRandomPassword() {
    let password = "";
    for (let i = 0; i < PASSWORD_LENGTH; i++) {
        password += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
    }
    return password;
}
