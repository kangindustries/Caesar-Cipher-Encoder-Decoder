function runCipher() {
  const text = document.getElementById("inputText").value;
  const shift = parseInt(document.getElementById("shiftValue").value, 10) || 0;
  const mode = document.getElementById("mode").value;

  const result = caesarCipher(text, shift, mode);
  document.getElementById("outputText").innerText = result;
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("runBtn").addEventListener("click", runCipher);

  const input = document.getElementById("inputText");
  const cc = document.getElementById("charCount");
  input.addEventListener("input", () => {
    cc.textContent = `${input.value.length} chars`;
  });
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").innerText = "";
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  const output = document.getElementById("outputText").innerText;

  if (!output.trim()) return;

  try {
    await navigator.clipboard.writeText(output);
  } catch (err) {
    console.error("Copy failed:", err);
  }
});

