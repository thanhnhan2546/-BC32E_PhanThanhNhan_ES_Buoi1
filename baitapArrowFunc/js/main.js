/**
 * Hàm thay đổi màu cho ngôi nhà và thay đổi after của button
 * @param {*} classAdd class màu sắc cần thay đổi cho ngôi nhà
 * @param {*} classBtnChange class cần thay đổi của button (chuyển class từ button này sang button click)
 */
const changeColor = (classAdd, classBtnChange) => {
  classHouse.add(classAdd);
  button.forEach((b) => {
    if (b.classList[2] == classBtnChange) {
      b.classList.remove(classBtnChange);
    }
  });
  classBtn.add(classBtnChange);
};

// DOM đến tất cả các thẻ button
const button = document.querySelectorAll("#colorContainer button");

// Chạy vòng lặp duyệt các thẻ button
button.forEach((btn) => {
  // Bắt sự kiện khi click vào 1 trong các nút button
  btn.onclick = () => {
    // Nhận các class của các thẻ button và thẻ div có id = house
    classBtn = btn.classList;
    classHouse = document.querySelector("#house").classList;

    // Nếu classHouse chỉ có 1 class (Khi mới load trang thì chỉ có 1 class là 'house')
    if (classHouse.length < 2) {
      //   Thay đổi màu cho house
      changeColor(classBtn[1], "active");
    }
    // Khi classHouse có 2 class
    else {
      // remove class thứ 2 của house
      classHouse.remove(classHouse[1]);

      //   Thay đổi màu cho house
      changeColor(classBtn[1], "active");
    }
  };
});
