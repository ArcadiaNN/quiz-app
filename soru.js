function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1-Bir JavaScript dizesinin karakter sayısını bulmak için hangi özellik kullanılır?",
    { a: ".length", b: ".count", c: ".size", d: ".charCount" },
    "a"
  ),
  new Soru(
    "2-Bir JavaScript dizisine yeni bir eleman eklemek için hangi dizi yöntemi kullanılır?",
    { a: "insert()", b: "append()", c: "push()", d: "add()" },
    "c"
  ),
  new Soru(
    "3-Bir HTML elementinin içeriğini JavaScript ile nasıl değiştirirsiniz?",
    { a: ".value", b: ".innerHTML", c: ".textContent", d: ".innerText" },
    "b"
  ),
  new Soru(
    "4-Bir JavaScript fonksiyonundan bir değer döndürmek için hangi anahtar kelime kullanılır?",
    { a: "output", b: "return", c: "send", d: "response" },
    "b"
  ),
  new Soru(
    "5-Aşağıdakilerden hangisi bir JavaScript veri türü değildir?",
    { a: "number", b: "string", c: "boolean", d: "character" },
    "d"
  ),
  new Soru(
    "6-Bir `while` döngüsü ne zaman sona erer?",
    {
      a: "Belirli bir sayıda tekrarlandığında.",
      b: "Belirli bir şart sağlandığında.",
      c: "Kesinlikle sona ermez.",
      d: "Sadece tek yönde çalıştığında.",
    },
    "b"
  ),
];
