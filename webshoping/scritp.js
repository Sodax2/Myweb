
let cart = document.querySelector('.cart');
let cartField = document.querySelector('.cart-field');
let add = document.getElementsByClassName('add');

for(let but of add) {
    but.onclick = e => {
        let item = Number(cart.getAttribute('data-count') || 0);
        cart.setAttribute('data-count', item + 1);
        cart.classList.add('on');

        let parent = e.target.parentNode.parentNode;
        let image = parent.querySelector('img');
        let span = document.createElement('span');
        span.className = 'image-animate';
        parent.insertBefore(span, parent.lastElementChild);

        let s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout(() => {
            span.classList.remove('active');
            span.removeChild(s_image);
        }, 500);

        //copy & paste
        let clone = parent.cloneNode(true);
        clone.querySelector('.add').style.display = "none";
        clone.querySelector('.add').removeAttribute('class');
        cartField.appendChild(clone);

        if (clone) {
            cart.onclick = () => {
                cartField.classList.toggle('display');
            }
        }
    }
}
function updateCartCount() {
    let count = cart.getAttribute('data-count') || 0; // ดึงค่าจำนวนจาก data-count
    let cartCountDisplay = document.querySelector('.cart-count'); // เลือกตัวแสดงผลจำนวนสินค้า
    if (!cartCountDisplay) {
        // ถ้ายังไม่มีองค์ประกอบสำหรับแสดงจำนวนสินค้า สร้างขึ้นมาใหม่
        cartCountDisplay = document.createElement('span');
        cartCountDisplay.className = 'cart-count';
        cart.appendChild(cartCountDisplay); // เพิ่มเข้าตะกร้า
    }
    cartCountDisplay.textContent = count; // อัปเดตตัวเลข
}
