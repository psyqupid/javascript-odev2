// JS kodunda kullanacağımız HTML elementlerini değişken olarak yazdık.
let button = document.querySelector("#liveToastBtn");
let taskdom = document.querySelector("#task");
let liste = document.querySelector("#list");

// Butona tıklama özelliği ekledik.
button.addEventListener('click', newElement);//click: Butonun tıklama  özelliği, newElement: Butonun fonksiyonu(tıklayınca ne yapacak?)




// Butona atadığımız fonksiyonu yazalım.
function newElement() {
    let newItem = document.createElement(`li`);
    let info = taskdom.value 
    newItem.innerHTML = info 
    
    

    if (taskdom.value == "")  {  // İnputun boş girilmesi durumu için if state'i yazdık
      $('.error').toast('show'); //if state'i doğruysa gösterilecek toast 
    } 
    else {
      $('.success').toast('show'); // yukarıdaki if statei geçerli değilse gösterilecek toast
      liste.appendChild(newItem);  
      taskdom.value = ""; // yeni görevi ekledikten sonra input kutusunun değerini boşa ayarladık ki son eklediğimiz yazı orada kalmasın
      }
    
}

liste.addEventListener('click', function handleClick(event) { //liste öğrelerine tıklama özelliğiyle beraber, tıklantığında listeden silinme fonksiyonu verdik
  event.target.remove();
});







