function caesarCipher(text, shift, mode = "encode") {
  shift = ((shift % 26) + 26) % 26;

  if (mode === "decode") shift = (26 - shift) % 26;

  let result = "";

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }

    else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
    } else {
      result += c;
    }
  }

  return result;
}