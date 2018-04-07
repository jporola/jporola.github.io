const urlParams = new URLSearchParams(location.search);
const count = parseInt(urlParams.get('count'));

export const guessCount = count && count >= 3 && count <= 9 ? count : 3;
