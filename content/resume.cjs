// Harvard-style resume data, English and Vietnamese. One source for the Word/PDF resumes
// (scripts/build-resume.cjs) and the HTML CV page (build.mjs).
// Writing rules: no en dash or em dash; bullets = action + context/method + own contribution + result;
// nothing that is not in the CV, the dossiers or the user's own statements.
// Entry fields: org (bold, left), loc (right), role (italic, left), date (right), bullets.

const EMAIL = "hdmduyen.hcmulaw@gmail.com";
const PHONE = "(+84) 392 173 632";
const WEB = "jennyhoang-ul.github.io/hennyhoang-ul.github.io";

module.exports = {
  EMAIL, PHONE, WEB,
  en: {
    file: "Jenny_Hoang_Resume_EN",
    name: "Hoang Dao My Duyen (Jenny Hoang)",
    contact: ["Ho Chi Minh City", EMAIL, PHONE, WEB],
    sections: [
      { h: "Education", items: [
        { org: "Ho Chi Minh City University of Law", loc: "Ho Chi Minh City, Vietnam",
          role: "Bachelor of Laws and Bachelor of Business Administration (dual degree)", date: "Expected Sep 2027",
          bullets: [
            "Advanced Program taught in English. GPA: Law 3.7/4.0; Business Administration 3.8/4.0; top 5% of the Faculty; Merit-Based Scholarship in multiple semesters.",
            "University title for outstanding academic performance, 2024-2025 (Decision 1186/QĐ-ĐHL) and 2025-2026 (Decision 1791/QĐ-ĐHL); Youth Union Certificate of Merit for 2024 (Decision 152-QĐ/ĐTN).",
          ]},
        { org: "Le Hong Phong High School for the Gifted", loc: "Ho Chi Minh City, Vietnam",
          role: "Literature Honors Class", date: "Sep 2019 to May 2022",
          bullets: [
            "GPA 9.3/10 (top 5%); Merit Scholarship (top 10%) and Opportunity Scholarship (teacher-recommended) every semester; school representative, Wharton High School Investment Competition 2021.",
          ]},
      ]},
      { h: "Research Experience", lead: "Student Scientific Research Program, Ho Chi Minh City University of Law", items: [
        { org: "Personal Data Protection in the Collection of Electronic Evidence under the Criminal Procedure Laws of Selected Countries: Lessons for Vietnam",
          role: "Team Member, Project HS61", date: "2025 to 2026",
          bullets: [
            "Researched the personal-data safeguards that apply when authorities collect electronic evidence, comparing selected foreign criminal procedure laws with Vietnamese law.",
            "Project won Second Prize, Faculty-level Student Research Award (Decision 1044/QĐ-ĐHL, Oct 2025) and was graded Excellent at defense (Certificate 435/GCN-NCKHSV).",
          ]},
        { org: "Measures for Collecting Electronic Data Messages under the Laws of Selected Countries: Lessons for Vietnam",
          role: "Principal Investigator, Project DS92", date: "2024 to 2025",
          bullets: [
            "Led a student team comparing the legal measures used to collect electronic data messages in selected countries and in Vietnam.",
            "Defended the project and received a Good grade (Certificate 922/GCN-NCKHSV, Oct 2025).",
          ]},
        { org: "Protecting the Rights of Technology-Based Drivers in Contracts with Ride-Hailing Companies: Selected Countries and Reference Value for Vietnam",
          role: "Team Member", date: "2024",
          bullets: [
            "Researched contractual protection for ride-hailing drivers under the laws of selected countries and its relevance to Vietnam.",
            "Co-authored a paper published in the 2024 Young Scientists Conference proceedings, “Vietnam in the Context of Integration and Globalization”; Second Prize.",
          ]},
        { org: "Proof in Administrative Cases in Selected Countries and Reference Value for Vietnam",
          role: "Principal Investigator", date: "2023 to 2024",
          bullets: [
            "Led a comparative study of proof in administrative litigation in selected countries and what Vietnam could draw from it.",
            "Consolation Prize, Faculty-level Student Research Award; graded Excellent at defense.",
          ]},
      ]},
      { h: "Academic Projects", lead: "Course projects, Ho Chi Minh City University of Law", items: [
        { org: "CISG in Vietnamese Courts: Applicability, Recognition and the Risk of Homeward Interpretation",
          role: "Project Coordinator, Group 3, course on the International Sale of Goods", date: "Sep to Oct 2026",
          bullets: [
            "Coordinated a team study of how Vietnamese courts identify and apply the CISG, organizing the work into data, case analysis, a conditional risk forecast and recommendations.",
            "Designed a screening sequence that tests each judgment against CISG Articles 1, 2, 3, 6, 10 and 100 and Vietnamese conflict-of-laws rules before recording how the court treated the Convention.",
            "In the team’s sample of 197 judicial documents, 27 had a basis for applying the CISG and 2 applied it; argued that this shows a recognition gap rather than proof of homeward interpretation, and reframed the forecast accordingly.",
            "Specified, tested and debugged an AI-assisted Python/Streamlit research tool for PDF intake, guided screening, record storage, statistics and a training mode.",
          ]},
        { org: "Family Contact Rights of Juvenile Prisoners in Vietnam: National Law and UN Standards",
          role: "Project Coordinator, Group 7, course on Juvenile Justice", date: "Oct 2026",
          bullets: [
            "Coordinated a group study of visit and communication rights under the Law on Juvenile Justice 2024 and the Law on Execution of Criminal Judgments 2025.",
            "Co-drafted the introduction and legal framework, separating binding CRC obligations from General Comments 24 and 25 and from non-binding UN rules (Beijing, Havana, Mandela).",
            "Directed a seven-criterion comparison covering frequency, privacy, digital communication and monitoring, family emergencies, disciplinary limits and remedies.",
            "Reviewed the group’s findings on Berlin, England and Wales, Queensland and California and its eight reform proposals, compiled in a 138-page group draft.",
          ]},
      ]},
      { h: "Work Experience", items: [
        { org: "LVT Education Joint Stock Company", loc: "Ho Chi Minh City, Vietnam",
          role: "Legal and Human Resources Officer", date: "Sep 2022 to Apr 2024",
          bullets: [
            "Drafted and reviewed labor contracts, internal policies and corporate documents for compliance with Vietnamese labor law.",
            "Managed personnel records and onboarding, and advised management on employment-compliance issues.",
          ]},
      ]},
      { h: "Leadership and Activities", items: [
        { org: "Ho Chi Minh City University of Law", loc: "Ho Chi Minh City, Vietnam",
          role: "Academic Project Leader", date: "Sep 2022 to Present",
          bullets: ["Led student teams on course projects in Law and Business Administration: divided tasks, synthesized research and managed timelines."]},
        { org: "Maple Debate, Le Hong Phong High School Debate Club", loc: "Ho Chi Minh City, Vietnam",
          role: "President", date: "Aug 2019 to May 2023",
          bullets: [
            "Designed a training program for 40 members across two cohorts and coached 21 novices; members recorded 36 notable competition results.",
            "Built partnerships with Fulbright University Vietnam and the debate clubs of Gia Dinh, THPT THSP and Hue National School; co-chaired 3 workshops and The Amazing LHP Race (350+ attendees).",
            "Head of Organizing Board, MAPLE Novice Debating Championship 2021: planned the three-day tournament and allocated teams, debaters and adjudicators to rounds.",
            "Champion and Second Best Speaker, Fulbright Friendly Debate 2020 (Vietnamese league); Champion, NgheTinh Debate Open 2020; Top 10 Speakers, Southern Debate Open 2020; Top 20, Truong Teen 2020 regional final.",
          ]},
        { org: "AMPLE Project (non-profit)", loc: "Ho Chi Minh City, Vietnam",
          role: "Founder", date: "May to Aug 2022",
          bullets: [
            "Organized a two-day debate tournament for about 150 participants with specialists from Fulbright Debate Club; raised VND 35 million in sponsorship (total revenue about VND 68 million).",
            "Coordinated a five-day debate camp for about 100 participants, sponsored by Vietnam Airlines, Crimson and Nova College.",
          ]},
        { org: "The Shift", loc: "Ho Chi Minh City, Vietnam",
          role: "Founder", date: "Jul 2020 to May 2022",
          bullets: ["Designed the website and developed a series of law-focused content for students."]},
      ]},
      { h: "Skills and Interests", kv: [
        ["Legal research", "Doctrinal and comparative analysis; treaty applicability; coding judicial documents; Vietnamese, international and foreign primary sources."],
        ["Technical", "Python/Streamlit and GitHub (AI-assisted); Microsoft Excel and PowerPoint (MOS 950); financial modeling."],
        ["Languages", "Vietnamese (native); English (proficient; degree program taught in English)."],
        ["Interests", "Technology and data protection law; children’s rights; international trade law; debate."],
      ]},
    ],
  },

  vi: {
    file: "Jenny_Hoang_Resume_VI",
    name: "Hoàng Đào Mỹ Duyên (Jenny Hoang)",
    contact: ["TP. Hồ Chí Minh", EMAIL, PHONE, WEB],
    sections: [
      { h: "Học vấn", items: [
        { org: "Trường Đại học Luật TP. Hồ Chí Minh", loc: "TP. Hồ Chí Minh",
          role: "Cử nhân Luật và Cử nhân Quản trị kinh doanh (song bằng)", date: "Dự kiến 09/2027",
          bullets: [
            "Chương trình tiên tiến giảng dạy bằng tiếng Anh. GPA: Luật 3,7/4,0; Quản trị kinh doanh 3,8/4,0; thuộc nhóm 5% cao nhất của Khoa; học bổng khuyến khích học tập nhiều học kỳ.",
            "Danh hiệu học tập xuất sắc cấp Trường năm học 2024-2025 (QĐ 1186/QĐ-ĐHL) và 2025-2026 (QĐ 1791/QĐ-ĐHL); Giấy khen của Ban Chấp hành Đoàn Trường năm 2024 (QĐ 152-QĐ/ĐTN).",
          ]},
        { org: "Trường THPT chuyên Lê Hồng Phong", loc: "TP. Hồ Chí Minh",
          role: "Lớp chuyên Văn", date: "09/2019 đến 05/2022",
          bullets: [
            "GPA 9,3/10 (top 5%); học bổng khuyến khích (top 10%) và học bổng Opportunity (giáo viên đề cử) mọi học kỳ; đại diện trường tại Wharton High School Investment Competition 2021.",
          ]},
      ]},
      { h: "Kinh nghiệm nghiên cứu", lead: "Nghiên cứu khoa học sinh viên, Trường Đại học Luật TP. Hồ Chí Minh", items: [
        { org: "Bảo vệ dữ liệu cá nhân trong thu thập chứng cứ điện tử theo pháp luật tố tụng hình sự một số quốc gia và kinh nghiệm cho Việt Nam",
          role: "Thành viên, đề tài HS61", date: "2025 đến 2026",
          bullets: [
            "Nghiên cứu các bảo đảm về dữ liệu cá nhân khi cơ quan có thẩm quyền thu thập chứng cứ điện tử, đối chiếu pháp luật tố tụng hình sự của một số quốc gia với pháp luật Việt Nam.",
            "Đề tài đạt giải Nhì Nghiên cứu khoa học sinh viên cấp Khoa (Quyết định 1044/QĐ-ĐHL, 10/2025) và được nghiệm thu loại Xuất sắc (Giấy chứng nhận 435/GCN-NCKHSV).",
          ]},
        { org: "Biện pháp thu thập thông điệp dữ liệu điện tử theo pháp luật một số quốc gia và kinh nghiệm cho Việt Nam",
          role: "Chủ nhiệm đề tài, đề tài DS92", date: "2024 đến 2025",
          bullets: [
            "Dẫn dắt nhóm sinh viên so sánh các biện pháp pháp lý dùng để thu thập thông điệp dữ liệu điện tử ở một số quốc gia và ở Việt Nam.",
            "Bảo vệ đề tài và được nghiệm thu loại Tốt (Giấy chứng nhận 922/GCN-NCKHSV, 10/2025).",
          ]},
        { org: "Bảo vệ quyền của tài xế công nghệ trong hợp đồng với doanh nghiệp gọi xe theo pháp luật một số quốc gia và giá trị tham khảo cho Việt Nam",
          role: "Thành viên", date: "2024",
          bullets: [
            "Nghiên cứu cơ chế bảo vệ tài xế công nghệ trong quan hệ hợp đồng theo pháp luật một số quốc gia và khả năng áp dụng tại Việt Nam.",
            "Đồng tác giả bài viết đăng trong kỷ yếu Hội nghị Nhà khoa học trẻ 2024 “Việt Nam trong bối cảnh hội nhập và toàn cầu hóa”; giải Nhì.",
          ]},
        { org: "Chứng minh trong vụ án hành chính ở một số quốc gia và giá trị tham khảo cho Việt Nam",
          role: "Chủ nhiệm đề tài", date: "2023 đến 2024",
          bullets: [
            "Dẫn dắt nghiên cứu so sánh về chứng minh trong tố tụng hành chính ở một số quốc gia và những điểm Việt Nam có thể tham khảo.",
            "Giải Khuyến khích Nghiên cứu khoa học sinh viên cấp Khoa; nghiệm thu loại Xuất sắc.",
          ]},
      ]},
      { h: "Dự án học thuật", lead: "Dự án học phần, Trường Đại học Luật TP. Hồ Chí Minh", items: [
        { org: "CISG tại Tòa án Việt Nam: điều kiện áp dụng, mức độ nhận diện và nguy cơ giải thích theo nội luật",
          role: "Điều phối dự án, Nhóm 3, học phần Hợp đồng mua bán hàng hóa quốc tế", date: "09/2026 đến 10/2026",
          bullets: [
            "Điều phối nhóm nghiên cứu cách Tòa án Việt Nam nhận diện và áp dụng CISG, chia công việc thành bốn phần: dữ liệu, phân tích án, dự báo rủi ro có điều kiện và kiến nghị.",
            "Xây dựng quy trình sàng lọc từng bản án theo Điều 1, 2, 3, 6, 10 và 100 CISG cùng quy phạm xung đột của Việt Nam, trước khi ghi nhận cách Tòa án xử lý Công ước.",
            "Trong mẫu 197 văn bản tố tụng của nhóm, 27 hồ sơ có cơ sở áp dụng CISG và 2 hồ sơ thực sự áp dụng; lập luận rằng số liệu cho thấy khoảng trống nhận diện, chưa chứng minh xu hướng giải thích theo nội luật, và điều chỉnh phần dự báo theo đó.",
            "Đặc tả, kiểm thử và sửa lỗi một công cụ nghiên cứu Python/Streamlit xây dựng với AI hỗ trợ: nhập PDF, sàng lọc theo bước, lưu hồ sơ, thống kê và chế độ luyện tập.",
          ]},
        { org: "Quyền liên hệ gia đình của phạm nhân chưa thành niên tại Việt Nam: pháp luật quốc gia và chuẩn mực Liên hợp quốc",
          role: "Điều phối dự án, Nhóm 7, học phần Tư pháp người chưa thành niên", date: "10/2026",
          bullets: [
            "Điều phối nhóm nghiên cứu quyền gặp thân nhân và liên lạc theo Luật Tư pháp người chưa thành niên 2024 và Luật Thi hành án hình sự 2025.",
            "Đồng soạn phần mở đầu và khung pháp lý, tách nghĩa vụ ràng buộc theo CRC khỏi Bình luận chung số 24, 25 và các quy tắc không ràng buộc của Liên hợp quốc (Bắc Kinh, Havana, Mandela).",
            "Định hướng so sánh theo bảy tiêu chí: tần suất, quyền riêng tư, liên lạc điện tử và giám sát, tình huống gia đình khẩn cấp, hạn chế kỷ luật và cơ chế khắc phục.",
            "Rà soát kết quả so sánh của nhóm với Berlin, Anh và xứ Wales, Queensland, California cùng tám kiến nghị, tập hợp trong bản thảo nhóm 138 trang.",
          ]},
      ]},
      { h: "Kinh nghiệm làm việc", items: [
        { org: "Công ty Cổ phần Giáo dục LVT", loc: "TP. Hồ Chí Minh",
          role: "Chuyên viên Pháp chế và Nhân sự", date: "09/2022 đến 04/2024",
          bullets: [
            "Soạn thảo và rà soát hợp đồng lao động, quy chế nội bộ và văn bản doanh nghiệp, bảo đảm phù hợp pháp luật lao động Việt Nam.",
            "Quản lý hồ sơ nhân sự, tiếp nhận nhân viên mới và tư vấn cho ban lãnh đạo về các vấn đề tuân thủ lao động.",
          ]},
      ]},
      { h: "Hoạt động và vai trò dẫn dắt", items: [
        { org: "Trường Đại học Luật TP. Hồ Chí Minh", loc: "TP. Hồ Chí Minh",
          role: "Trưởng nhóm dự án học thuật", date: "09/2022 đến nay",
          bullets: ["Dẫn dắt nhóm sinh viên làm dự án học phần ngành Luật và Quản trị kinh doanh: phân công, tổng hợp nghiên cứu và quản lý tiến độ."]},
        { org: "Maple Debate, CLB Tranh biện THPT chuyên Lê Hồng Phong", loc: "TP. Hồ Chí Minh",
          role: "Chủ nhiệm", date: "08/2019 đến 05/2023",
          bullets: [
            "Xây dựng chương trình huấn luyện cho 40 thành viên qua hai khóa và trực tiếp kèm 21 thành viên mới; thành viên CLB đạt 36 thành tích thi đấu đáng chú ý.",
            "Thiết lập hợp tác với Đại học Fulbright Việt Nam và CLB tranh biện các trường Gia Định, THPT Thực hành Sư phạm, Quốc Học Huế; đồng chủ trì 3 workshop và The Amazing LHP Race (hơn 350 người tham dự).",
            "Trưởng Ban tổ chức MAPLE Novice Debating Championship 2021: lập kế hoạch cho giải đấu ba ngày và xếp cặp thi đấu cho các đội, tranh biện viên và giám khảo.",
            "Vô địch và Hùng biện viên xuất sắc thứ hai, Fulbright Friendly Debate 2020 (bảng tiếng Việt); Vô địch NgheTinh Debate Open 2020; Top 10 hùng biện Southern Debate Open 2020; Top 20 chung kết khu vực Trường Teen 2020.",
          ]},
        { org: "Dự án AMPLE (phi lợi nhuận)", loc: "TP. Hồ Chí Minh",
          role: "Người sáng lập", date: "05/2022 đến 08/2022",
          bullets: [
            "Tổ chức giải tranh biện hai ngày cho khoảng 150 người tham gia, phối hợp với chuyên gia CLB Tranh biện Fulbright; vận động 35 triệu đồng tài trợ (tổng doanh thu khoảng 68 triệu đồng).",
            "Điều phối trại tranh biện năm ngày cho khoảng 100 người tham gia, được Vietnam Airlines, Crimson và Nova College tài trợ.",
          ]},
        { org: "The Shift", loc: "TP. Hồ Chí Minh",
          role: "Người sáng lập", date: "07/2020 đến 05/2022",
          bullets: ["Thiết kế website và phát triển chuỗi nội dung về pháp luật cho học sinh, sinh viên."]},
      ]},
      { h: "Kỹ năng và mối quan tâm", kv: [
        ["Nghiên cứu pháp lý", "Phân tích quy phạm và so sánh pháp luật; điều kiện áp dụng điều ước; mã hóa văn bản tố tụng; nguồn luật gốc của Việt Nam, quốc tế và nước ngoài."],
        ["Công nghệ", "Python/Streamlit và GitHub (với AI hỗ trợ); Microsoft Excel, PowerPoint (MOS 950); mô hình tài chính."],
        ["Ngoại ngữ", "Tiếng Việt (bản ngữ); tiếng Anh (thành thạo; chương trình học bằng tiếng Anh)."],
        ["Quan tâm", "Pháp luật công nghệ và bảo vệ dữ liệu; quyền trẻ em; pháp luật thương mại quốc tế; tranh biện."],
      ]},
    ],
  },
};
