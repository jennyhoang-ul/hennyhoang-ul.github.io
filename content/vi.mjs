// Nội dung tiếng Việt cho portfolio của Jenny Hoang.
// Dự án và hoạt động nằm trong projects.mjs, activities.mjs; CV trong resume.cjs.
// Quy tắc viết: câu tự nhiên, cụ thể; không dùng gạch ngang dài (en dash, em dash). Giữ id mục giống en.mjs.
const EMAIL = "hdmduyen.hcmulaw@gmail.com";

export default {
  htmlLang: "vi",
  ogLocale: "vi_VN",
  ui: {
    nav: { home: "Trang chủ", projects: "Dự án", activities: "Hoạt động", about: "Về tôi", approach: "Cách làm", notes: "Ghi chú nghiên cứu", writing: "Bài viết", cv: "CV", contact: "Liên hệ" },
    navLabel: "Điều hướng chính", langLabel: "Ngôn ngữ", skip: "Bỏ qua, tới nội dung", onThisPage: "Trong trang này",
    arch: { filterLabel: "Lọc", all: "Tất cả", research: "Nghiên cứu khoa học", coursework: "Dự án học phần", technology: "Công cụ và web", ongoing: "Đang làm" },
    back: "Tất cả dự án", allProjects: "Quay lại tất cả dự án",
    home: "Trang chủ", homeLabel: "trang chủ", menu: "Menu",
    cvPdf: "Tải PDF", cvPdfOther: "PDF tiếng Anh",
    cvPdfNote: "Bản xem trước này tắt tải PDF.",
    cvDesc: "CV của Jenny Hoang (Hoàng Đào Mỹ Duyên): học vấn, nghiên cứu, dự án học thuật, công việc, hoạt động và kỹ năng.",
    foot: "TP. Hồ Chí Minh, Việt Nam. Cập nhật tháng 11/2026.",
  },
  pages: (h) => ({
    // ---------------------------------------------------------------- TRANG CHỦ
    index: {
      title: "Portfolio nghiên cứu",
      desc: "Jenny Hoang học Luật và Quản trị kinh doanh tại TP. Hồ Chí Minh, nghiên cứu so sánh pháp luật, gần đây về dữ liệu, chứng cứ và công nghệ.",
      body: `
<section class="hero" aria-labelledby="wm">${h.sky()}<div class="wrap">${h.stack()}
  <h1 class="wordmark" id="wm"><span>Jenny</span><span>Hoang</span></h1>
  <div class="hero-body"><div class="hero-card glass">
    <p class="lead">Tôi học Luật và Quản trị kinh doanh ở TP. Hồ Chí Minh và nghiên cứu so sánh pháp luật. Phần lớn đề tài bắt đầu từ một vấn đề của pháp luật Việt Nam rồi xem các hệ thống khác xử lý ra sao. Gần đây, các vấn đề ấy xoay quanh dữ liệu, chứng cứ và công nghệ.</p>
    <ul class="hero-facts"><li>Sinh viên năm 4, Trường Đại học Luật TP. Hồ Chí Minh</li><li>Sáu dự án nghiên cứu từ năm 2023</li><li>Làm việc bằng tiếng Việt và tiếng Anh</li></ul>
    <div class="hero-cta">${h.btn("projects.html", "Xem các dự án")}${h.go("cv.html", "Đọc CV")}</div></div>
  </div>
</div></section>

${h.block("research", "Nghiên cứu", "Sáu dự án từ 2023 đến 2026, mới nhất trước. Mỗi dự án mở ra một bài viết đầy đủ.",
  `${h.gallery()}<p class="more">${h.go("projects.html", "Cả 11 dự án, gồm công cụ và việc đang làm")}</p>`)}

${h.block("themes", "Tôi làm gì", "Những lĩnh vực tôi đã nghiên cứu, thói quen tôi mang vào mỗi dự án, và những gì tôi đang đọc.",
  `<div class="themes">
    <div><h3>Lĩnh vực</h3><ul class="plain"><li>Mua bán hàng hóa quốc tế (CISG)</li><li>Tư pháp người chưa thành niên và quyền trẻ em</li><li>Chứng cứ điện tử và dữ liệu cá nhân</li><li>Lao động nền tảng</li><li>Tố tụng hành chính</li></ul></div>
    <div><h3>Thói quen</h3><ul class="plain"><li>Đọc văn bản luật trước, bình luận sau</li><li>So sánh các hệ thống theo cùng một bộ câu hỏi</li><li>Mã hóa bản án và đếm với mẫu số rõ ràng</li><li>Đặt hai cách hiểu một quy định cạnh nhau</li><li>Đặc tả công cụ nghiên cứu nhỏ, xây dựng cùng AI</li></ul></div>
    <div><h3>Đang đọc</h3><ul class="plain"><li>COPPA và hướng dẫn của FTC</li><li>Luật Bảo vệ dữ liệu cá nhân 2025</li><li>GDPR về dữ liệu trẻ em và sức khỏe</li><li>Bản quyền với sản phẩm do AI tạo ra</li></ul></div>
  </div>
  <p class="more">${h.go("approach.html", "Tôi tiếp cận một câu hỏi nghiên cứu ra sao")}</p>`, "blue")}

${h.block("involvement", "Ngoài nghiên cứu", "Một công việc pháp chế thời đại học, và nhiều năm tổ chức tranh biện, bắt đầu từ thời phổ thông.",
  `<div class="split">
    <div class="callout"><p>Trước khi làm nghiên cứu, phần lớn thời gian của tôi dành cho tranh biện: kèm 21 thành viên mới, điều hành CLB của trường và tổ chức một giải đấu cho khoảng 150 người.</p>${h.go("activities.html", "Tất cả hoạt động")}</div>
    ${h.actPreview(["lvt", "maple", "ample", "shift", "youth"])}
  </div>`)}

${h.block("journey", "Bốn giai đoạn", "",
  `${h.phases([
     ["2019", "Phổ thông", "Lớp chuyên Văn, tranh biện, và một website đầu tiên về pháp luật."],
     ["2022", "Đại học và đi làm", "Song bằng, một công việc pháp chế và nhân sự song song, và đề tài đầu tiên làm chủ nhiệm."],
     ["2024", "Nghiên cứu so sánh", "Các đề tài về lao động nền tảng, dữ liệu điện tử và dữ liệu cá nhân."],
     ["2026", "Dự án lớn hơn", "Dự án CISG, dự án tư pháp người chưa thành niên, và công cụ sàng lọc làm cho dự án CISG."],
   ])}
   <p class="more">${h.go("about.html", "Đọc bản đầy đủ")}</p>`)}

${h.block("contact", "Liên hệ", "Email là cách nhanh nhất để liên hệ với tôi.",
  `<p class="contact-big"><a href="mailto:${EMAIL}">${EMAIL}</a></p>
   <div class="btns">${h.btn("cv.html", "Đọc CV", true)}</div>`, "peach")}`,
    },

    // ---------------------------------------------------------------- DỰ ÁN
    projects: {
      title: "Dự án",
      desc: "Tất cả dự án của Jenny Hoang: nghiên cứu khoa học, dự án học phần, công cụ nghiên cứu và việc đang làm.",
      body: `<div class="wrap">
${h.row(`<h1>Dự án</h1><p class="lead">Mọi việc tôi đã làm từ năm 2020, mới nhất trước. Đề tài nghiên cứu khoa học và dự án học phần có bài viết đầy đủ; các mục còn lại dẫn tới nơi chúng được nói đến.</p>`)}
<section class="sec" id="archive" aria-label="Dự án">${h.archive()}
<p class="meta">Đề tài nghiên cứu khoa học sinh viên là nghiên cứu cấp Khoa tại Trường Đại học Luật TP. Hồ Chí Minh, làm theo nhóm, bảo vệ trước hội đồng và được xếp loại. Dự án học phần là bài tập lớn theo nhóm trong một môn học. Số thứ tự theo thời điểm bắt đầu công việc.</p></section>
</div>`,
    },

    // ---------------------------------------------------------------- HOẠT ĐỘNG
    activities: {
      title: "Hoạt động",
      desc: "Công việc, hoạt động dẫn dắt và tranh biện của Jenny Hoang, từ thời phổ thông đến nay.",
      body: `<div class="wrap">
${h.row(`<h1>Hoạt động</h1><p class="lead">Công việc, tổ chức và tranh biện, từ thời phổ thông đến nay. Phần lớn là tranh biện. Tôi giữ chúng ở đây vì đó là một phần lớn những gì tôi đã làm, chứ không phải vì mọi hoạt động đều dẫn tới ngành luật.</p>`)}
${h.wsec("work", "Công việc", h.actList("work"))}
${h.wsec("lead", "Dẫn dắt và tổ chức", h.actList("lead"))}
${h.wsec("debate", "Tranh biện", h.actList("debate"))}
${h.wsec("school", "Trường học và ghi nhận", h.actList("school") + h.actList("recognition"))}
</div>`,
    },

    // ---------------------------------------------------------------- VỀ TÔI
    about: {
      title: "Về tôi",
      desc: "Bản đầy đủ: Jenny Hoang đã làm gì từ thời phổ thông, việc nghiên cứu phát triển ra sao, và những gì còn đang học.",
      body: `<div class="wrap">
${h.row(`<h1>Về tôi</h1><p class="lead">Tên đầy đủ của tôi là Hoàng Đào Mỹ Duyên; tôi thường dùng tên Jenny Hoang. Tôi học Luật và Quản trị kinh doanh tại Trường Đại học Luật TP. Hồ Chí Minh, trong chương trình giảng dạy bằng tiếng Anh.</p>`)}
${h.sec("short", "Bản ngắn",
  `<p>Phần lớn thời phổ thông, tôi gắn với tranh biện: lúc đầu là người thi đấu, sau đó điều hành CLB của trường. Lên đại học, tôi vừa học vừa làm pháp chế và nhân sự, và từ năm thứ hai bắt đầu tham gia đề tài nghiên cứu khoa học. Gần như mọi đề tài đều theo một cách làm: lấy một vấn đề cụ thể của pháp luật Việt Nam, xem vài quốc gia khác xử lý thế nào, rồi xác định điều gì đáng tham khảo và trong điều kiện nào.</p>
   <p>Theo thời gian, chủ đề dịch dần về phía công nghệ: từ chứng minh trong vụ án hành chính, đến hợp đồng của tài xế công nghệ, đến thu thập dữ liệu điện tử, rồi dữ liệu cá nhân trong chứng cứ hình sự. Năm 2026, tôi điều phối hai dự án học phần lớn hơn, một trong hai cần đến một phần mềm nhỏ.</p>`)}
${h.wsec("journey", "Chặng đường", h.timeline([
     ["2019 đến 2022", "THPT chuyên Lê Hồng Phong", "Lớp chuyên Văn, GPA 9,3/10. Học bổng khuyến khích mọi học kỳ. Đại diện trường tại Trường Teen 2020 và Wharton High School Investment Competition 2021."],
     ["2019 đến 2023", "Maple Debate", "Thi đấu tranh biện, rồi làm chủ nhiệm CLB của trường. Tôi viết chương trình huấn luyện và trực tiếp kèm 21 thành viên mới. Năm 2020: vô địch Fulbright Friendly Debate (bảng tiếng Việt) và NgheTinh Debate Open."],
     ["2020 đến 2022", "The Shift và AMPLE", "Hai dự án học sinh do tôi sáng lập: một website có nội dung pháp luật, và một giải đấu cùng một trại tranh biện với khoảng 150 và 100 người tham gia."],
     ["2022", "Vào đại học", "Song bằng Luật và Quản trị kinh doanh, Chương trình tiên tiến, Trường Đại học Luật TP. Hồ Chí Minh."],
     ["2022 đến 2024", "Giáo dục LVT", "Khoảng một năm rưỡi làm pháp chế và nhân sự: hợp đồng lao động, quy chế nội bộ, hồ sơ nhân sự."],
     ["2023 đến 2024", "Đề tài đầu tiên làm chủ nhiệm", "Chứng minh trong vụ án hành chính. Giải Khuyến khích cấp Khoa, nghiệm thu Xuất sắc."],
     ["2024", "Lao động nền tảng", "Hợp đồng của tài xế công nghệ. Giải Nhì Hội nghị Nhà khoa học trẻ, đăng trong kỷ yếu."],
     ["2024 đến 2025", "Dữ liệu điện tử", "Biện pháp thu thập thông điệp dữ liệu điện tử, với vai trò chủ nhiệm."],
     ["2024 đến 2026", "Ghi nhận học tập", "Danh hiệu học tập xuất sắc cấp Trường năm học 2024-2025 và 2025-2026; giấy khen của Đoàn Trường năm 2024."],
     ["2025 đến 2026", "Dữ liệu cá nhân", "Bảo vệ dữ liệu cá nhân trong thu thập chứng cứ điện tử. Giải Nhì cấp Khoa, nghiệm thu Xuất sắc."],
     ["2026", "CISG và tư pháp người chưa thành niên", "Hai dự án học phần do tôi điều phối, và một công cụ sàng lọc cho dự án đầu."],
     ["Hiện nay", "Pháp luật công nghệ và dữ liệu", "Hướng tôi đang thử trong phần ghi chú nghiên cứu."],
   ]))}
${h.sec("y2026", "Năm 2026 thay đổi điều gì",
  `<p>Hai dự án học phần năm 2026 lớn hơn mọi việc tôi từng làm. Ở dự án CISG, số liệu nhóm thu được không ủng hộ kết luận mà đề tài có vẻ hướng tới, và nhóm phải chọn giữa kéo giãn chứng cứ và thu hẹp nhận định. Chúng tôi thu hẹp nhận định. Cũng trong dự án này, tôi đặc tả và kiểm thử một công cụ nghiên cứu nhỏ với AI hỗ trợ, nên phải tự sửa lỗi Python và học cách dùng GitHub.</p>
   <p>Ở dự án tư pháp người chưa thành niên, tìm quy định là phần dễ. Phần khó là giữ cho đúng giá trị pháp lý của từng nguồn: điều ước, giải thích của ủy ban, chuẩn mực không ràng buộc của Liên hợp quốc và luật nước ngoài có vai trò khác nhau trong một lập luận.</p>`)}
${h.sec("rules", "Những điều tôi cố giữ",
  `<ul><li>Xác định điều kiện trước khi kết luận.</li><li>Nói rõ nguồn mạnh tới đâu, bên cạnh việc nguồn nói gì.</li><li>Khi chứng cứ mỏng, thu hẹp nhận định.</li><li>Ghi rõ ai làm phần nào, kể cả chỗ có AI hỗ trợ.</li></ul>
   <p>Ví dụ rõ nhất là bước ngoặt trong ${h.link("cisg", "dự án CISG")}. Trang ${h.link("approach", "cách làm")} đi qua phương pháp theo từng bước.</p>`)}
${h.sec("learning", "Những gì tôi còn đang học",
  `<p>Tôi chưa làm việc có hệ thống với pháp luật quyền riêng tư của Hoa Kỳ hay EU, chưa làm tuân thủ cho một sản phẩm phần mềm, chưa phỏng vấn hay khảo sát thực địa. Tôi đặc tả, kiểm thử và sửa lỗi mã được với AI hỗ trợ, nhưng không tự nhận là kỹ sư phần mềm. Tôi cũng chưa chốt chuyên ngành lâu dài; pháp luật công nghệ và dữ liệu là hướng tôi đang thử.</p>`)}
</div>`,
    },

    // ---------------------------------------------------------------- CÁCH LÀM
    approach: {
      title: "Cách làm",
      desc: "Cách Jenny Hoang tiếp cận một câu hỏi nghiên cứu pháp lý, mỗi bước kèm một ví dụ từ dự án của chính mình.",
      body: `<div class="wrap">
${h.row(`<h1>Cách làm</h1><p class="lead">Trình tự dưới đây lặp lại trong hầu hết dự án của tôi. Mỗi bước có một ví dụ thật để bạn đối chiếu với công việc.</p>`)}
${h.wsec("steps", "Tám bước, mỗi bước một ví dụ", `<ol class="steps">
  <li><h3>Thu hẹp câu hỏi</h3><p>Đề tài tư pháp người chưa thành niên được thu về một nhóm người (phạm nhân đang chấp hành án từ đủ 14 đến dưới 18 tuổi) và một quyền (liên hệ với gia đình).</p></li>
  <li><h3>Xem quy định có được áp dụng không</h3><p>Trước khi hỏi Tòa án đã làm gì với CISG, nhóm kiểm tra từng bước xem lẽ ra CISG có được áp dụng hay không.</p></li>
  <li><h3>Xếp thứ bậc nguồn</h3><p>Điều ước, giải thích của ủy ban, chuẩn mực không ràng buộc và luật nước ngoài có trọng lượng khác nhau. Tôi ghi rõ nguồn nào thuộc loại nào.</p></li>
  <li><h3>So sánh theo cùng câu hỏi</h3><p>Bảy câu hỏi đặt cho mọi nguồn trong dự án tư pháp người chưa thành niên, và cùng một khung so sánh trong cả bốn đề tài nghiên cứu khoa học.</p></li>
  <li><h3>Đối chiếu nhận định với chứng cứ</h3><p>25 trên 27 bản án không nhắc tới CISG cho thấy mức độ nhận diện, chưa nói được gì về cách giải thích. Nhóm đổi luận điểm.</p></li>
  <li><h3>Viết ra các cách hiểu khác nhau</h3><p>Hai cách hiểu về quy định kỷ luật với phạm nhân chưa thành niên, mỗi cách có hướng xử lý riêng.</p></li>
  <li><h3>Làm cho kết quả dùng được</h3><p>Một công cụ sàng lọc cho nhóm CISG; một danh sách kiến nghị xếp theo ai có thẩm quyền và tốn bao nhiêu nguồn lực.</p></li>
  <li><h3>Nói rõ điều còn chưa chắc</h3><p>Bài viết về CISG nêu rõ 91 tài liệu chưa được đánh giá yếu tố nước ngoài, và mẫu không đại diện toàn quốc.</p></li>
</ol>`, h.note("", "Tôi đã dùng cách này với pháp luật Việt Nam, pháp luật quốc tế và một phần pháp luật nước ngoài. Tôi chưa dùng nó cho pháp luật công nghệ của Hoa Kỳ hay EU, và đó là nơi tôi muốn áp dụng tiếp."))}
</div>`,
    },

    // ---------------------------------------------------------------- GHI CHÚ
    notes: {
      title: "Ghi chú nghiên cứu",
      desc: "Các câu hỏi nghiên cứu đang mở về dữ liệu trẻ em, thực tiễn CISG và thiết kế sản phẩm.",
      body: `<div class="wrap">
${h.row(`<h1>Ghi chú nghiên cứu</h1><p class="lead">Những câu hỏi tôi đang tìm hiểu. Chưa có mục nào là sản phẩm hoàn chỉnh hay ý kiến tư vấn pháp lý.</p>`)}
${h.sec("children-data", "Khi nào quy định về dữ liệu trẻ em áp dụng cho một ứng dụng chăm sóc tinh thần?",
  `<p>Ba chế độ pháp lý có thể liên quan tới một ứng dụng phát hành toàn cầu và miễn phí cho học sinh, sinh viên Việt Nam:</p>
   ${h.table(["Chế độ", "Điều cần kiểm tra trước"], [
     ["COPPA Rule (Hoa Kỳ), sửa đổi 2025, hạn tuân thủ 22/04/2026", "Dịch vụ có hướng tới trẻ dưới 13 tuổi không, hoặc bên vận hành có biết mình thu thập dữ liệu của các em không?"],
     ["Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 (Việt Nam), hiệu lực từ 01/01/2026", "Dữ liệu trẻ em và dữ liệu nhạy cảm được xử lý thế nào, và chuyển dữ liệu ra nước ngoài cần những gì."],
     ["GDPR (EU)", "Dịch vụ có nhắm tới hoặc theo dõi người ở EU không, và độ tuổi đồng ý ở từng quốc gia thành viên."],
   ])}
   <p>Tôi định so sánh theo một bộ câu hỏi cố định, như dự án tư pháp người chưa thành niên: ngưỡng tuổi, cơ sở pháp lý, sự đồng ý của cha mẹ, dữ liệu nhạy cảm, chuyển dữ liệu ra nước ngoài, xóa và lưu trữ.</p>`,
  h.note("", "Tình trạng: đang đọc văn bản gốc. Chưa có kết luận."))}
${h.sec("viac", "CISG tại Tòa án và tại trọng tài",
  `<p>Nghiên cứu tiếp theo của dự án học phần: trọng tài tại Việt Nam có nhận diện và giải thích CISG khác Tòa án không? Tôi đang soạn đề cương một bài tạp chí, tách biệt với sản phẩm của nhóm.</p>`,
  h.note("", "Tình trạng: đề cương, tháng 11/2026."))}
${h.sec("streaks", "Khi nào chuỗi ngày (streak) trở thành dark pattern?",
  `<p>Ứng dụng chăm sóc tinh thần dùng chuỗi ngày và phần thưởng để tạo thói quen, và cơ quan quản lý ở Hoa Kỳ, EU đã gọi một số cách thiết kế là thao túng. Ranh giới nằm ở đâu vừa là câu hỏi pháp lý vừa là câu hỏi của khoa học hành vi, nên tôi muốn làm câu hỏi này cùng người trong ngành đó.</p>`,
  h.note("", "Tình trạng: câu hỏi mở."))}
</div>`,
    },

    // ---------------------------------------------------------------- BÀI VIẾT
    writing: {
      title: "Bài viết",
      desc: "Sản phẩm nghiên cứu của Jenny Hoang, mỗi mục ghi đúng bản chất.",
      body: `<div class="wrap">
${h.row(`<h1>Bài viết</h1><p class="lead">Sản phẩm nghiên cứu, ghi đúng bản chất của từng mục. Bài tập học phần được ghi là bài tập học phần.</p>`)}
${h.sec("published", "Đã công bố",
  `<ul class="entries"><li class="entry"><h3>${h.link("drivers", "Bảo vệ quyền của tài xế công nghệ trong hợp đồng với doanh nghiệp gọi xe")}</h3><p class="meta">2024 / đồng tác giả / kỷ yếu hội nghị "Việt Nam trong bối cảnh hội nhập và toàn cầu hóa"</p><p>Giải Nhì Hội nghị Nhà khoa học trẻ 2024.</p></li></ul>`)}
${h.sec("research", "Báo cáo nghiên cứu khoa học, đã nghiệm thu",
  `<ul class="entries">
   <li class="entry"><h3>${h.link("hs61", "Bảo vệ dữ liệu cá nhân trong thu thập chứng cứ điện tử")}</h3><p class="meta">2025 đến 2026 / thành viên / nghiệm thu Xuất sắc</p></li>
   <li class="entry"><h3>${h.link("ds92", "Biện pháp thu thập thông điệp dữ liệu điện tử")}</h3><p class="meta">2024 đến 2025 / chủ nhiệm / nghiệm thu Tốt</p></li>
   <li class="entry"><h3>${h.link("admin", "Chứng minh trong vụ án hành chính ở một số quốc gia")}</h3><p class="meta">2023 đến 2024 / chủ nhiệm / nghiệm thu Xuất sắc</p></li>
  </ul>`)}
${h.sec("coursework", "Bài tập học phần",
  `<ul class="entries">
   <li class="entry"><h3>${h.link("cisg", "CISG tại Tòa án Việt Nam")}</h3><p class="meta">2026 / slide nhóm và bản phân tích</p></li>
   <li class="entry"><h3>${h.link("jcj", "Quyền liên hệ gia đình của phạm nhân chưa thành niên")}</h3><p class="meta">2026 / bản thảo nhóm 138 trang</p></li>
  </ul>`)}
${h.sec("progress", "Đang làm",
  `<ul class="entries"><li class="entry"><h3>${h.link("notes", "CISG tại Tòa án và trọng tài Việt Nam")}</h3><p class="meta">Đề cương bài tạp chí, đang làm</p></li><li class="entry"><h3>${h.link("notes", "Dữ liệu trẻ em trong ba hệ thống pháp luật")}</h3><p class="meta">Ghi chú nghiên cứu, đang làm</p></li></ul>`)}
</div>`,
    },

    // ---------------------------------------------------------------- LIÊN HỆ
    contact: {
      title: "Liên hệ",
      desc: "Cách liên hệ Jenny Hoang và nơi xem CV.",
      body: `<div class="wrap">
${h.row(`<h1>Liên hệ</h1><p class="lead">Email là cách nhanh nhất để liên hệ với tôi. Tôi ở TP. Hồ Chí Minh (UTC+7).</p>`)}
${h.wsec("email", "Email",
  `<p class="contact-big"><a href="mailto:${EMAIL}">${EMAIL}</a></p>`,
  h.note("", "Nếu đường dẫn không mở ứng dụng email, hãy sao chép địa chỉ."))}
${h.sec("cv", "CV",
  `<p>${h.link("cv", "Xem CV trên trang này")}${h.ARTIFACT ? "." : `, hoặc tải bản PDF ${h.cv("vi", "tiếng Việt")} hay ${h.cv("en", "tiếng Anh")}.`}</p>`)}
</div>`,
    },

    // ---------------------------------------------------------------- TRANG ĐỀ TÀI NGHIÊN CỨU
    hs61: {
      title: "Dữ liệu cá nhân trong chứng cứ điện tử",
      desc: "Đề tài nghiên cứu khoa học HS61: bảo vệ dữ liệu cá nhân khi thu thập chứng cứ điện tử, so sánh một số quốc gia với Việt Nam.",
      body: `${h.caseHero({ id: "hs61", kicker: "Nghiên cứu khoa học sinh viên, 2025 đến 2026", title: "Dữ liệu cá nhân trong thu thập chứng cứ điện tử", lede: "Đề tài cấp Khoa về những bảo đảm cần có cho dữ liệu cá nhân khi cơ quan điều tra thu thập chứng cứ điện tử trong vụ án hình sự, so sánh pháp luật tố tụng hình sự của một số quốc gia với Việt Nam.", meta: [
  ["Chương trình", "Nghiên cứu khoa học sinh viên, Trường Đại học Luật TP. Hồ Chí Minh, đề tài HS61"],
  ["Thời gian", "2025 đến 2026"],
  ["Vai trò", "Thành viên"],
  ["Phương pháp", "So sánh pháp luật"],
  ["Kết quả", "Giải Nhì cấp Khoa; nghiệm thu Xuất sắc"],
] })}
${h.caseBody([["question", "Câu hỏi"], ["role", "Vai trò"], ["method", "Phương pháp"], ["result", "Kết quả"], ["related", "Liên quan"]], `
${h.sec("question", "Câu hỏi nghiên cứu",
  `<p>Chứng cứ điện tử hiếm khi chỉ chứa đúng những gì cuộc điều tra cần. Một chiếc điện thoại hay một tài khoản trực tuyến lưu tin nhắn, hình ảnh, danh bạ, nhiều thứ trong đó thuộc về những người không liên quan đến vụ án. Đề tài đặt câu hỏi: pháp luật tố tụng hình sự giới hạn và bảo đảm gì khi thu thập những dữ liệu ấy, và Việt Nam có thể tham khảo gì từ quy định của một số quốc gia.</p>`)}
${h.sec("role", "Vai trò của tôi",
  `<p>Tôi là thành viên nhóm nghiên cứu; chủ nhiệm đề tài là một bạn sinh viên khác.</p>`)}
${h.sec("method", "Phương pháp",
  `<p>So sánh pháp luật: đối chiếu quy định tố tụng hình sự của một số quốc gia với pháp luật Việt Nam, rồi rút ra kinh nghiệm cho Việt Nam. Khung so sánh giống các đề tài nghiên cứu khoa học khác của tôi.</p>`)}
${h.sec("result", "Kết quả",
  `<ul><li>Giải Nhì Nghiên cứu khoa học sinh viên cấp Khoa (Quyết định 1044/QĐ-ĐHL, tháng 10/2025).</li><li>Nghiệm thu loại Xuất sắc (Giấy chứng nhận 435/GCN-NCKHSV).</li></ul>`)}
${h.sec("related", "Liên quan",
  `<p>Năm trước đó, tôi làm chủ nhiệm ${h.link("ds92", "đề tài DS92")} về thu thập thông điệp dữ liệu điện tử. Dữ liệu cá nhân cũng là chủ đề trong ${h.link("notes", "ghi chú nghiên cứu")} hiện tại của tôi về dữ liệu trẻ em.</p>`)}
`)}`,
    },

    ds92: {
      title: "Thu thập thông điệp dữ liệu điện tử",
      desc: "Đề tài nghiên cứu khoa học DS92 do Jenny Hoang làm chủ nhiệm: biện pháp thu thập thông điệp dữ liệu điện tử ở một số quốc gia và Việt Nam.",
      body: `${h.caseHero({ id: "ds92", kicker: "Nghiên cứu khoa học sinh viên, 2024 đến 2025", title: "Thu thập thông điệp dữ liệu điện tử", lede: "Đề tài cấp Khoa do tôi làm chủ nhiệm, về các biện pháp pháp lý dùng để thu thập thông điệp dữ liệu điện tử, như email hay tin nhắn, ở một số quốc gia, và Việt Nam có thể tham khảo điều gì.", meta: [
  ["Chương trình", "Nghiên cứu khoa học sinh viên, Trường Đại học Luật TP. Hồ Chí Minh, đề tài DS92"],
  ["Thời gian", "2024 đến 2025"],
  ["Vai trò", "Chủ nhiệm đề tài"],
  ["Phương pháp", "So sánh pháp luật"],
  ["Kết quả", "Nghiệm thu loại Tốt, tháng 10/2025"],
] })}
${h.caseBody([["question", "Câu hỏi"], ["role", "Vai trò"], ["method", "Phương pháp"], ["result", "Kết quả"], ["related", "Liên quan"]], `
${h.sec("question", "Câu hỏi nghiên cứu",
  `<p>Pháp luật tố tụng Việt Nam thừa nhận dữ liệu điện tử là nguồn chứng cứ, nhưng việc thu thập đặt ra những câu hỏi mà chứng cứ giấy không có: ai được thu thập, bằng biện pháp nào, và làm sao giữ được tính toàn vẹn. Đề tài so sánh các biện pháp một số quốc gia đang dùng và xem Việt Nam có thể tiếp thu điều gì.</p>`)}
${h.sec("role", "Vai trò của tôi",
  `<p>Tôi làm chủ nhiệm, dẫn dắt nhóm sinh viên từ kế hoạch nghiên cứu đến buổi bảo vệ.</p>`)}
${h.sec("method", "Phương pháp",
  `<p>So sánh pháp luật về các biện pháp thu thập ở một số quốc gia, đối chiếu với pháp luật Việt Nam, rồi đưa ra kiến nghị từ kết quả so sánh.</p>`)}
${h.sec("result", "Kết quả",
  `<ul><li>Nghiệm thu loại Tốt (Giấy chứng nhận 922/GCN-NCKHSV, tháng 10/2025).</li></ul>`)}
${h.sec("related", "Liên quan",
  `<p>Năm sau đó, tôi tham gia ${h.link("hs61", "đề tài HS61")} về bảo vệ dữ liệu cá nhân khi thu thập chứng cứ điện tử.</p>`)}
`)}`,
    },

    drivers: {
      title: "Tài xế công nghệ và hợp đồng gọi xe",
      desc: "Nghiên cứu khoa học về bảo vệ tài xế công nghệ trong hợp đồng với doanh nghiệp gọi xe ở một số quốc gia và giá trị tham khảo cho Việt Nam; đã đăng trong kỷ yếu hội nghị.",
      body: `${h.caseHero({ id: "drivers", kicker: "Nghiên cứu khoa học sinh viên, 2024", title: "Tài xế công nghệ và hợp đồng gọi xe", lede: "Nghiên cứu nhóm về cách một số quốc gia bảo vệ tài xế làm việc qua nền tảng gọi xe theo hợp đồng, và các cách tiếp cận ấy gợi ý gì cho Việt Nam. Bài viết đã đăng trong kỷ yếu hội nghị.", meta: [
  ["Khuôn khổ", "Hội nghị Nhà khoa học trẻ 2024"],
  ["Thời gian", "2024"],
  ["Vai trò", "Thành viên, đồng tác giả"],
  ["Phương pháp", "So sánh pháp luật"],
  ["Kết quả", "Giải Nhì; đăng trong kỷ yếu"],
] })}
${h.caseBody([["question", "Câu hỏi"], ["role", "Vai trò"], ["method", "Phương pháp"], ["result", "Kết quả"]], `
${h.sec("question", "Câu hỏi nghiên cứu",
  `<p>Tài xế trên các nền tảng gọi xe làm việc theo hợp đồng do nền tảng soạn sẵn, và việc họ được coi là người lao động, đối tác hay một dạng ở giữa quyết định họ được bảo vệ đến đâu. Đề tài xem một số quốc gia trả lời câu hỏi đó ra sao và câu trả lời ấy có giá trị tham khảo gì cho Việt Nam.</p>`)}
${h.sec("role", "Vai trò của tôi",
  `<p>Tôi là thành viên nhóm nghiên cứu và đồng tác giả bài viết.</p>`)}
${h.sec("method", "Phương pháp",
  `<p>So sánh pháp luật về quan hệ hợp đồng giữa tài xế và doanh nghiệp gọi xe ở một số quốc gia, đối chiếu với pháp luật Việt Nam.</p>`)}
${h.sec("result", "Kết quả và công bố",
  `<ul><li>Giải Nhì Hội nghị Nhà khoa học trẻ 2024.</li><li>Đăng trong kỷ yếu hội nghị "Việt Nam trong bối cảnh hội nhập và toàn cầu hóa".</li></ul>
   <p>Bài viết được liệt kê cùng các sản phẩm khác ở trang ${h.link("writing", "bài viết")}.</p>`)}
`)}`,
    },

    admin: {
      title: "Chứng minh trong vụ án hành chính",
      desc: "Đề tài đầu tiên Jenny Hoang làm chủ nhiệm: chứng minh trong tố tụng hành chính ở một số quốc gia và giá trị tham khảo cho Việt Nam.",
      body: `${h.caseHero({ id: "admin", kicker: "Nghiên cứu khoa học sinh viên, 2023 đến 2024", title: "Chứng minh trong vụ án hành chính", lede: "Đề tài đầu tiên tôi làm chủ nhiệm: nghiên cứu so sánh về chứng minh trong tố tụng hành chính ở một số quốc gia và giá trị tham khảo cho Việt Nam.", meta: [
  ["Chương trình", "Nghiên cứu khoa học sinh viên, Trường Đại học Luật TP. Hồ Chí Minh"],
  ["Thời gian", "2023 đến 2024"],
  ["Vai trò", "Chủ nhiệm đề tài"],
  ["Phương pháp", "So sánh pháp luật"],
  ["Kết quả", "Giải Khuyến khích cấp Khoa; nghiệm thu Xuất sắc"],
] })}
${h.caseBody([["question", "Câu hỏi"], ["role", "Vai trò"], ["method", "Phương pháp"], ["result", "Kết quả"], ["related", "Liên quan"]], `
${h.sec("question", "Câu hỏi nghiên cứu",
  `<p>Trong vụ án hành chính, người dân khởi kiện một quyết định của cơ quan nhà nước, và phía cơ quan nhà nước thường nắm phần lớn tài liệu liên quan. Nghĩa vụ chứng minh được chia giữa các bên ra sao, và Tòa án tự thu thập chứng cứ đến mức nào, quyết định người khởi kiện có cơ hội thắng hay không. Đề tài so sánh cách một số quốc gia xử lý vấn đề này.</p>`)}
${h.sec("role", "Vai trò của tôi",
  `<p>Tôi làm chủ nhiệm, dẫn dắt nhóm sinh viên. Đây là đề tài đầu tiên tôi đảm nhận vai trò này.</p>`)}
${h.sec("method", "Phương pháp",
  `<p>So sánh pháp luật về chứng minh trong tố tụng hành chính ở một số quốc gia, đối chiếu với pháp luật Việt Nam.</p>`)}
${h.sec("result", "Kết quả",
  `<ul><li>Giải Khuyến khích Nghiên cứu khoa học sinh viên cấp Khoa.</li><li>Nghiệm thu loại Xuất sắc.</li></ul>`)}
${h.sec("related", "Liên quan",
  `<p>Đây là đề tài đầu tiên trong bốn đề tài nghiên cứu khoa học của tôi. Ba đề tài sau lần lượt về ${h.link("drivers", "lao động nền tảng")}, ${h.link("ds92", "thông điệp dữ liệu điện tử")} và ${h.link("hs61", "dữ liệu cá nhân trong chứng cứ điện tử")}.</p>`)}
`)}`,
    },

    cisg: {
      title: "Case study CISG",
      desc: "Nhóm đã sàng lọc 197 tài liệu tư pháp Việt Nam theo điều kiện áp dụng CISG như thế nào, và vì sao kết quả cho thấy khoảng trống nhận diện chứ chưa chứng minh xu hướng giải thích theo nội luật.",
      body: `${h.caseHero({ id: "cisg", kicker: "Dự án học phần, tháng 9 đến tháng 10/2026", title: `Khi Công ước có cơ sở áp dụng nhưng không xuất hiện trong bản án`, lede: `Dự án học phần về cách Tòa án Việt Nam nhận diện và áp dụng Công ước Liên hợp quốc về hợp đồng mua bán hàng hóa quốc tế (CISG), và chứng cứ của nhóm nói được gì, không nói được gì về xu hướng giải thích theo nội luật (homeward trend).`, meta: [
  ["Bối cảnh", "Nhóm 3, học phần Hợp đồng mua bán hàng hóa quốc tế (lớp CLCQTL47B), Trường Đại học Luật TP. Hồ Chí Minh"],
  ["Thời gian", "Tháng 9 đến tháng 10/2026"],
  ["Vai trò", "Điều phối dự án: định hướng nghiên cứu, khung sàng lọc, phân tích án, cấu trúc thuyết trình; đặc tả và kiểm thử công cụ nghiên cứu"],
  ["Phương pháp", "Phân tích điều kiện áp dụng điều ước, lập luận tư pháp quốc tế, mã hóa tài liệu tư pháp, phân tích án, dự báo có điều kiện"],
  ["Sản phẩm", "Slide nhóm, bản phân tích phần 3 và 4, công cụ sàng lọc Python/Streamlit"],
] })}
${h.caseBody([["problem","Vấn đề"],["role","Vai trò"],["method","Phương pháp"],["evidence","Chứng cứ"],["reasoning","Lập luận"],["turn","Bước ngoặt"],["tool","Công cụ"],["outputs","Sản phẩm"],["skills","Năng lực"],["limits","Giới hạn"]], `

${h.sec("problem", "Vấn đề nghiên cứu",
  `<p>Một tranh chấp có bên nước ngoài không tự động thuộc phạm vi CISG. Điều 1 phụ thuộc vào trụ sở thương mại của các bên, các quốc gia đó có là thành viên vào thời điểm liên quan hay quy phạm xung đột dẫn tới một quốc gia thành viên, hàng hóa là gì và các bên có loại trừ Công ước hay không. Và ngay cả khi CISG là nguồn liên quan, Tòa án vẫn có thể áp dụng, chỉ viện dẫn, xem xét rồi từ chối, hoặc hoàn toàn không nhắc tới.</p>
   <p>Đề tài hỏi về homeward trend: giải thích Công ước bằng khái niệm nội luật thay vì giải thích tự chủ như Điều 7 yêu cầu. Câu hỏi đó chỉ có nghĩa khi Tòa án đã nhận diện CISG ngay từ đầu.</p>
   <h3>Câu hỏi nghiên cứu</h3>
   <ol><li>Phân biệt tranh chấp "có yếu tố nước ngoài" theo pháp luật Việt Nam với hợp đồng mua bán quốc tế theo Điều 1 CISG như thế nào?</li>
   <li>Làm sao kiểm tra từng hồ sơ về điều kiện áp dụng CISG bằng các bước khách quan, lặp lại được?</li>
   <li>Khi CISG có cơ sở áp dụng, Tòa án đã áp dụng, viện dẫn, từ chối hay bỏ qua?</li>
   <li>Kết quả đó là bằng chứng của homeward trend, hay của một vấn đề có trước: không nhận diện Công ước?</li></ol>`)}

${h.sec("role", "Vai trò của tôi",
  `<p>Tôi tổ chức dự án thành bốn phần liên kết cho bài thuyết trình 30 phút: lý thuyết và dữ liệu; phân tích án và kiểm tra homeward; cơ chế và dự báo có điều kiện; kiến nghị. Tôi yêu cầu phương pháp sàng lọc dựa trên từng điều kiện pháp lý, đặt yêu cầu cho phần thống kê của nhóm (phân biệt cấp hồ sơ và cấp tài liệu, mẫu số đúng, dữ liệu thiếu, codebook), và định hướng viết lại phần 3 khi dữ liệu không ủng hộ cách đặt vấn đề ban đầu.</p>
   <p>Bộ dữ liệu, slide và phân tích là sản phẩm của nhóm. Tôi không tự nhận đã tự mình đọc mọi tài liệu.</p>`)}

${h.sec("method", "Phương pháp: chuỗi sàng lọc",
  `<p>Thay vì tìm chữ "CISG" trong bản án, nhóm kiểm tra từng tài liệu theo thứ tự và ghi lại lý do ở mỗi bước:</p>
   <ol class="steps">
    <li><div><h3>Yếu tố nước ngoài</h3><p>Pháp luật Việt Nam có coi tranh chấp là có yếu tố nước ngoài không? Đây chỉ là bộ lọc đầu tiên.</p></div></li>
    <li><div><h3>Trụ sở thương mại</h3><p>Trụ sở liên quan của các bên có ở các quốc gia khác nhau không (Điều 1 và 10)?</p></div></li>
    <li><div><h3>Con đường áp dụng và thời điểm</h3><p>Áp dụng trực tiếp theo Điều 1(1)(a), hay qua quy phạm xung đột theo 1(1)(b); tư cách thành viên vào thời điểm liên quan (Điều 100).</p></div></li>
    <li><div><h3>Phạm vi</h3><p>Hàng hóa bị loại trừ (Điều 2), hợp đồng hỗn hợp hoặc gia công (Điều 3).</p></div></li>
    <li><div><h3>Loại trừ</h3><p>Các bên có loại trừ Công ước không (Điều 6)? Chọn luật Việt Nam không mặc nhiên là loại trừ.</p></div></li>
    <li><div><h3>Vấn đề tranh chấp và cách Tòa xử lý</h3><p>Vấn đề tranh chấp có thuộc phạm vi Công ước không? Chỉ sau đó mới xem Tòa án thực tế xử lý ra sao.</p></div></li>
   </ol>
   <p>Lựa chọn thiết kế quan trọng nhất là tách <em>kết luận của nhóm</em> về khả năng áp dụng khỏi <em>những gì Tòa án viết</em>.</p>`)}

${h.sec("evidence", "Làm việc với chứng cứ",
  `<div class="funnel" role="img" aria-label="197 tài liệu được thu thập, 58 có yếu tố nước ngoài, 27 có cơ sở xem xét CISG, 2 có áp dụng thực chất">
    <div class="f-row"><div class="f-l">Tài liệu tư pháp nhóm thu thập</div><div class="f-track"><div class="f-bar" style="width:100%"></div></div><div class="f-n">197</div></div>
    <div class="f-row"><div class="f-l">Có yếu tố nước ngoài</div><div class="f-track"><div class="f-bar" style="width:29.4%"></div></div><div class="f-n">58</div></div>
    <div class="f-row"><div class="f-l">Có cơ sở xem xét CISG</div><div class="f-track"><div class="f-bar" style="width:13.7%"></div></div><div class="f-n">27</div></div>
    <div class="f-row"><div class="f-l">Có áp dụng</div><div class="f-track"><div class="f-bar" style="width:1.0%"></div></div><div class="f-n">2</div></div>
   </div>
   <p class="small">Độ dài thanh theo đúng tỷ lệ so với 197 tài liệu đã thu thập.</p>
   <p>Trong 27 tài liệu có cơ sở xem xét, 25 tài liệu không nhắc tới Công ước. 18 tài liệu thuộc con đường trực tiếp của Điều 1(1)(a) và 24 tài liệu là hợp đồng mua bán thuần túy. Trong 16 tài liệu thuộc cả hai nhóm, 14 tài liệu vẫn không nhắc tới CISG, nên không thể giải thích khoảng trống này chỉ bằng quy phạm xung đột phức tạp hay hợp đồng khó phân loại.</p>`,
  `${h.note("", "Số liệu từ bản phân tích của nhóm, đầu tháng 10/2026.")}
   ${h.note("", "<b>Đọc thận trọng.</b> Đây là mẫu do nhóm mã hóa, không đại diện cho toàn bộ Tòa án Việt Nam. 91 tài liệu bị loại ở bước trước và chưa được đánh giá yếu tố nước ngoài.")}`)}

${h.sec("reasoning", "Lập luận pháp lý trong thực tế",
  `<h3>Nội luật xuất hiện trong lập luận không mặc nhiên là sai</h3>
   <p>Trong một bản án ở Bình Dương, Tòa án áp dụng CISG cho nghĩa vụ thanh toán và tiền lãi nhưng dùng pháp luật Việt Nam để xác định lãi suất. Điều 78 cho quyền yêu cầu lãi nhưng không ấn định mức lãi, nên việc tìm tới nguồn khác tự thân không phải là lỗi. Câu hỏi thật là Tòa án có theo trình tự của Điều 7(2) không: các nguyên tắc chung của Công ước trước, rồi mới tới pháp luật quốc gia được áp dụng. Nhóm coi đây là câu hỏi còn mở, không phải bằng chứng của homeward trend.</p>
   <h3>Bối cảnh tố tụng thay đổi giá trị chứng minh của việc viện dẫn</h3>
   <p>Một quyết định ở Hải Phòng viện dẫn CISG khi xem xét công nhận phán quyết trọng tài nước ngoài. Tòa án xem xét phán quyết trọng tài không giải quyết nội dung hợp đồng, nên việc viện dẫn đó cho thấy có biết tới Công ước nhưng nói rất ít về cách Tòa án xét xử nội dung giải thích nó.</p>`)}

${h.sec("turn", "Bước ngoặt",
  `${h.quote("“Tòa án không nhắc tới CISG” và “Tòa án giải thích CISG bằng khái niệm nội luật” là hai hiện tượng khác nhau.", "Case study CISG, bước ngoặt")}<p>Lấy 25 chia 27 rồi gọi đó là thước đo homeward trend thì rất dễ. Nhưng "Tòa án không nhắc tới CISG" và "Tòa án giải thích CISG bằng khái niệm nội luật" là hai hiện tượng khác nhau. Hai trường hợp áp dụng thực chất không thể cho thấy một xu hướng giải thích ổn định.</p>
   <p>Vì vậy nhóm đổi luận điểm. Phát hiện trở thành <strong>khoảng cách giữa cơ sở áp dụng và việc nhận diện</strong>. Phần 3 chuyển thành dự báo có điều kiện theo hai biến: mức độ Tòa án nhận diện CISG và năng lực giải thích tự chủ. Kịch bản rủi ro cao nhất không phải khi Tòa án bỏ qua Công ước, mà khi mức độ nhận diện tăng nhanh hơn năng lực giải thích đúng.</p>`)}

${h.sec("tool", "Từ nghiên cứu tới công cụ nghiên cứu",
  `<p>Để bảy người sàng lọc theo cùng một cách, tôi đặc tả một ứng dụng web nhỏ và xây dựng qua nhiều vòng với sự hỗ trợ lập trình của AI, bằng Python và Streamlit, qua GitHub. Phiên bản tôi đã kiểm tra có bốn thẻ:</p>
   <ul><li><strong>Lọc hồ sơ:</strong> tải PDF lên (file trùng y hệt bị phát hiện bằng mã băm), đi qua từng bước pháp lý và lưu mỗi câu trả lời kèm lý do.</li>
   <li><strong>Kho hồ sơ:</strong> xem, sửa và quản lý hồ sơ dùng chung.</li>
   <li><strong>Thống kê:</strong> tổng hợp các hồ sơ đã mã hóa.</li>
   <li><strong>Minigame:</strong> lọc lại một hồ sơ đã hoàn tất và bị dừng ngay ở bước đầu tiên khác với kết quả của nhóm; câu trả lời luyện tập không ghi vào dữ liệu nghiên cứu.</li></ul>
   <p>Quy tắc tôi yêu cầu giữ: phần hỗ trợ xác định pháp luật áp dụng chỉ gợi ý khi đã có đủ dữ kiện cần thiết. Nếu thiếu, nó dừng lại và yêu cầu người xem xét, vì một dữ kiện bị thiếu không được âm thầm biến thành câu trả lời "không".</p>
   <p>Phần của tôi là logic pháp lý, yêu cầu, tích hợp và chỉnh sửa mã, kiểm thử và báo các lỗi thực tế (lỗi cú pháp, thụt lề, kiểu dữ liệu) cho tới khi sửa xong. Phần lớn mã được viết với sự hỗ trợ của AI.</p>`)}

${h.sec("outputs", "Sản phẩm và bằng chứng",
  h.table(["Sản phẩm", "Cho thấy điều gì"], [
    ["Slide Nhóm 3", "Mạch nghiên cứu, 197 đến 58 đến 27 đến 2, và phân tích homeward"],
    ["Bản phân tích phần 3 và 4", "Phân tích án, bảng số liệu, kịch bản có điều kiện"],
    ["Mã nguồn công cụ sàng lọc", "Bốn thẻ, phần hỗ trợ xung đột pháp luật có giới hạn, chế độ luyện tập"],
    ["Tài liệu thống kê cho nhóm", "Codebook, mẫu số, quy tắc xử lý dữ liệu thiếu"],
    ["Đề cương nghiên cứu tiếp: Tòa án và trọng tài", "Một nghiên cứu riêng, đang làm"],
  ]))}

${h.sec("skills", "Dự án cho thấy gì, và tôi phát triển được gì",
  `<p><strong>Thể hiện được:</strong> phân tích điều kiện áp dụng điều ước, phân tích án dựa vào lập luận chứ không chỉ kết quả, sử dụng dữ liệu có kỷ luật, điều phối nghiên cứu nhóm.</p>
   <p><strong>Phát triển trong dự án:</strong> chuyển quy phạm thành chuỗi quyết định mà người khác làm theo được, đọc thông báo lỗi và sửa mã với AI hỗ trợ, trình bày rõ ràng một phát hiện hẹp.</p>
   <p><strong>Dự án này không chứng minh:</strong> chuyên môn về pháp luật quyền riêng tư, tuân thủ sản phẩm hay kỹ thuật phần mềm.</p>`)}

${h.sec("limits", "Giới hạn và câu hỏi tiếp theo",
  `<ul><li>Mẫu là bộ sưu tập của nhóm, không phải bộ dữ liệu đại diện toàn quốc.</li><li>Việc mã hóa pháp lý chưa được ai ngoài nhóm kiểm tra.</li></ul>
   <p>Câu hỏi tôi muốn theo đuổi tiếp là trọng tài tại Việt Nam có xử lý CISG khác Tòa án không; tôi đang soạn đề cương trong phần ${h.link("notes", "ghi chú nghiên cứu")}.</p>`)}
`)}`,
    },

    jcj: {
      title: "Case study tư pháp người chưa thành niên",
      desc: "So sánh theo bảy tiêu chí giữa pháp luật Việt Nam về quyền liên hệ gia đình của phạm nhân chưa thành niên, chuẩn mực Liên hợp quốc và bốn cách tiếp cận nước ngoài.",
      body: `${h.caseHero({ id: "jcj", kicker: "Dự án học phần, tháng 10/2026", title: `Mức trần cao hơn chưa phải là mức sàn được bảo đảm`, lede: `Dự án học phần đặt câu hỏi: người chưa thành niên đang chấp hành án phạt tù ở Việt Nam có thể trông cậy vào việc liên hệ đều đặn, tiếp cận được và được bảo vệ với gia đình hay không, khi đối chiếu với chuẩn mực Liên hợp quốc.`, meta: [
  ["Bối cảnh", "Nhóm 7, học phần Tư pháp người chưa thành niên, Khoa Luật Hình sự, Trường Đại học Luật TP. Hồ Chí Minh"],
  ["Thời gian", "Tháng 10/2026"],
  ["Vai trò", "Điều phối dự án; đồng tác giả phần mở đầu và khung pháp lý; rà soát phần so sánh và kiến nghị"],
  ["Phương pháp", "Phân tích quy phạm, so sánh lịch sử, đối chiếu chuẩn mực Liên hợp quốc, so sánh chức năng có chọn lọc với pháp luật nước ngoài"],
  ["Sản phẩm", "Các bản thảo chương và bản tổng hợp nhóm 138 trang; kịch bản thuyết trình"],
] })}
${h.caseBody([["problem","Vấn đề"],["role","Vai trò"],["vn","Pháp luật Việt Nam"],["intl","Liên hợp quốc và nước ngoài"],["method","Phương pháp"],["reasoning","Lập luận áp dụng"],["findings","Kết quả"],["reform","Kiến nghị"],["outputs","Sản phẩm"],["limits","Giới hạn"]], `

${h.sec("problem", "Vấn đề nghiên cứu",
  `<p>Luật Tư pháp người chưa thành niên 2024 nâng giới hạn thăm gặp và liên lạc cho phạm nhân từ đủ 14 đến dưới 18 tuổi. Nhưng giới hạn lớn hơn không cho biết một em thực sự trông cậy được bao nhiêu lần liên hệ. Điều đó còn phụ thuộc vào ai được coi là thân nhân, chi phí liên lạc, ai nghe cuộc gọi, điều gì xảy ra sau một vi phạm kỷ luật, và khiếu nại có được giải quyết trước khi lần gặp bị lỡ không còn ý nghĩa hay không.</p>
   <h3>Câu hỏi nghiên cứu</h3>
   <ol><li>Quyền, điều kiện và bảo đảm về liên hệ gia đình theo Luật Tư pháp người chưa thành niên 2024 và Luật Thi hành án hình sự 2025 là gì, và hai luật tương tác ra sao?</li>
   <li>So với nghĩa vụ và chuẩn mực Liên hợp quốc về quan hệ được bảo vệ, tính đều đặn, khả năng tiếp cận, quyền riêng tư, hạn chế và khắc phục thì thế nào?</li>
   <li>Những khoảng trống nào cần giải pháp lập pháp hoặc hành chính?</li></ol>`)}

${h.sec("role", "Vai trò của tôi",
  `<p>Tôi làm phần mở đầu và chương 1 cùng một thành viên khác: xác định đối tượng (phạm nhân đang chấp hành án từ đủ 14 đến dưới 18 tuổi, không gồm người bị tạm giam hay học sinh trường giáo dưỡng), câu hỏi nghiên cứu và khung pháp lý. Trong suốt dự án, tôi yêu cầu dùng nguồn gốc, trích dẫn chính xác, thuật ngữ thống nhất và nhận định không mạnh hơn nguồn. Tôi rà soát chương so sánh và phần kiến nghị do các thành viên khác được giao viết, và chuẩn bị kịch bản hỏi đáp bằng tiếng Anh cho một phần thuyết trình.</p>`,
  h.note("", "Công cụ AI hỗ trợ soạn thảo. Phần của tôi là định hướng, kiểm tra nguồn và chỉnh sửa."))}

${h.sec("vn", "Khung pháp luật Việt Nam",
  h.table(["", "Luật 2019 (Điều 76)", "Luật 2024 (Điều 166)"], [
    ["Thăm gặp trực tiếp", "Tối đa 3 lần/tháng, mỗi lần tối đa 3 giờ", "Tối đa 4 lần/tháng, mỗi lần tối đa 4 giờ; có thể kéo dài tới 24 giờ khi đủ điều kiện"],
    ["Điện thoại hoặc video trong nước", "Tối đa 4 lần/tháng, mỗi lần tối đa 10 phút", "Tối đa 4 lần/tháng, mỗi lần tối đa 15 phút; ngoại lệ cho trường hợp khẩn cấp"],
    ["Mức tối thiểu được bảo đảm", "Không quy định", "Không quy định"],
  ]) + `${h.quote("Mức trần cao hơn không tạo ra mức sàn có thể yêu cầu thực hiện.", "Case study tư pháp người chưa thành niên, nhận định trung tâm")}<p>Các con số đã được cải thiện, nhưng tất cả đều là mức tối đa. Nhận định trung tâm của dự án là <strong>mức trần cao hơn không tạo ra mức sàn có thể yêu cầu thực hiện</strong>. Luật chung năm 2025 và các thông tư vẫn điều chỉnh thư tín, chấp thuận người đến gặp, giám sát và khiếu nại, nên phải đọc hai luật cùng nhau.</p>`,
  h.note("", "Số liệu Điều 166 đã đối chiếu với văn bản chính thức của Chính phủ."))}

${h.sec("intl", "Chuẩn mực Liên hợp quốc và cách tiếp cận nước ngoài",
  `<p>Nhóm tách các nguồn theo hiệu lực pháp lý:</p>
   ${h.table(["Nguồn", "Hiệu lực", "Dùng cho"], [
     ["Công ước về Quyền trẻ em, Điều 37(c), 16", "Điều ước có giá trị ràng buộc", "Quyền liên hệ; quyền riêng tư"],
     ["Bình luận chung số 24, 14 và 25", "Giải thích có thẩm quyền", "Không tước liên hệ gia đình vì kỷ luật; lợi ích tốt nhất; trẻ em trong môi trường số"],
     ["Quy tắc Havana, Bắc Kinh và Nelson Mandela", "Chuẩn mực không ràng buộc", "Mốc chi tiết, ví dụ Quy tắc Havana 60: về nguyên tắc mỗi tuần, tối thiểu mỗi tháng"],
     ["Berlin, Anh và xứ Wales, Queensland, California", "Luật và tiêu chuẩn của bang, vùng nước ngoài", "Kỹ thuật lập pháp: mức sàn thăm gặp, quy tắc giám sát, liên hệ là quyền cơ bản, gọi điện miễn phí"],
   ])}
   <p>Bốn ví dụ nước ngoài được chọn có chủ đích vì mỗi ví dụ xử lý một khoảng trống của Việt Nam. Đây không phải mẫu đại diện và không phải bằng chứng các hệ thống đó vận hành tốt hơn trên thực tế.</p>`,
  h.note("", "Bản thảo của nhóm trích quy định thăm gặp của Berlin là §31; văn bản chính thức hiện hành đánh số là §47."))}

${h.sec("method", "Phương pháp so sánh: bảy tiêu chí",
  `<p>Thay vì mô tả lần lượt từng hệ thống, bài nghiên cứu đặt cùng bảy câu hỏi cho mọi nguồn và phân loại từng khoảng trống.</p>
   ${h.table(["Tiêu chí", "Câu hỏi"], [
     ["1. Quan hệ được bảo vệ", "Em được giữ liên hệ với những ai?"],
     ["2. Tần suất và thời lượng", "Bao lâu một lần, bao lâu mỗi lần, và có phần nào được bảo đảm không?"],
     ["3. Điều kiện thăm gặp", "Buổi gặp có riêng tư và thực sự tiếp cận được không?"],
     ["4. Phương thức và bảo đảm trên môi trường số", "Thư, điện thoại, video được quy định, chi trả và giám sát thế nào?"],
     ["5. Sự kiện gia đình đặc biệt", "Điều gì xảy ra khi người thân ốm nặng, qua đời hoặc sống ở nước ngoài?"],
     ["6. Hạn chế và kỷ luật", "Liên hệ có bị cắt như một hình thức phạt không?"],
     ["7. Khiếu nại và khắc phục", "Em có được khắc phục kịp thời, bảo mật không?"],
   ])}
   <p>Mỗi khoảng trống được gắn nhãn là <em>điểm chưa rõ nội tại</em> giữa hai văn bản Việt Nam, <em>độ lệch chuẩn mực</em> so với một chuẩn mực không ràng buộc, hoặc <em>rủi ro thực thi</em> cần dữ liệu để xác nhận. Không khoảng trống nào được trình bày như một vi phạm đã được chứng minh.</p>`)}

${h.sec("reasoning", "Lập luận áp dụng: quy định về vi phạm kỷ luật có áp dụng cho người chưa thành niên?",
  `<p>Luật chung năm 2025 (Điều 49(1)) giảm số lần thăm gặp sau khi vi phạm nội quy. Luật Tư pháp người chưa thành niên có chế độ liên hệ riêng (Điều 166) và quy định kỷ luật riêng (Điều 169(1)). Quy định nào điều chỉnh?</p>
   <div class="tree">
     <div class="q">Việc giảm thăm gặp theo luật chung có áp dụng cho phạm nhân dưới 18 tuổi không?</div>
     <div class="b"><b>Cách hiểu A: luật chuyên ngành loại trừ</b>Một văn bản giải thích hoặc thông tư có thể làm rõ.</div>
     <div class="b"><b>Cách hiểu B: quy định chung vẫn áp dụng</b>Thông tư không thể vô hiệu hóa luật, nên chính luật cần được sửa đổi.</div>
   </div>
   <p>Nhóm trình bày cả hai cách hiểu thay vì khẳng định một, và đề xuất bảo vệ mức liên hệ cơ bản trong cả hai trường hợp. Đây là vấn đề giải thích rút ra từ văn bản, không phải hồ sơ khách hàng.</p>
   <h3>Giám sát liên lạc điện thoại và video</h3>
   <p>Luật cho phép giám sát cuộc gọi. Dựa trên điều khoản về quyền riêng tư của Công ước về Quyền trẻ em và Bình luận chung số 25, bài nghiên cứu tách việc quan sát cuộc gọi với nghe nội dung, ghi âm, lưu giữ bản ghi và cho người khác truy cập, rồi đề xuất mô hình hai tầng: giám sát thông thường là mặc định, chỉ xem xét nội dung khi có rủi ro được ghi nhận và có kiểm soát thủ tục.</p>`,
  h.note("", "<b>Vì sao điều này quan trọng ngoài phạm vi trại giam.</b> Chính các phân biệt này (quan sát, ghi lại, lưu giữ, truy cập) là những gì pháp luật quyền riêng tư đặt ra cho mọi dịch vụ xử lý liên lạc của trẻ em. Phương pháp chuyển giao được; quy phạm thì không."))}

${h.sec("findings", "Kết quả chính",
  `<p>Nhóm đánh giá khung pháp lý <strong>tương thích một phần</strong> với tài liệu Liên hợp quốc. Luật mới tăng giới hạn và ghi nhận liên lạc bằng hình ảnh, âm thanh. Nhưng mức tối đa không có mức tối thiểu, liên lạc từ xa chỉ trong nước, chi phí, giám sát rộng, vị trí chưa rõ của người chăm sóc không phải thân nhân, thủ tục mỏng cho sự kiện gia đình khẩn cấp và khiếu nại chậm, mỗi yếu tố đều có thể làm giảm sự bảo vệ thực chất.</p>`)}

${h.sec("reform", "Kiến nghị",
  `<p>Bản thảo đề xuất tám nhóm giải pháp, sắp xếp theo thẩm quyền và chi phí:</p>
   <ol><li>Mức tối thiểu được bảo đảm dưới các giới hạn hằng tháng hiện có.</li><li>Không cắt giảm liên hệ cơ bản vì lý do kỷ luật.</li><li>Một nhóm rõ ràng cho người có ý nghĩa quan trọng với em nhưng không phải thân nhân.</li><li>Hỗ trợ chi phí liên lạc, kể cả cuộc gọi có bảo đảm với người thân ở nước ngoài.</li><li>Giám sát hai tầng, tương xứng.</li><li>Thông báo kịp thời sự kiện gia đình nghiêm trọng và quyết định về việc tạm rời trại có thể xem xét lại.</li><li>Khiếu nại nhanh, bảo mật, có biện pháp tạm thời.</li><li>Quy tắc rõ ràng cho dịch vụ liên lạc số.</li></ol>
   <p>Đây là đề xuất trong bản thảo của sinh viên, không phải cải cách đã được ban hành.</p>`)}

${h.sec("outputs", "Sản phẩm và bằng chứng",
  `<ul><li>Bản thảo phần mở đầu và chương 1, nhiều phiên bản</li><li>Bản thảo chương 4 về khoảng trống và kiến nghị</li><li>Bản tổng hợp của nhóm, 138 trang</li><li>Kịch bản thuyết trình hỏi đáp bằng tiếng Anh</li></ul>`)}

${h.sec("limits", "Giới hạn và suy ngẫm",
  `<p>Đây là nghiên cứu tại bàn: không phỏng vấn, không đến trại giam, không có dữ liệu về tần suất liên hệ thực tế. Số liệu chính thức năm 2023 có trước quy định năm 2026 nên không đo được tác động của chúng. Các quy định nước ngoài cần được kiểm tra lại theo từng phiên bản.</p>
   <p>Phương pháp mà dự án dựa vào: một quyền được ghi trong luật phải được lần theo tới thủ tục, chi phí, quyền tùy nghi và cơ chế khắc phục thì mới nói được nó có bảo vệ ai hay không.</p>`)}
`)}`,
    },

  }),
};
