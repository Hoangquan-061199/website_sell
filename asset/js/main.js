$(document).ready(() => {
  // variable
  const loginModal = $(".modal-login");
  const registerModal = $(".modal-register");
  const check = "check";
  const loginBodyModal = $(".modal-body-login");
  const registerBodyModal = $(".modal-body-register");

  const navCategory = $(".navbar__mobile-category");
  const navList = $(".navbar__list");
  const active = "active";
  const overlay = $(".overlay");
  const iconExit = $(".icon-exit");

  const sectionPhone = $(".section__products-phone");
  const sectionStyle = $(".section__products-style");
  const sectionAppliances = $(".section__products-appliances");
  const productListPhones = $(".section__products-content-list-phone");
  const productListStyles = $(".section__products-content-list-style");
  const productListAppliances = $(".section__products-content-list-appliances");

  const titleItem = $(".section__products-title .section__products-title-item");

  const prevCategory = $(".section__category-btn .prev-btn");
  const nextCategory = $(".section__category-btn .next-btn");
  const sectionCategory = $(".section__category-content");

  const prevPhone = $(".product__phone-btn .prev-btn");
  const nextPhone = $(".product__phone-btn .next-btn");
  const sectionContentPhone = $(".section__products-content-phone");

  const prevStyle = $(".product__style-btn .prev-btn");
  const nextStyle = $(".product__style-btn .next-btn");
  const sectionContentStyle = $(".section__products-content-style");

  const prevAppliances = $(".product__appliances-btn .prev-btn");
  const nextAppliances = $(".product__appliances-btn .next-btn");
  const sectionContentAppliances = $(".section__products-content-appliances");

  const sectionSuggest = $(".section__suggest-products");
  const prevSuggest = $(".prev-suggest-btn");
  const nextSuggest = $(".next-suggest-btn");

  var listPhones = [
    {
      name: "Samsung Galaxy Note 21",
      priceNew: "29000000",
      priceLast: "30500000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
    },
    {
      name: "Samsung Galaxy Note 21",
      priceNew: "29000000",
      priceLast: "30500000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
    },
    {
      name: "Samsung Galaxy Note 21",
      priceNew: "29000000",
      priceLast: "30500000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
    },
    {
      name: "Iphone 12 Mini New",
      priceNew: "26000000",
      priceLast: "",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-2-0340d148-dd79-40b3-b8ad-95ed589c7b5a.png?v=1623564588000",
    },
    {
      name: "Iphone 12 Pro Max Like New",
      priceNew: "22000000",
      priceLast: "32000000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-12-pro-max-xanh-561e05b7-eed5-40c8-9065-49b5a1cea423.jpg?v=1623565125000",
    },
    {
      name: "Iphone XR - Vàng Chính Hãng VN/A",
      priceNew: "8000000",
      priceLast: "10000000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-xr-mau-vang-didongviet-1-1-2.jpg?v=1623561749000",
    },
    {
      name: "Xiaomi Mi 10T Pro 5G",
      priceNew: "10900000",
      priceLast: "12500000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/xiaomi-mi-10t-pro.jpg?v=1623565104000",
    },
    {
      name: "Iphone 12 Hàng Quốc Tế",
      priceNew: "26000000",
      priceLast: "32000000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-5.png?v=1623565259000",
    },
  ];

  var listFashions = [
    {
      name: "Kappa giày thể thao Nam/Nữ 001",
      priceNew: "690000",
      priceLast: "1790000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/304itd0-a0u-vuong-a0954654-0a43-4a9c-a026-5786147d0bf0.jpg?v=1623808988000",
    },
    {
      name: "Kappa giày thể thao Nam/Nữ 31169FW 001",
      priceNew: "690000",
      priceLast: "1790000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/31169fw-001-1.jpg?v=1623808992000",
    },
    {
      name: "Kappa giày thể thao Nam/Nữ 31169FW 001",
      priceNew: "690000",
      priceLast: "1790000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/31169fw-001-1.jpg?v=1623808992000",
    },
    {
      name: "Kappa giày thể thao Nam/Nữ 31169FW 001",
      priceNew: "690000",
      priceLast: "1790000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/31169fw-001-1.jpg?v=1623808992000",
    },
    {
      name: "Kappa giày thể thao Nam/Nữ 3116Z2W A04",
      priceNew: "690000",
      priceLast: "1790000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/3116z2w-a04-vuong.jpg?v=1623809101000",
    },
    {
      name: "Kappa giày thể thao Nam/Nữ 3116Z3W 001",
      priceNew: "790000",
      priceLast: "1790000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/3116z3w-001-vuong.jpg?v=1623809190000",
    },
    {
      name: "Kappa giày thể thao Nam/Nữ 3116Z3W 001",
      priceNew: "790000",
      priceLast: "1790000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/3116z3w-001-vuong.jpg?v=1623809190000",
    },
    {
      name: "Kappa giày thể thao Nam/Nữ 3116Z3W 001",
      priceNew: "790000",
      priceLast: "1790000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/3116z3w-001-vuong.jpg?v=1623809190000",
    },
  ];

  var listAppliances = [
    {
      name: "Nồi cơm điện thông minh Bear SUBE015 DFB-B20A1",
      priceNew: "1190000",
      priceLast: "",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/noi-com-dien-thong-minh-bear-sube015-dfb-b20a1-1620449971.jpg?v=1623599778000",
    },
    {
      name: "Máy xay ăn dặm 0.3L Bear QSJ-A01F2 (GR-B03V2)",
      priceNew: "890000",
      priceLast: "1200000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/may-xay-an-dam-03l-bear-qsj-a01f2-gr-b03v2-12062021.png?v=1623599484000",
    },
    {
      name: "Máy xay ăn dặm 3 cối Bear LLJ-C04J1 (GR-B03V1)",
      priceNew: "1190000",
      priceLast: "",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/may-xay-an-dam-3-coi-bear-llj-c04j1-gr-b03v1-12062021.png?v=1623599225000",
    },
    {
      name: "Nồi nấu chậm 0,8L Bear SUBE001 - Bản Quốc Tế",
      priceNew: "550000",
      priceLast: "",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/noi-nau-cham-08l-bear-sube001-ban-quoc-te-11012021.jpg?v=1623598983000",
    },
    {
      name: "Nồi cơm điện thông minh Bear SUBE015 DFB-B20A1",
      priceNew: "1190000",
      priceLast: "",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/noi-com-dien-thong-minh-bear-sube015-dfb-b20a1-1620449971.jpg?v=1623599778000",
    },
    {
      name: "Nồi cơm điện thông minh Bear SUBE015 DFB-B20A1",
      priceNew: "1190000",
      priceLast: "",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/noi-com-dien-thong-minh-bear-sube015-dfb-b20a1-1620449971.jpg?v=1623599778000",
    },
    {
      name: "Nồi cơm điện thông minh Bear SUBE015 DFB-B20A1",
      priceNew: "1190000",
      priceLast: "",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/noi-com-dien-thong-minh-bear-sube015-dfb-b20a1-1620449971.jpg?v=1623599778000",
    },
    {
      name: "Nồi cơm điện thông minh Bear SUBE015 DFB-B20A1",
      priceNew: "1190000",
      priceLast: "",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/noi-com-dien-thong-minh-bear-sube015-dfb-b20a1-1620449971.jpg?v=1623599778000",
    },
  ];

  var listSuggestToday = [
    {
      name: "Samsung Galaxy Note 21",
      priceNew: "29000000",
      priceLast: "30500000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
    },
    {
      name: "Samsung Galaxy Note 21",
      priceNew: "29000000",
      priceLast: "30500000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
    },
    {
      name: "Samsung Galaxy Note 21",
      priceNew: "29000000",
      priceLast: "30500000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
    },
    {
      name: "Iphone 12 Mini New",
      priceNew: "26000000",
      priceLast: "",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-2-0340d148-dd79-40b3-b8ad-95ed589c7b5a.png?v=1623564588000",
    },
    {
      name: "Iphone 12 Pro Max Like New",
      priceNew: "22000000",
      priceLast: "32000000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-12-pro-max-xanh-561e05b7-eed5-40c8-9065-49b5a1cea423.jpg?v=1623565125000",
    },
    {
      name: "Iphone XR - Vàng Chính Hãng VN/A",
      priceNew: "8000000",
      priceLast: "10000000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/iphone-xr-mau-vang-didongviet-1-1-2.jpg?v=1623561749000",
    },
    {
      name: "Xiaomi Mi 10T Pro 5G",
      priceNew: "10900000",
      priceLast: "12500000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/xiaomi-mi-10t-pro.jpg?v=1623565104000",
    },
    {
      name: "Iphone 12 Hàng Quốc Tế",
      priceNew: "26000000",
      priceLast: "32000000",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-5.png?v=1623565259000",
    },
  ];

  var listNewspaper = [
    {
      name: "Galaxy Z Fold 3 và Z Flip 3 sẽ có giá rẻ hơn",
      info: "Hai smartphone đắt nhất của Samsung sẽ có giá rẻ hơn 400 USD so với thế hệ trước. Theo báo cáo của SamSungMobile",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/large/100/429/689/articles/galaxy-fold-black-home-screen-open.jpg?v=1623603593787",
    },
    {
      name: "Cách làm bún sườn nấu sấu thanh mát",
      info: "Bún sườn nấu sấu là món ăn này rất hợp với mùa hè bởi cách làm và nguyên liệu đơn giản nhưng lại hấp dẫn",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/large/100/429/689/articles/bun-rieu-da-lat-1.jpg?v=1623602344633",
    },
    {
      name: "TV Samsung đang giảm giá mạnh, có mẫu giảm tới 15 triệu để kích cầu đầu năm",
      info: " Hãng Samsung Việt Nam vừa công bố chương trình giảm giá hấp dẫn cho hàng loạt mẫu TV của hãng ra mắt trong năm 2018",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/large/100/429/689/articles/smart-tivi-samsung-55-inch-ua55tu8000kxxv-4k-uhd.jpg?v=1623567121103",
    },
    {
      name: "Viettel đang tặng người dùng 3GB truy cập Internet miễn phí, áp dụng cho tất cả các loại thuê bao",
      info: "Rạng sáng nay (15/10/2019), Viettel đã bất ngờ dành tặng 1 triệu gói data ST15K miễn phí cho người dùng, áp dụng với",
      imgSrc:
        "https://bizweb.dktcdn.net/thumb/large/100/429/689/articles/khuyen-mai-viettel-31-08.jpg?v=1623566790277",
    },
  ];

  // get value array listPhones
  for (let i = 0; i < listPhones.length; i++) {
    let html = `
      <div class="item__product">
        <img src="${listPhones[i].imgSrc}" alt="">
        <span class="item__product-name">${listPhones[i].name}</span>
        <div class="product-price">
            <p class="item__product-buys-new">
                ${listPhones[i].priceNew}
                <span>đ</span>
            </p>
            <p class="item__product-buys-last">
                ${listPhones[i].priceLast}
                <span>đ</span>
            </p>
        </div>
        <button class="item__product-cart" title="Thêm vào giỏ hàng">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart2" viewBox="0 0 16 16">
                <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
        </button>
        <div class="product-icon">
            <div class="icon-heart" title="Thêm vào yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-heart" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            </div>
            <div class="icon-compare" title="Thêm vào so sánh">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                    <path
                        d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                </svg>
            </div>
        </div>
        <div class="product-discount">
            Giảm
            <p>5%</p>
        </div>
      </div>
    `;

    sectionContentPhone.append(html);
  }

  // get value array listFashions
  for (let i = 0; i < listFashions.length; i++) {
    var html = `
      <div class="item__product">
        <img src="${listFashions[i].imgSrc}"
            alt="">
        <span class="item__product-name">${listFashions[i].name}</span>
        <div class="product-price">
            <p class="item__product-buys-new">
                ${listFashions[i].priceNew}
                <span>đ</span>
            </p>
            <p class="item__product-buys-last">
                ${listFashions[i].priceLast}
                <span>đ</span>
            </p>
        </div>
        <button class="item__product-cart" title="Thêm vào giỏ hàng">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart2" viewBox="0 0 16 16">
                <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
        </button>
        <div class="product-icon">
            <div class="icon-heart" title="Thêm vào yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-heart" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            </div>
            <div class="icon-compare" title="Thêm vào so sánh">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                    <path
                        d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                </svg>
            </div>
        </div>
        <div class="product-discount">
            Giảm
            <p>61%</p>
        </div>
      </div>
    `;

    sectionContentStyle.append(html);
  }

  // get value array listFashions
  for (let i = 0; i < listAppliances.length; i++) {
    var html = `
        <div class="item__product">
          <img src="${listAppliances[i].imgSrc}"
              alt="">
          <span class="item__product-name">${listAppliances[i].name}</span>
          <div class="product-price">
              <p class="item__product-buys-new">
                  ${listAppliances[i].priceNew}
                  <span>đ</span>
              </p>
              <p class="item__product-buys-last">
                  ${listAppliances[i].priceLast}
                  <span>đ</span>
              </p>
          </div>
          <button class="item__product-cart" title="Thêm vào giỏ hàng">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-cart2" viewBox="0 0 16 16">
                  <path
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
          </button>
          <div class="product-icon">
              <div class="icon-heart" title="Thêm vào yêu thích">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-heart" viewBox="0 0 16 16">
                      <path
                          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
              </div>
              <div class="icon-compare" title="Thêm vào so sánh">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                      <path
                          d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                  </svg>
              </div>
          </div>
          <div class="product-discount">
              Giảm
              <p>61%</p>
          </div>
        </div>
      `;

    sectionContentAppliances.append(html);
  }

  // get value  techs
  for (let i = 0; i < listPhones.length; i++) {
    var html = `
      <div class="item__product col-lg-3 col-md-4 col-6">
        <img src="${listPhones[i].imgSrc}"
            alt="">
        <span class="item__product-name">${listPhones[i].name}</span>
        <div class="product-price">
            <p class="item__product-buys-new">
                ${listPhones[i].priceNew}
                <span>đ</span>
            </p>
            <p class="item__product-buys-last">
                ${listPhones[i].priceLast}
                <span>đ</span>
            </p>
        </div>
        <button class="item__product-cart" title="Thêm vào giỏ hàng">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart2" viewBox="0 0 16 16">
                <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
        </button>
        <div class="product-icon">
            <div class="icon-heart" title="Thêm vào yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-heart" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            </div>
            <div class="icon-compare" title="Thêm vào so sánh">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                    <path
                        d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                </svg>
            </div>
        </div>
        <div class="product-discount">
            Giảm
            <p>5%</p>
        </div>
      </div>
      `;

    $(".list__techs .row").append(html);
  }

  // get value fashions
  for (let i = 0; i < listFashions.length; i++) {
    var html = `
      <div class="item__product col-lg-3 col-md-4 col-6">
        <img src="${listFashions[i].imgSrc}"
            alt="">
        <span class="item__product-name">${listFashions[i].name}</span>
        <div class="product-price">
            <p class="item__product-buys-new">
            ${listFashions[i].priceNew}
                <span>đ</span>
            </p>
            <p class="item__product-buys-last">
            ${listFashions[i].priceLast}
                <span>đ</span>
            </p>
        </div>
        <button class="item__product-cart" title="Thêm vào giỏ hàng">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart2" viewBox="0 0 16 16">
                <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
        </button>
        <div class="product-icon">
            <div class="icon-heart" title="Thêm vào yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-heart" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            </div>
            <div class="icon-compare" title="Thêm vào so sánh">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                    <path
                        d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                </svg>
            </div>
        </div>
        <div class="product-discount">
            Giảm
            <p>61%</p>
        </div>
      </div>
    `;

    $(".list__fashion .row").append(html);
  }

  //get value suggest today
  for (let i = 0; i < listSuggestToday.length; i++) {
    var html = `
      <div class="item__product">
        <img src="${listSuggestToday[i].imgSrc}"
            alt="">
        <span class="item__product-name">${listSuggestToday[i].name}</span>
        <div class="product-price">
            <p class="item__product-buys-new">
                ${listSuggestToday[i].priceNew}
                <span>đ</span>
            </p>
            <p class="item__product-buys-last">
                ${listSuggestToday[i].priceLast}
                <span>đ</span>
            </p>
        </div>
        <button class="item__product-cart" title="Thêm vào giỏ hàng">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart2" viewBox="0 0 16 16">
                <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
        </button>
        <div class="product-icon">
            <div class="icon-heart" title="Thêm vào yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-heart" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            </div>
            <div class="icon-compare" title="Thêm vào so sánh">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                    <path
                        d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                </svg>
            </div>
        </div>
        <div class="product-discount">
            Giảm
            <p>5%</p>
        </div>
      </div>
    `;

    sectionSuggest.append(html);
  }

  // get value section newspapper
  for (let i = 0; i < listSuggestToday.length; i++) {
    var html = `
      <div class="item__product col-md-3 col-6">
        <img src="${listNewspaper[i].imgSrc}"
            alt="">
        <span class="item__product-name">${listNewspaper[i].name}</span>
        <div class="item__product-info">${listNewspaper[i].info}</div>
        <div class="product-discount">Tin tức</div>
      </div>
    `;

    $(".section__newspapper-products").append(html);
  }

  // modal
  $(".myModal").on("shown.bs.modal", () => {
    $(".myInput").focus();
  });

  // btn login register
  loginModal.click(() => {
    addClass(loginModal, check);
    addClass(loginBodyModal, check);

    removeClass(registerModal, check);
    removeClass(registerBodyModal, check);
  });

  registerModal.click(() => {
    addClass(registerModal, check);
    addClass(registerBodyModal, check);

    removeClass(loginModal, check);
    removeClass(loginBodyModal, check);
  });

  // menu btn click hiden show mobile and tablet
  navCategory.click(() => {
    addClass(navList, active);
    addClass(overlay, active);
  });

  iconExit.click(() => {
    removeClass(navList, active);
    removeClass(overlay, active);
  });

  overlay.click(() => {
    removeClass(navList, active);
    removeClass(overlay, active);
  });

  // section products
  // GC MODIF FROM https://codepen.io/onigetoc/pen/zPvLLG
  titleItem.click(function () {
    removeClass(titleItem, active);
    addClass($(this), active);
    $(".section__products-title").scrollCenter(".active", 300);
  });

  jQuery.fn.scrollCenter = function (elem, speed) {
    var active = jQuery(this).find(elem);
    var activeWidth = active.width() / 2;

    var pos = active.position().left + activeWidth;
    var elpos = jQuery(this).scrollLeft();
    var elW = jQuery(this).width();
    pos = pos + elpos - elW / 2;

    jQuery(this).animate(
      {
        scrollLeft: pos,
      },
      speed == undefined ? 1000 : speed
    );
    return this;
  };

  // http://podzic.com/wp-content/plugins/podzic/include/js/podzic.js
  jQuery.fn.scrollCenterORI = function (elem, speed) {
    jQuery(this).animate(
      {
        scrollLeft:
          jQuery(this).scrollLeft() -
          jQuery(this).offset().left +
          jQuery(elem).offset().left,
      },
      speed == undefined ? 1000 : speed
    );
    return this;
  };

  sectionPhone.click(() => {
    addClass(sectionPhone, active);
    addClass(productListPhones, active);

    removeClass(sectionStyle, active);
    removeClass(sectionAppliances, active);
    removeClass(productListStyles, active);
    removeClass(productListAppliances, active);
  });

  sectionStyle.click(() => {
    addClass(sectionStyle, active);
    addClass(productListStyles, active);

    removeClass(sectionPhone, active);
    removeClass(sectionAppliances, active);
    removeClass(productListPhones, active);
    removeClass(productListAppliances, active);
  });

  sectionAppliances.click(() => {
    addClass(sectionAppliances, active);
    addClass(productListAppliances, active);

    removeClass(sectionPhone, active);
    removeClass(sectionStyle, active);
    removeClass(productListPhones, active);
    removeClass(productListStyles, active);
  });

  // section category

  prevCategory.click(() => {
    scrollLeft(sectionCategory);
  });

  nextCategory.click(() => {
    scrollRight(sectionCategory);
  });

  // section product

  // product phone
  prevPhone.click(() => {
    scrollLeft(sectionContentPhone);
  });
  nextPhone.click(() => {
    scrollRight(sectionContentPhone);
  });

  //product style
  prevStyle.click(() => {
    scrollLeft(sectionContentStyle);
  });
  nextStyle.click(() => {
    scrollRight(sectionContentStyle);
  });

  // product appliances
  prevAppliances.click(() => {
    scrollLeft(sectionContentAppliances);
  });
  nextAppliances.click(() => {
    scrollRight(sectionContentAppliances);
  });

  // suggest today
  prevSuggest.click(() => {
    scrollLeft(sectionSuggest);
  });

  nextSuggest.click(() => {
    scrollRight(sectionSuggest);
  });

  // scroll top
  $(".scroll-top").click(() => {
    $(document).scrollTop(0);
  });

  // function Scroll
  function scrollLeft(e) {
    let leftPos = e.scrollLeft();
    e.animate({ scrollLeft: leftPos - 200 }, 300);
  }

  function scrollRight(e) {
    let leftPos = e.scrollLeft();
    e.animate({ scrollLeft: leftPos + 200 }, 300);
  }

  // function add remove class
  function addClass(a, b) {
    a.addClass(b);
  }

  function removeClass(a, b) {
    a.removeClass(b);
  }
});
