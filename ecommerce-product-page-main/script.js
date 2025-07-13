let quantity = 0;
const quantityDisplay = document.getElementById("quantity");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

plusBtn.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

minusBtn.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

const menuLinks = document.querySelectorAll("ul li a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

const Product_picture = document.querySelectorAll(".image_thumbnail");

Product_picture.forEach((button) => {
  button.addEventListener("click", function () {
    // เอา class ออกจากทุก .filter
    document.querySelectorAll(".filter").forEach((el) => {
      el.classList.remove("active_picture");
    });

    // เพิ่ม class ให้ .filter ที่อยู่ภายในปุ่มนี้
    const filterDiv = this.querySelector(".filter");
    if (filterDiv) {
      filterDiv.classList.add("active_picture");
    }
  });
});

const images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

let currentImageIndex = 0;

function showImage(index) {
  // เปลี่ยนภาพให้ทุก .main_picture
  document.querySelectorAll(".main_picture_product").forEach((img) => {
    img.src = images[index];
  });

  currentImageIndex = index;

  // อัปเดตกรอบ active
  document
    .querySelectorAll(".filter")
    .forEach((f) => f.classList.remove("active_picture"));

  const activeFilter = document.querySelectorAll(
    `.image_thumbnail_${index + 1} .filter`
  );
  activeFilter.forEach((el) => el.classList.add("active_picture"));
}

document.getElementById("prevImage").addEventListener("click", () => {
  const newIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(newIndex);
});

document.getElementById("nextImage").addEventListener("click", () => {
  const newIndex = (currentImageIndex + 1) % images.length;
  showImage(newIndex);
});

// อัปเดต currentImageIndex เมื่อกด thumbnail
document.querySelectorAll(".image_thumbnail").forEach((button, index) => {
  button.addEventListener("click", () => {
    showImage(index % images.length);
  });
});

// ปุ่มเปิด
document.getElementById("openZoom").addEventListener("click", function () {
  document.getElementById("zoomModal").style.display = "flex";
  document.body.classList.add("modal-open");
});

// ปุ่มปิด
document.getElementById("closeZoom").addEventListener("click", function () {
  document.getElementById("zoomModal").style.display = "none";
  document.body.classList.remove("modal-open");
});
