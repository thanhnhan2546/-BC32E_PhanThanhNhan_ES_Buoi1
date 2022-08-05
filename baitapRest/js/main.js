const getElements = (id) => document.getElementById(id);

getElements("btnKhoi1").onclick = () => {
  eventClick("#khoi1 span input", "tbKhoi1");
};

getElements("btnKhoi2").onclick = () => {
  eventClick("#khoi2 span input", "tbKhoi2");
};

/**
 * Hàm xử lý sự kiện tính điểm trung bình khi click vào button
 * @param {*} selectorAll selector để lấy dữ liệu đầu vào
 * @param {*} idInner id thẻ xuất dữ liệu đầu ra là điểm trung bình
 */
const eventClick = (selectorAll, idInner) => {
  // DOM đến các selector chứa dữ liệu đầu vào
  const inputs = document.querySelectorAll(selectorAll);
  let arrNumber = [];

  //   Duyệt các thẻ input và gán value vào mảng arrNumber
  inputs.forEach((input) => {
    arrNumber = [...input.value];
  });

  //   Tính điểm trung bình
  const dtb = tinhDTB(...arrNumber);

  //   In ra giao diện màn hình
  getElements(idInner).innerHTML = dtb.toFixed(2);
};

/**
 * Hàm tính điểm trung bình
 * @param  {...any} param mảng chứa tất cả số điểm cần tính trung bình
 * @returns Điểm trung bình đã được tính
 */
const tinhDTB = (...param) => {
  let count = 0;

  //   Duyệt từng phần tử của param và tính tổng các phần tử trong param
  param.forEach((diem) => {
    count += Number(diem);
  });

  //   Tính trung bình các phần tử trong param
  const dtb = count / param.length;
  return dtb;
};
