const jumpText = () => {
  // Lấy nội dung trong class heading
  let str = document.querySelector(".heading").innerHTML;

  // tách chuỗi nội dung ra thành mảng ký tự
  let chars = [...str];
  // console.log(chars);

  let html = "";

  // Duyệt từng ký tự trong mảng và tạo ra từng thẻ span
  chars.forEach((char) => {
    html += `
        <span>${char}</span>
    `;
  });

  // Gán chuỗi span lại vào class heading
  document.querySelector(".heading").innerHTML = html;
};

jumpText();
