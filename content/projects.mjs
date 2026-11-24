// Every project in one place, both languages.
// Add an entry here and it appears on the Projects page (and on the home page if home: true).
//   no      catalogue number, in the order the work started (stays fixed when new work is added)
//   type    research | coursework | technology | ongoing   (drives the filter)
//   page    slug of a detail page, if the project has one (content in en.mjs / vi.mjs)
//   link    where the card points when there is no detail page ("" = no link)
//   art     artwork file in assets/art/ (original graphics made for this site, see assets/art/README.md)
// Writing rule: no en dash or em dash. Use "to", a comma or a colon.
export default [
  {
    id: "cisg", no: 7, period: "2026", sort: 2026.9, type: "coursework", home: true, page: "cisg",
    title: { en: "CISG in Vietnamese courts", vi: "CISG tại Tòa án Việt Nam" },
    kind: { en: "Course project", vi: "Dự án học phần" },
    role: { en: "Project coordinator", vi: "Điều phối dự án" },
    desc: {
      en: "We screened 197 judicial documents for whether the CISG should have applied, then checked what the courts actually wrote. 27 had a basis for it; 2 applied it.",
      vi: "Nhóm sàng lọc 197 văn bản tố tụng để xem CISG có cơ sở áp dụng hay không, rồi đối chiếu với những gì Tòa án thực sự viết. 27 hồ sơ có cơ sở; 2 hồ sơ áp dụng.",
    },
    method: { en: "Applicability screening, case coding, case analysis", vi: "Sàng lọc điều kiện áp dụng, mã hóa hồ sơ, phân tích án" },
    output: { en: "Slide deck, analysis drafts, screening tool", vi: "Slide, bản phân tích, công cụ sàng lọc" },
    alt: { en: "Four bars shrinking from 197 to 2, the team's screening funnel", vi: "Bốn thanh ngắn dần từ 197 xuống 2, phễu sàng lọc của nhóm" },
  },
  {
    id: "jcj", no: 9, period: "2026", sort: 2026.8, type: "coursework", home: true, page: "jcj",
    title: { en: "Juvenile prisoners' family contact", vi: "Quyền liên hệ gia đình của phạm nhân chưa thành niên" },
    kind: { en: "Course project", vi: "Dự án học phần" },
    role: { en: "Project coordinator; introduction and legal framework", vi: "Điều phối dự án; phần mở đầu và khung pháp lý" },
    desc: {
      en: "How the 2024 juvenile justice law and the 2025 sentence-execution law protect contact with family, compared on seven criteria with UN standards and four foreign approaches.",
      vi: "Luật Tư pháp người chưa thành niên 2024 và Luật Thi hành án hình sự 2025 bảo vệ việc liên hệ với gia đình đến đâu, so sánh theo bảy tiêu chí với chuẩn mực Liên hợp quốc và bốn cách tiếp cận nước ngoài.",
    },
    method: { en: "Doctrinal and comparative analysis", vi: "Phân tích quy phạm và so sánh pháp luật" },
    output: { en: "138-page group draft, eight reform proposals", vi: "Bản thảo nhóm 138 trang, tám kiến nghị" },
    alt: { en: "Hollow columns reaching a ceiling line above an empty dashed floor", vi: "Các cột rỗng chạm vạch trần, phía dưới là vạch sàn để trống" },
  },
  {
    id: "hs61", no: 6, period: "2025 to 2026", sort: 2026.5, type: "research", home: true, page: "hs61",
    title: { en: "Personal data in the collection of electronic evidence", vi: "Dữ liệu cá nhân trong thu thập chứng cứ điện tử" },
    kind: { en: "Student research", vi: "Nghiên cứu khoa học sinh viên" },
    role: { en: "Team member", vi: "Thành viên" },
    desc: {
      en: "Which safeguards for personal data apply when authorities collect electronic evidence in criminal cases, in selected countries and in Vietnam.",
      vi: "Những bảo đảm nào cho dữ liệu cá nhân được áp dụng khi cơ quan có thẩm quyền thu thập chứng cứ điện tử trong vụ án hình sự, ở một số quốc gia và ở Việt Nam.",
    },
    method: { en: "Comparative law", vi: "So sánh pháp luật" },
    output: {
      en: "Second Prize, faculty level; graded Excellent",
      vi: "Giải Nhì cấp Khoa; nghiệm thu Xuất sắc",
    },
    alt: { en: "A grid of data points, part of it covered by a solid block", vi: "Một lưới điểm dữ liệu, một phần bị che bởi khối màu" },
  },
  {
    id: "ds92", no: 5, period: "2024 to 2025", sort: 2025.5, type: "research", home: true, page: "ds92",
    title: { en: "Collecting electronic data messages", vi: "Thu thập thông điệp dữ liệu điện tử" },
    kind: { en: "Student research", vi: "Nghiên cứu khoa học sinh viên" },
    role: { en: "Principal investigator", vi: "Chủ nhiệm đề tài" },
    desc: {
      en: "What legal measures selected countries use to collect electronic data messages, and what Vietnam could take from them.",
      vi: "Một số quốc gia dùng những biện pháp pháp lý nào để thu thập thông điệp dữ liệu điện tử, và Việt Nam có thể tham khảo điều gì.",
    },
    method: { en: "Comparative law", vi: "So sánh pháp luật" },
    output: { en: "Graded Good, October 2025", vi: "Nghiệm thu loại Tốt, tháng 10/2025" },
    alt: { en: "Message shapes travelling along lines into one container", vi: "Các hình thông điệp đi theo đường thẳng vào một khối chứa" },
  },
  {
    id: "drivers", no: 4, period: "2024", sort: 2024.6, type: "research", home: true, page: "drivers",
    title: { en: "Ride-hailing drivers and their contracts", vi: "Tài xế công nghệ và hợp đồng gọi xe" },
    kind: { en: "Student research, published paper", vi: "Nghiên cứu khoa học sinh viên, bài đã công bố" },
    role: { en: "Team member, co-author", vi: "Thành viên, đồng tác giả" },
    desc: {
      en: "How selected countries protect drivers who work through ride-hailing platforms, and what that suggests for Vietnam.",
      vi: "Một số quốc gia bảo vệ tài xế làm việc qua nền tảng gọi xe như thế nào, và điều đó gợi ý gì cho Việt Nam.",
    },
    method: { en: "Comparative law", vi: "So sánh pháp luật" },
    output: {
      en: "Second Prize, 2024 Young Scientists Conference; published in the proceedings",
      vi: "Giải Nhì Hội nghị Nhà khoa học trẻ 2024; đăng trong kỷ yếu",
    },
    alt: { en: "A winding route with stops, crossed by two parallel lines", vi: "Một tuyến đường uốn lượn có các điểm dừng, cắt qua hai đường song song" },
  },
  {
    id: "admin", no: 3, period: "2023 to 2024", sort: 2024.4, type: "research", home: true, page: "admin",
    title: { en: "Proof in administrative cases", vi: "Chứng minh trong vụ án hành chính" },
    kind: { en: "Student research", vi: "Nghiên cứu khoa học sinh viên" },
    role: { en: "Principal investigator", vi: "Chủ nhiệm đề tài" },
    desc: {
      en: "My first project as principal investigator: how selected countries handle proof in administrative litigation, and what Vietnam could draw from them.",
      vi: "Đề tài đầu tiên tôi làm chủ nhiệm: một số quốc gia xử lý việc chứng minh trong tố tụng hành chính ra sao, và Việt Nam có thể tham khảo điều gì.",
    },
    method: { en: "Comparative law", vi: "So sánh pháp luật" },
    output: { en: "Consolation Prize, faculty level; graded Excellent", vi: "Giải Khuyến khích cấp Khoa; nghiệm thu Xuất sắc" },
    alt: { en: "A tilted balance beam with blocks on each side", vi: "Một cán cân nghiêng với các khối ở hai bên" },
  },
  {
    id: "tool", no: 8, period: "2026", sort: 2026.7, type: "technology", link: "cisg.html#tool",
    title: { en: "CISG case-screening tool", vi: "Công cụ sàng lọc hồ sơ CISG" },
    kind: { en: "Research tool", vi: "Công cụ nghiên cứu" },
    role: { en: "Specified, tested and debugged, with AI writing much of the code", vi: "Đặc tả, kiểm thử và sửa lỗi; phần lớn mã do AI hỗ trợ viết" },
    desc: {
      en: "Lets team members screen judgments step by step, keep their reasons, see totals and practise on finished cases. It stops and asks for human review when facts are missing.",
      vi: "Giúp thành viên nhóm sàng lọc bản án theo từng bước, lưu lý do, xem thống kê và luyện tập trên hồ sơ đã xong. Khi thiếu dữ kiện, công cụ dừng lại và yêu cầu người xem xét.",
    },
    method: { en: "Python and Streamlit, GitHub", vi: "Python và Streamlit, GitHub" },
    output: { en: "Working source code, October 2026", vi: "Mã nguồn hoạt động, tháng 10/2026" },
    alt: { en: "A window with tabs and a flow of steps that branches to a review box", vi: "Một cửa sổ có các thẻ và chuỗi bước rẽ nhánh sang ô xem xét" },
  },
  {
    id: "viac", no: 10, period: "2026", sort: 2026.95, type: "ongoing", link: "notes.html#viac",
    title: { en: "CISG in courts and in arbitration", vi: "CISG tại Tòa án và tại trọng tài" },
    kind: { en: "Article outline, in progress", vi: "Đề cương bài viết, đang làm" },
    role: { en: "Author", vi: "Tác giả" },
    desc: {
      en: "A follow-up to the CISG course project, asking whether arbitral tribunals in Vietnam treat the Convention differently from courts.",
      vi: "Nghiên cứu tiếp theo của dự án CISG: trọng tài tại Việt Nam có xử lý Công ước khác Tòa án hay không.",
    },
    method: { en: "Comparative case analysis", vi: "So sánh thực tiễn xét xử" },
    output: { en: "Outline, November 2026", vi: "Đề cương, tháng 11/2026" },
    alt: { en: "Two overlapping circles", vi: "Hai hình tròn giao nhau" },
  },
  {
    id: "childdata", no: 11, period: "2026", sort: 2026.96, type: "ongoing", link: "notes.html#children-data",
    title: { en: "Children's data in three legal systems", vi: "Dữ liệu trẻ em trong ba hệ thống pháp luật" },
    kind: { en: "Research notes, in progress", vi: "Ghi chú nghiên cứu, đang làm" },
    role: { en: "Author", vi: "Tác giả" },
    desc: {
      en: "Reading COPPA, Vietnam's 2025 Personal Data Protection Law and the GDPR side by side, to see when each applies to an app used by students.",
      vi: "Đọc song song COPPA, Luật Bảo vệ dữ liệu cá nhân 2025 và GDPR để xem khi nào mỗi luật áp dụng cho một ứng dụng học sinh, sinh viên dùng.",
    },
    method: { en: "Applicability analysis", vi: "Phân tích điều kiện áp dụng" },
    output: { en: "Notes in progress", vi: "Ghi chú đang viết" },
    alt: { en: "Three overlapping circles around a small dot", vi: "Ba hình tròn giao nhau quanh một chấm nhỏ" },
  },
  {
    id: "courses", no: 2, period: "2022 to now", sort: 2023.0, type: "coursework", link: "",
    title: { en: "Team projects across law and business courses", vi: "Dự án nhóm trong các học phần Luật và Quản trị kinh doanh" },
    kind: { en: "Coursework", vi: "Học phần" },
    role: { en: "Team leader", vi: "Trưởng nhóm" },
    desc: {
      en: "Since my first year I have usually led group assignments: dividing tasks, pulling the research together and keeping to deadlines.",
      vi: "Từ năm nhất, tôi thường làm trưởng nhóm các bài tập lớn: chia việc, tổng hợp nghiên cứu và giữ tiến độ.",
    },
    method: { en: "Coordination", vi: "Điều phối" },
    output: { en: "Group reports and presentations", vi: "Báo cáo và bài thuyết trình nhóm" },
    alt: { en: "A ring of small circles linked to one centre", vi: "Một vòng các chấm tròn nối về một tâm" },
  },
  {
    id: "shift", no: 1, period: "2020 to 2022", sort: 2021.0, type: "technology", link: "activities.html#shift",
    title: { en: "The Shift", vi: "The Shift" },
    kind: { en: "Student initiative, website", vi: "Dự án học sinh, website" },
    role: { en: "Founder", vi: "Người sáng lập" },
    desc: {
      en: "A website I designed in high school, with a content plan, new series and researched pieces on law for students.",
      vi: "Một website tôi thiết kế khi học phổ thông, với kế hoạch nội dung, các chuỗi bài mới và bài viết có nghiên cứu về pháp luật cho học sinh.",
    },
    method: { en: "Web design, content planning", vi: "Thiết kế web, lên kế hoạch nội dung" },
    output: { en: "Website and content series", vi: "Website và chuỗi nội dung" },
    alt: { en: "Stacked rectangles stepping to the right", vi: "Các hình chữ nhật xếp lệch dần sang phải" },
  },
];
