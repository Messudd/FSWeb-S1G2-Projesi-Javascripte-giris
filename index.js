/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZ EMİN OL (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığın kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanı öneririz.
Bunun için cevabı direk console'a logla veya çağırdığın fonksiyondan dönen değeri console'a logla.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. surucuYasi isimli bir değişken yaz ve bir sayı ata.
   2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

let surucuYasi = 21;
let State = surucuYasi>18;

if (!State)
  {
    console.log(State);
  }
else console.log(State);

/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. 2 değişken tanımla ve bunlara değerler ata (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

let birinciDeger = "Mesud";
let ikinciDeger =  2023;

if (birinciDeger===ikinciDeger)

{
  birinciDeger = "AYDIN";
  console.log(birinciDeger);
}
else console.log(null);

/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/
let degisken = "1999";

console.log(Number(degisken));

/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamla:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsin)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığın fonsiyonu test edin. Console'da sonucu 28 olarak görmelisin.
*/

function carpma(a,b) {

  return (a*b);

}
console.log(carpma(7,4));

/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yap:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımla.
 2. Gelen değeri kullanarak köpeğin yaşını hesapla (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */

function kopeginYasi() {
  let kopek_yas = 5;
  kopek_yas = (kopek_yas*7);   //  prompt(" Köpegin yasını giriniz ...");
  return kopek_yas;
}
console.log(kopeginYasi());

/* Görev 3 */
/*
Aşağıdakileri oyun isimli fonksiyonu kullanarak yap.
1. 2 argüman alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/

let value = Math.random();
let myChoise = "Makas";


function bilgisayarTahmini()
{
  if (value >= 0.5 && value <=0.8)
    {
      return "Taş";
    }
  else if (value >= 0 && value < 0.5)
    {
      return "Makas";
    }
  else
      return "Kağıt";
}

let pcTahmin = bilgisayarTahmini();

function oyun(myChoise,pcTahmin)
{
  if (myChoise === "Taş" && pcTahmin ==="Kağıt")
    { 
      return "Kaybettin!"
    }
  else if (myChoise === "Taş" && pcTahmin ==="Makas")
    { 
      return "Kazandın!"
    }
  else if (myChoise === "Taş" && pcTahmin ==="Taş")
    { 
      return "Beraberlik"
    }
  else if (myChoise === "Kağıt" && pcTahmin ==="Kağıt")
    { 
      return "Beraberlik"
    }
  else if (myChoise === "Kağıt" && pcTahmin ==="Makas")
    { 
      return "Kaybettin!"
    }
  else if (myChoise === "Kağıt" && pcTahmin ==="Taş")
    { 
      return "Kazandın!"
    }
  else if (myChoise === "Makas" && pcTahmin ==="Kağıt")
    { 
      return "Kazandın!"
    }
  else if (myChoise === "Makas" && pcTahmin ==="Makas")
    { 
      return "Beraberlik"
    }
  else
    { 
      return "Kaybettin!"
    }
}
console.log("bigisayarın seçimi : "+ pcTahmin);
console.log(oyun(myChoise,pcTahmin));

/*
#############################################################################################
CEVABIN DAHA KISA HALİ AŞŞAĞIDAKİ KOD .....
#############################################################################################

let pc_state = ["Taş","Kağıt","Makas"];

function pc_choise() 
{
  return Math.floor(Math.random()*3);

}
let pcChoise = pc_state[pc_choise()];
let myChoise = "Makas";

function game(myChoise,pcChoise)
{
  if (myChoise === "Taş" && pcChoise ==="Kağıt")
    { 
      return "Kazandın !"
    }
  else if (myChoise === "Taş" && pcChoise ==="Makas")
    { 
      return "Kazandın !"
    }
  else if (myChoise === "Taş" && pcChoise ==="Taş")
    { 
      return "Berabere !"
    }
  else if (myChoise === "Kağıt" && pcChoise ==="Kağıt")
    { 
      return "Berabere !"
    }
  else if (myChoise === "Kağıt" && pcChoise ==="Makas")
    { 
      return "Kaybettin !"
    }
  else if (myChoise === "Kağıt" && pcChoise ==="Taş")
    { 
      return "Kazandın !"
    }
  else if (myChoise === "Makas" && pcChoise ==="Kağıt")
    { 
      return "Kazandın !"
    }
  else if (myChoise === "Makas" && pcChoise ==="Makas")
    { 
      return "Berabere !"
    }
  else
    { 
      return "Kaybettin !"
    }
}
console.log("bigisayarın seçimi : "+String(pcChoise))
console.log(game(myChoise,pcChoise));

####################################################################################


*/
// Şimdi Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Öncelikle aşağıdakileri yap:
1. Bilgisayarın seçimini rastgele oluşturacağım bir fonksiyon tanımla. Örn: 
   function bilgisayarinSecimi() {
   
   }
2. Fonsiyonun içinde bilgisayarın seçimi için bir değişken tanımla
3. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
4. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun
5. Oluşan değeri geri dönün

Şimdi kendi seçtiğin bir seçime karşı bilgisayarın rastgele oluşturduğu seçimi yukarıda yazdığın oyun fonsiyonu ile oynayın ve sonucu console'a yazdırın.
Örn: console.log(oyun("Makas",bilgisayarinSecimi()))
*/

/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdaki milDonusturucu fonksiyonunu aşağıdakileri kullanarak tamamla:
1. Kilometre değerini argüman olarak alın.
2. Aldığın bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/

function milDonusturucu() {

  let km_Deger = 12 ;  //  prompt("Bir ( km )  -- degeri girin ...");
  let milDeger = (km_Deger / 1.931213397471076 );
  return Number(milDeger.toFixed(5));
}
console.log(milDonusturucu());



//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yap:   5.2493438320209975
1. Santimetre değerini argüman olarak alın.
2. Aldığın bu değeri feet'e dönüştürün
3. feet değerini geri dönün

Google'da arama ipucu: "feet cm dönüştürme"
*/

function feetDonusturucu() {
  let donusecekDeger = 80;  //  prompt("Bir cm -- degeri girin ...");
  let feet = (donusecekDeger / 15.24 );
  return Number(feet);
}
console.log(feetDonusturucu());

/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yap:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazacak şekilde kodunuzu yazın:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/

let maymunSayisi = 10;

function cocukSarkisi(maymunSayisi)
{
  return  String(maymunSayisi) +" küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!";
}
while(maymunSayisi>0)
{
  console.log(cocukSarkisi(maymunSayisi));
  maymunSayisi--;

}


/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yap.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/

let sinavSonucu = 75;  //  prompt("100 lük sistemde bir sınav sonuç değeri gir :) ");

function notHesapla(sonuc) {

  if (sonuc>=90 && sonuc<=100)
  {
    return "A aldın";
  }
  else if (sonuc>=80 && sonuc<90)
  {
    return "B aldın";
  }
  else if (sonuc>=70 && sonuc<80)
  {
    return "C aldın";
  }
  else if (sonuc>=60 && sonuc<70)
  {
    return "D aldın";
  }
  else 
    return "F aldın";
  
}
console.log(notHesapla(sinavSonucu))

/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yap.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/
/*
function sesliHarfSayaci(value) 
{
  let sesliHarf = ["A","a","E","e","O","o","Ü","ü","Ö","ö","U","u","I","ı","İ","i"];
  let index_num = 0;
  for ( i in value)
  {
    for (j in sesliHarf)
    {
      if (i === sesliHarf[j] )
      {
        return  index_num+=1;
      }
    }
  }
  
}
sesliHarfSayaci("MesudAydın")
*/

/* Lütfen bu satırın alt tarafını değiştirmeyin */

function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};
