const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content-item");


tabItem.forEach(item => {
    item.addEventListener("click", selectItem)
});



function selectItem() {
    //ลบเส้นทั้งหมดก่อนจะเพิ่มเส้นเข้าไปใหม่
    removeClass();

    //ลบ Contentก่อน show 
    removeShow();
    this.classList.add('tab-border');
    const tabContent = document.querySelector(`#${this.id}-content`)
    tabContent.classList.add('show')
}

function removeClass() {
    tabItem.forEach(item => {
        item.classList.remove('tab-border')
    })
};

function removeShow() {
    tabContent.forEach(item => {
        item.classList.remove('show')
    })
}





