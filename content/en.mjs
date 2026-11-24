// English page content for Jenny Hoang's portfolio.
// Projects and activities live in projects.mjs and activities.mjs; the CV in resume.cjs.
// Writing rules: plain, specific, first person; no en dash or em dash (scripts/check.mjs fails the build).
// Keep the same section ids as vi.mjs.
const EMAIL = "hdmduyen.hcmulaw@gmail.com";

export default {
  htmlLang: "en",
  ogLocale: "en_US",
  ui: {
    nav: { home: "Home", projects: "Projects", activities: "Activities", about: "About", approach: "Approach", notes: "Research notes", writing: "Writing", cv: "CV", contact: "Contact" },
    navLabel: "Main", langLabel: "Language", skip: "Skip to content", onThisPage: "On this page",
    arch: { filterLabel: "Show", all: "All", research: "Student research", coursework: "Course projects", technology: "Tools and web", ongoing: "In progress" },
    back: "All projects", allProjects: "Back to all projects",
    home: "Home", homeLabel: "home", menu: "Menu",
    cvPdf: "Download PDF", cvPdfOther: "Vietnamese PDF",
    cvPdfNote: "PDF downloads are turned off in this preview.",
    cvDesc: "CV of Jenny Hoang (Hoang Dao My Duyen): education, research, academic projects, work, leadership and skills.",
    foot: "Ho Chi Minh City, Vietnam. Updated November 2026.",
  },
  pages: (h) => ({
    // ---------------------------------------------------------------- HOME
    index: {
      title: "Research portfolio",
      desc: "Jenny Hoang studies law and business in Ho Chi Minh City and does comparative legal research, most recently on data, evidence and technology.",
      body: `
<section class="hero" aria-labelledby="wm">${h.sky()}<div class="wrap">${h.stack()}
  <h1 class="wordmark" id="wm"><span>Jenny</span><span>Hoang</span></h1>
  <div class="hero-body"><div class="hero-card glass">
    <p class="lead">I study law and business in Ho Chi Minh City and do comparative legal research. Most of it takes a problem in Vietnamese law and asks how other systems handle it. Lately the problems have been about data, evidence and technology.</p>
    <ul class="hero-facts"><li>Fourth year, Ho Chi Minh City University of Law</li><li>Six research projects since 2023</li><li>Working in English and Vietnamese</li></ul>
    <div class="hero-cta">${h.btn("projects.html", "See the projects")}${h.go("cv.html", "Read the CV")}</div></div>
  </div>
</div></section>

${h.block("research", "Research", "Six projects from 2023 to 2026, newest first. Each one opens into a full write-up.",
  `${h.gallery()}<p class="more">${h.go("projects.html", "All 11 projects, including tools and work in progress")}</p>`)}

${h.block("themes", "What I work on", "The areas I have researched, the habits I bring to each project, and what I am reading now.",
  `<div class="themes">
    <div><h3>Areas</h3><ul class="plain"><li>International sale of goods (CISG)</li><li>Juvenile justice and children's rights</li><li>Electronic evidence and personal data</li><li>Platform work</li><li>Administrative litigation</li></ul></div>
    <div><h3>Habits</h3><ul class="plain"><li>Read the statute before the commentary</li><li>Compare systems on the same fixed questions</li><li>Code judgments and count with clear denominators</li><li>Set two readings of a rule side by side</li><li>Specify small research tools, built with AI help</li></ul></div>
    <div><h3>Reading now</h3><ul class="plain"><li>COPPA and FTC guidance</li><li>Vietnam's Personal Data Protection Law 2025</li><li>The GDPR on children and health data</li><li>Copyright questions around AI-generated work</li></ul></div>
  </div>
  <p class="more">${h.go("approach.html", "How I approach a research question")}</p>`, "blue")}

${h.block("involvement", "Beyond research", "A legal job during university, and years of organising debate that started in high school.",
  `<div class="split">
    <div class="callout"><p>Before research, most of my time went into debate: coaching 21 newcomers, running my school's club and organising a tournament for about 150 people.</p>${h.go("activities.html", "All activities")}</div>
    ${h.actPreview(["lvt", "maple", "ample", "shift", "youth"])}
  </div>`)}

${h.block("journey", "Four stages", "",
  `${h.phases([
     ["2019", "High school", "Literature honours class, debate, and a first website about law."],
     ["2022", "University and work", "A dual degree, a legal and HR job alongside it, and a first research project as principal investigator."],
     ["2024", "Comparative research", "Student research on platform work, electronic data and personal data."],
     ["2026", "Larger projects", "The CISG and juvenile justice projects, and a screening tool built for the first."],
   ])}
   <p class="more">${h.go("about.html", "Read the longer version")}</p>`)}

${h.block("contact", "Contact", "Email is the quickest way to reach me.",
  `<p class="contact-big"><a href="mailto:${EMAIL}">${EMAIL}</a></p>
   <div class="btns">${h.btn("cv.html", "Read the CV", true)}</div>`, "peach")}`,
    },

    // ---------------------------------------------------------------- PROJECTS
    projects: {
      title: "Projects",
      desc: "All projects by Jenny Hoang: student research, course projects, research tools and work in progress.",
      body: `<div class="wrap">
${h.row(`<h1>Projects</h1><p class="lead">Everything I have worked on since 2020, newest first. Student research and course projects open into full write-ups; the rest link to where they are discussed.</p>`)}
<section class="sec" id="archive" aria-label="Projects">${h.archive()}
<p class="meta">Student research projects are faculty-level team research at Ho Chi Minh City University of Law, defended before a panel and graded. Course projects are group assignments inside a course. Numbers follow the order in which the work started.</p></section>
</div>`,
    },

    // ---------------------------------------------------------------- ACTIVITIES
    activities: {
      title: "Activities",
      desc: "Work, leadership and debate activities of Jenny Hoang, from high school to now.",
      body: `<div class="wrap">
${h.row(`<h1>Activities</h1><p class="lead">Work, organising and debate, from high school to now. Most of it is debate. It is here because it is a large part of what I did, not because all of it leads to law.</p>`)}
${h.wsec("work", "Work", h.actList("work"))}
${h.wsec("lead", "Leading and organising", h.actList("lead"))}
${h.wsec("debate", "Debate", h.actList("debate"))}
${h.wsec("school", "School and recognition", h.actList("school") + h.actList("recognition"))}
</div>`,
    },

    // ---------------------------------------------------------------- ABOUT
    about: {
      title: "About",
      desc: "The longer version: what Jenny Hoang has done since high school, how her research developed, and what she is still learning.",
      body: `<div class="wrap">
${h.row(`<h1>About</h1><p class="lead">My full name is Hoàng Đào Mỹ Duyên, and I go by Jenny Hoang. I study law and business administration at Ho Chi Minh City University of Law, in a programme taught in English.</p>`)}
${h.sec("short", "The short version",
  `<p>I spent most of high school in competitive debate, first as a debater and then running my school's club. At university I worked in a legal and HR role alongside my studies and, from my second year, joined student research projects. Almost all of that research used the same method: take a concrete problem in Vietnamese law, look at how a few other countries deal with it, and work out what is worth borrowing and under which conditions.</p>
   <p>Over time the topics moved toward technology: from proof in administrative cases, to ride-hailing drivers' contracts, to collecting electronic data, to personal data in criminal evidence. In 2026 I coordinated two larger course projects, one of which needed a small piece of software.</p>`)}
${h.wsec("journey", "Journey", h.timeline([
     ["2019 to 2022", "Le Hong Phong High School for the Gifted", "Literature honours class, GPA 9.3/10. Merit scholarships every semester. Represented the school at Truong Teen 2020 and the Wharton High School Investment Competition 2021."],
     ["2019 to 2023", "Maple Debate", "Debater, then president of the school club. I wrote the training programme and coached 21 newcomers. Champion at Fulbright Friendly Debate 2020 (Vietnamese league) and NgheTinh Debate Open 2020."],
     ["2020 to 2022", "The Shift and AMPLE", "Two student initiatives I founded: a website with law content, and a debate tournament and camp for about 150 and 100 participants."],
     ["2022", "University", "Dual degree in Law and Business Administration, Advanced Program, at Ho Chi Minh City University of Law."],
     ["2022 to 2024", "LVT Education", "Legal and HR officer for about a year and a half: labour contracts, internal policies, personnel records."],
     ["2023 to 2024", "First project as principal investigator", "Proof in administrative cases. Consolation Prize at faculty level, graded Excellent."],
     ["2024", "Platform work", "Ride-hailing drivers' contracts. Second Prize at the Young Scientists Conference, published in the proceedings."],
     ["2024 to 2025", "Electronic data", "Measures for collecting electronic data messages, as principal investigator."],
     ["2024 to 2026", "Academic recognition", "University titles for outstanding academic performance in 2024-2025 and 2025-2026; a Youth Union certificate of merit for 2024."],
     ["2025 to 2026", "Personal data", "Personal data protection in the collection of electronic evidence. Second Prize at faculty level, graded Excellent."],
     ["2026", "CISG and juvenile justice", "Two course projects I coordinated, and a screening tool for the first one."],
     ["Now", "Technology and data law", "The direction I am testing in my research notes."],
   ]))}
${h.sec("y2026", "What changed in 2026",
  `<p>The two 2026 course projects were bigger than anything I had done before. In the CISG project, the numbers we collected did not support the conclusion our topic seemed to invite, and we had to choose between stretching the evidence and narrowing the claim. We narrowed the claim. In the same project I specified and tested a small research tool with AI help, which meant debugging Python and learning to use GitHub.</p>
   <p>In the juvenile justice project, finding the rules was the easy part. Keeping their legal force straight was harder: a treaty, a committee's interpretation, a non-binding UN standard and a foreign statute each do different work in an argument.</p>`)}
${h.sec("rules", "What I try to hold to",
  `<ul><li>Work out the conditions before the conclusion.</li><li>Say how strong a source is, as well as what it says.</li><li>When the evidence is thin, make the claim smaller.</li><li>Be clear about who did what, including where AI tools helped.</li></ul>
   <p>The clearest example is the turning point in the ${h.link("cisg", "CISG project")}. The ${h.link("approach", "approach page")} goes through the method step by step.</p>`)}
${h.sec("learning", "What I am still learning",
  `<p>I have not yet worked with United States or EU privacy law in a structured way, done compliance work on a software product, or run interviews or fieldwork. I can specify, test and debug code with AI help, but I would not call myself a software engineer. I have not settled on a long-term specialisation; technology and data law is what I am trying now.</p>`)}
</div>`,
    },

    // ---------------------------------------------------------------- APPROACH
    approach: {
      title: "Approach",
      desc: "How Jenny Hoang approaches a legal research question, with an example from her own projects at each step.",
      body: `<div class="wrap">
${h.row(`<h1>Approach</h1><p class="lead">The same sequence shows up in most of my projects. Each step has a real example, so you can check it against the work.</p>`)}
${h.wsec("steps", "Eight steps, each with an example", `<ol class="steps">
  <li><h3>Narrow the question</h3><p>The juvenile justice topic came down to one group (sentenced prisoners aged 14 to under 18) and one right (contact with family).</p></li>
  <li><h3>Find out whether the rule applies</h3><p>Before asking what courts did with the CISG, we checked, step by step, whether it should have applied at all.</p></li>
  <li><h3>Rank the sources</h3><p>A treaty, a committee's interpretation, a non-binding standard and a foreign statute carry different weight. I say which is which.</p></li>
  <li><h3>Compare on fixed questions</h3><p>Seven questions asked of every source in the juvenile justice project, and one comparative frame across all four student research projects.</p></li>
  <li><h3>Check the claim against the evidence</h3><p>25 of 27 judgments not mentioning the CISG measured recognition, not interpretation. We changed the claim.</p></li>
  <li><h3>Write down competing readings</h3><p>Two readings of the misconduct rule for young prisoners, each with its own fix.</p></li>
  <li><h3>Make it usable</h3><p>A screening tool for the CISG team; a list of reforms ordered by who can make them and what they cost.</p></li>
  <li><h3>Say what is still uncertain</h3><p>The CISG write-up states that 91 documents were never assessed for a foreign element, and that the sample is not national.</p></li>
</ol>`, h.note("", "I have used this on Vietnamese, international and some foreign law. I have not yet used it on United States or EU technology law, which is where I want to take it next."))}
</div>`,
    },

    // ---------------------------------------------------------------- NOTES
    notes: {
      title: "Research notes",
      desc: "Open research questions on children's data, CISG practice and product design.",
      body: `<div class="wrap">
${h.row(`<h1>Research notes</h1><p class="lead">Questions I am working through. Nothing here is a finished output or legal advice.</p>`)}
${h.sec("children-data", "When do children's data rules apply to a wellbeing app?",
  `<p>Three regimes may matter for an app offered worldwide and free to students in Vietnam:</p>
   ${h.table(["Regime", "What I need to check first"], [
     ["COPPA Rule (United States), amended 2025, compliance date 22 April 2026", "Is the service directed to children under 13, or does the operator know it collects their data?"],
     ["Personal Data Protection Law No. 91/2025/QH15 (Vietnam), in force since 1 January 2026", "How children's data and sensitive data are handled, and what a transfer abroad requires."],
     ["GDPR (EU)", "Whether the service targets or monitors people in the EU, and the age of consent in each member state."],
   ])}
   <p>The plan is to compare them on fixed questions, as in the juvenile justice project: age threshold, legal basis, parental consent, sensitive data, transfers abroad, deletion and retention.</p>`,
  h.note("", "Status: reading the primary texts. No conclusions yet."))}
${h.sec("viac", "The CISG in courts and in arbitration",
  `<p>A follow-up to the course project: do arbitral tribunals in Vietnam recognise and interpret the CISG differently from courts? I am working on an outline for a journal article, separate from the group's work.</p>`,
  h.note("", "Status: outline, November 2026."))}
${h.sec("streaks", "When does a streak become a dark pattern?",
  `<p>Wellbeing apps use streaks and rewards to build habits, and regulators in the United States and the EU have called some design practices manipulative. Where the line sits is partly a legal question and partly a question for behavioural science, so it is one I would want to work on with people from that field.</p>`,
  h.note("", "Status: open question."))}
</div>`,
    },

    // ---------------------------------------------------------------- WRITING
    writing: {
      title: "Writing",
      desc: "Research outputs by Jenny Hoang, each labelled by what it actually is.",
      body: `<div class="wrap">
${h.row(`<h1>Writing</h1><p class="lead">Research outputs, labelled by what they are. Coursework is listed as coursework.</p>`)}
${h.sec("published", "Published",
  `<ul class="entries"><li class="entry"><h3>${h.link("drivers", "Protecting the rights of technology-based drivers in contracts with ride-hailing companies")}</h3><p class="meta">2024 / co-author / conference proceedings, "Vietnam in the Context of Integration and Globalization"</p><p>Second Prize at the 2024 Young Scientists Conference.</p></li></ul>`)}
${h.sec("research", "Student research reports, defended",
  `<ul class="entries">
   <li class="entry"><h3>${h.link("hs61", "Personal data protection in the collection of electronic evidence")}</h3><p class="meta">2025 to 2026 / team member / graded Excellent</p></li>
   <li class="entry"><h3>${h.link("ds92", "Measures for collecting electronic data messages")}</h3><p class="meta">2024 to 2025 / principal investigator / graded Good</p></li>
   <li class="entry"><h3>${h.link("admin", "Proof in administrative cases in selected countries")}</h3><p class="meta">2023 to 2024 / principal investigator / graded Excellent</p></li>
  </ul>`)}
${h.sec("coursework", "Coursework",
  `<ul class="entries">
   <li class="entry"><h3>${h.link("cisg", "CISG in Vietnamese courts")}</h3><p class="meta">2026 / group slide deck and analysis drafts</p></li>
   <li class="entry"><h3>${h.link("jcj", "Juvenile prisoners' family contact")}</h3><p class="meta">2026 / 138-page group draft</p></li>
  </ul>`)}
${h.sec("progress", "In progress",
  `<ul class="entries"><li class="entry"><h3>${h.link("notes", "The CISG in Vietnamese courts and arbitration")}</h3><p class="meta">Journal article outline, in progress</p></li><li class="entry"><h3>${h.link("notes", "Children's data in three legal systems")}</h3><p class="meta">Research notes, in progress</p></li></ul>`)}
</div>`,
    },

    // ---------------------------------------------------------------- CONTACT
    contact: {
      title: "Contact",
      desc: "How to contact Jenny Hoang and where to find her CV.",
      body: `<div class="wrap">
${h.row(`<h1>Contact</h1><p class="lead">Email is the quickest way to reach me. I am in Ho Chi Minh City (UTC+7).</p>`)}
${h.wsec("email", "Email",
  `<p class="contact-big"><a href="mailto:${EMAIL}">${EMAIL}</a></p>`,
  h.note("", "If the link does not open your mail app, copy the address."))}
${h.sec("cv", "CV",
  `<p>${h.link("cv", "Read the CV on this site")}${h.ARTIFACT ? "." : `, or download it as a PDF in ${h.cv("en", "English")} or ${h.cv("vi", "Vietnamese")}.`}</p>`)}
</div>`,
    },

    // ---------------------------------------------------------------- RESEARCH PROJECT PAGES
    hs61: {
      title: "Personal data in electronic evidence",
      desc: "Student research project HS61: personal data safeguards in the collection of electronic evidence, compared across selected countries and Vietnam.",
      body: `${h.caseHero({ id: "hs61", kicker: "Student research, 2025 to 2026", title: "Personal data in the collection of electronic evidence", lede: "A faculty research project on the safeguards that should protect personal data when investigators collect electronic evidence in criminal cases, comparing the criminal procedure laws of selected countries with Vietnam's.", meta: [
  ["Programme", "Student Scientific Research, Ho Chi Minh City University of Law, project HS61"],
  ["Period", "2025 to 2026"],
  ["My role", "Team member"],
  ["Method", "Comparative legal analysis"],
  ["Result", "Second Prize, faculty level; graded Excellent at defence"],
] })}
${h.caseBody([["question", "Question"], ["role", "My role"], ["method", "Method"], ["result", "Result"], ["related", "Related work"]], `
${h.sec("question", "The question",
  `<p>Electronic evidence rarely holds only what an investigation needs. A phone or an online account carries messages, photos and contacts, many of them about people who have nothing to do with the case. The project asked what limits and safeguards criminal procedure law places on collecting that material, and what Vietnam could take from the rules of selected countries.</p>`)}
${h.sec("role", "My role",
  `<p>I was a member of the research team; another student led the project as principal investigator.</p>`)}
${h.sec("method", "Method",
  `<p>Comparative legal analysis: the criminal procedure rules of selected countries were read against Vietnamese law, and lessons for Vietnam were drawn from the comparison. It used the same comparative frame as my other student research projects.</p>`)}
${h.sec("result", "Result",
  `<ul><li>Second Prize, Faculty-level Student Research Award (Decision 1044/QĐ-ĐHL, October 2025).</li><li>Graded Excellent at defence (Certificate 435/GCN-NCKHSV).</li></ul>`)}
${h.sec("related", "Related work",
  `<p>The year before, I led ${h.link("ds92", "project DS92")} on collecting electronic data messages. Personal data is also the subject of my current ${h.link("notes", "research notes")} on children's data.</p>`)}
`)}`,
    },

    ds92: {
      title: "Collecting electronic data messages",
      desc: "Student research project DS92, led by Jenny Hoang: legal measures for collecting electronic data messages in selected countries and Vietnam.",
      body: `${h.caseHero({ id: "ds92", kicker: "Student research, 2024 to 2025", title: "Collecting electronic data messages", lede: "A faculty research project I led on the legal measures used to collect electronic data messages, such as emails and chat messages, in selected countries, and what Vietnam could take from them.", meta: [
  ["Programme", "Student Scientific Research, Ho Chi Minh City University of Law, project DS92"],
  ["Period", "2024 to 2025"],
  ["My role", "Principal investigator"],
  ["Method", "Comparative legal analysis"],
  ["Result", "Graded Good at defence, October 2025"],
] })}
${h.caseBody([["question", "Question"], ["role", "My role"], ["method", "Method"], ["result", "Result"], ["related", "Related work"]], `
${h.sec("question", "The question",
  `<p>Vietnamese procedural law accepts electronic data as a source of evidence, but collecting it raises questions that paper evidence does not: who may collect it, by which measure, and how its integrity is kept. The project compared the measures selected countries use for this and asked what Vietnam could adopt.</p>`)}
${h.sec("role", "My role",
  `<p>I led the student team as principal investigator, from the research plan to the defence.</p>`)}
${h.sec("method", "Method",
  `<p>Comparative legal analysis of the collection measures in selected countries, read against Vietnamese law, with recommendations drawn from the comparison.</p>`)}
${h.sec("result", "Result",
  `<ul><li>Graded Good at defence (Certificate 922/GCN-NCKHSV, October 2025).</li></ul>`)}
${h.sec("related", "Related work",
  `<p>The following year I joined ${h.link("hs61", "project HS61")}, on protecting personal data when electronic evidence is collected.</p>`)}
`)}`,
    },

    drivers: {
      title: "Ride-hailing drivers and their contracts",
      desc: "Student research on the contractual protection of ride-hailing drivers in selected countries and its reference value for Vietnam; published in conference proceedings.",
      body: `${h.caseHero({ id: "drivers", kicker: "Student research, 2024", title: "Ride-hailing drivers and their contracts", lede: "Team research on how selected countries protect drivers who work through ride-hailing platforms under contract, and what their approaches offer Vietnam. The paper was published in the conference proceedings.", meta: [
  ["Setting", "Young Scientists Conference 2024"],
  ["Period", "2024"],
  ["My role", "Team member, co-author"],
  ["Method", "Comparative legal analysis"],
  ["Result", "Second Prize; published in the proceedings"],
] })}
${h.caseBody([["question", "Question"], ["role", "My role"], ["method", "Method"], ["result", "Result"]], `
${h.sec("question", "The question",
  `<p>Drivers on ride-hailing platforms work under contracts written by the platform, and whether they are treated as employees, partners or something in between decides which protections they get. The project looked at how selected countries answer that question and what reference value their answers have for Vietnam.</p>`)}
${h.sec("role", "My role",
  `<p>I was a member of the research team and a co-author of the paper.</p>`)}
${h.sec("method", "Method",
  `<p>Comparative legal analysis of how selected countries regulate the contractual relationship between drivers and ride-hailing companies, read against Vietnamese law.</p>`)}
${h.sec("result", "Result and publication",
  `<ul><li>Second Prize, 2024 Young Scientists Conference.</li><li>Published in the conference proceedings, "Vietnam in the Context of Integration and Globalization".</li></ul>
   <p>It is listed with my other outputs on the ${h.link("writing", "writing page")}.</p>`)}
`)}`,
    },

    admin: {
      title: "Proof in administrative cases",
      desc: "Jenny Hoang's first student research project as principal investigator: proof in administrative litigation in selected countries and its reference value for Vietnam.",
      body: `${h.caseHero({ id: "admin", kicker: "Student research, 2023 to 2024", title: "Proof in administrative cases", lede: "My first project as principal investigator: a comparative study of proof in administrative litigation in selected countries, and its reference value for Vietnam.", meta: [
  ["Programme", "Student Scientific Research, Ho Chi Minh City University of Law"],
  ["Period", "2023 to 2024"],
  ["My role", "Principal investigator"],
  ["Method", "Comparative legal analysis"],
  ["Result", "Consolation Prize, faculty level; graded Excellent at defence"],
] })}
${h.caseBody([["question", "Question"], ["role", "My role"], ["method", "Method"], ["result", "Result"], ["related", "Related work"]], `
${h.sec("question", "The question",
  `<p>In an administrative case, a person challenges a decision of the state, and the state usually holds most of the relevant documents. How the task of proving is shared between the parties, and how far the court gathers evidence itself, shapes whether that person can win at all. The project compared how selected countries handle this.</p>`)}
${h.sec("role", "My role",
  `<p>I led the student team as principal investigator. It was my first research project in that role.</p>`)}
${h.sec("method", "Method",
  `<p>Comparative legal analysis of the rules on proof in administrative litigation in selected countries, read against Vietnamese law.</p>`)}
${h.sec("result", "Result",
  `<ul><li>Consolation Prize, Faculty-level Student Research Award.</li><li>Graded Excellent at defence.</li></ul>`)}
${h.sec("related", "Related work",
  `<p>It was the first of my four student research projects. The next three were on ${h.link("drivers", "platform work")}, ${h.link("ds92", "electronic data messages")} and ${h.link("hs61", "personal data in electronic evidence")}.</p>`)}
`)}`,
    },

    cisg: {
      title: "CISG case study",
      desc: "How a team screened 197 Vietnamese judicial documents for CISG applicability and why the result showed a recognition gap rather than proof of homeward interpretation.",
      body: `${h.caseHero({ id: "cisg", kicker: "Course project, September to October 2026", title: `When the law applies but the judgment does not mention it`, lede: `A course project on how Vietnamese courts identify and apply the UN Convention on Contracts for the International Sale of Goods (CISG), and what our evidence could and could not say about "homeward" interpretation.`, meta: [
  ["Setting", "Group 3, course on Contracts for the International Sale of Goods (class CLCQTL47B), Ho Chi Minh City University of Law"],
  ["Period", "September to October 2026"],
  ["My role", "Project coordinator: research direction, screening framework, case analysis, presentation structure; specified and tested the research tool"],
  ["Methods", "Treaty applicability analysis, conflict-of-laws reasoning, coding of judicial documents, case analysis, conditional forecasting"],
  ["Outputs", "Group slide deck, analytical drafts (parts 3 and 4), Python/Streamlit screening tool"],
] })}
${h.caseBody([["problem","Problem"],["role","My role"],["method","Method"],["evidence","Evidence"],["reasoning","Legal reasoning"],["turn","Turning point"],["tool","Research tool"],["outputs","Outputs"],["skills","Skills"],["limits","Limits"]], `

${h.sec("problem", "The research problem",
  `<p>A dispute with a foreign party does not automatically fall under the CISG. Article 1 turns on where the parties have their places of business, whether those states are Contracting States at the relevant time or conflict-of-laws rules lead to one, what is being sold and whether the parties excluded the Convention. And even when the CISG is a relevant source, a court may apply it, cite it, consider and reject it, or not mention it at all.</p>
   <p>Our topic asked about "homeward trend": interpreting the Convention through domestic-law concepts instead of autonomously, as Article 7 requires. That question only makes sense once a court has recognised the CISG in the first place.</p>
   <h3>Research questions</h3>
   <ol><li>How should a Vietnamese "foreign-element" dispute be distinguished from an international sale under CISG Article 1?</li>
   <li>How can each case be checked for CISG applicability with objective, repeatable steps?</li>
   <li>Where the CISG was applicable, did the court apply it, cite it, reject it or ignore it?</li>
   <li>Is the pattern evidence of homeward interpretation, or of something earlier: not recognising the Convention?</li></ol>`)}

${h.sec("role", "My role",
  `<p>I organised the project into four linked parts for a 30-minute presentation: theory and data; case analysis and the homeward test; mechanisms and a conditional forecast; and recommendations. I asked for a screening method grounded in each legal condition, set requirements for the team's statistics work (case versus document level, correct denominators, missing data, a codebook), and directed the revision of part 3 when the data did not support our original framing.</p>
   <p>The dataset, slides and analysis are team outputs. I do not claim to have reviewed every document myself.</p>`)}

${h.sec("method", "Method: a screening sequence",
  `<p>Rather than searching judgments for the word "CISG", we tested each document in order and recorded the reason at every step:</p>
   <ol class="steps">
    <li><div><h3>Foreign element</h3><p>Does Vietnamese law treat the dispute as having a foreign element? A first filter only.</p></div></li>
    <li><div><h3>Places of business</h3><p>Are the relevant places of business in different states (Articles 1 and 10)?</p></div></li>
    <li><div><h3>Route and time</h3><p>Direct application under Article 1(1)(a), or via conflict-of-laws rules under 1(1)(b); Contracting State status on the relevant date (Article 100).</p></div></li>
    <li><div><h3>Scope</h3><p>Excluded goods (Article 2) and mixed or manufacturing contracts (Article 3).</p></div></li>
    <li><div><h3>Exclusion</h3><p>Did the parties opt out (Article 6)? Choosing Vietnamese law is not automatically an opt-out.</p></div></li>
    <li><div><h3>Issue and court treatment</h3><p>Is the disputed issue governed by the Convention? Only then: how did the court actually treat it?</p></div></li>
   </ol>
   <p>The key design choice was to keep <em>our</em> conclusion about applicability separate from <em>what the court wrote</em>.</p>`)}

${h.sec("evidence", "Working with the evidence",
  `<div class="funnel" role="img" aria-label="197 documents collected, 58 with a foreign element, 27 with a basis to consider the CISG, 2 with substantive application">
    <div class="f-row"><div class="f-l">Judicial documents collected by the team</div><div class="f-track"><div class="f-bar" style="width:100%"></div></div><div class="f-n">197</div></div>
    <div class="f-row"><div class="f-l">Foreign element recorded</div><div class="f-track"><div class="f-bar" style="width:29.4%"></div></div><div class="f-n">58</div></div>
    <div class="f-row"><div class="f-l">Basis to consider the CISG</div><div class="f-track"><div class="f-bar" style="width:13.7%"></div></div><div class="f-n">27</div></div>
    <div class="f-row"><div class="f-l">Applied it</div><div class="f-track"><div class="f-bar" style="width:1.0%"></div></div><div class="f-n">2</div></div>
   </div>
   <p class="small">Bars are drawn to scale against the 197 documents collected.</p>
   <p>Of the 27 relevant documents, 25 did not mention the Convention. 18 fell under the direct route of Article 1(1)(a), and 24 were pure sales contracts. In the 16 documents that were both, 14 still did not mention the CISG, so the gap cannot be explained only by difficult conflict-of-laws questions or hard-to-classify contracts.</p>`,
  `${h.note("", "Figures from the team's analysis draft, early October 2026.")}
   ${h.note("", "<b>Read with care.</b> This is the team's coded sample, not all Vietnamese courts. 91 documents were excluded earlier and never assessed for a foreign element.")}`)}

${h.sec("reasoning", "Legal reasoning in practice",
  `<h3>Domestic law in the reasoning is not automatically wrong</h3>
   <p>In a Binh Duong judgment the court applied the CISG to payment and interest but used Vietnamese law to set the interest rate. Article 78 gives a right to interest without fixing a rate, so turning to another source is not itself an error. The real question is whether the court followed Article 7(2): general principles of the Convention first, then the applicable national law. We treated this as an open question, not as proof of a homeward trend.</p>
   <h3>Procedural context changes what a citation proves</h3>
   <p>A Hai Phong decision cited the CISG while deciding whether to recognise a foreign arbitral award. A court reviewing an award is not deciding the contract on the merits, so that citation shows awareness of the Convention but says little about how merits courts interpret it.</p>`)}

${h.sec("turn", "The turning point",
  `${h.quote("“The court did not mention the CISG” and “the court interpreted the CISG through domestic concepts” are different events.", "CISG case study, the turning point")}<p>It would have been easy to divide 25 by 27 and call it a measure of homeward interpretation. But "the court did not mention the CISG" and "the court interpreted the CISG through domestic concepts" are different events. Two cases of actual application cannot show a stable interpretive trend.</p>
   <p>So we changed the claim. The finding became a <strong>gap between applicability and recognition</strong>. Part 3 turned into a conditional forecast along two variables: how often courts recognise the CISG, and how well they interpret it autonomously. The highest-risk scenario is not courts ignoring the Convention, but recognition rising faster than the ability to interpret it correctly.</p>`)}

${h.sec("tool", "From research to a research tool",
  `<p>To keep seven people screening the same way, I specified a small web application and built it iteratively with AI coding assistance, in Python and Streamlit, through GitHub. The version I inspected has four tabs:</p>
   <ul><li><strong>Screening:</strong> upload PDFs (exact duplicates are caught by file hash), walk through the legal steps, and save each answer with its reasoning.</li>
   <li><strong>Records:</strong> review, edit and manage the shared case records.</li>
   <li><strong>Statistics:</strong> aggregate the coded records.</li>
   <li><strong>Practice:</strong> re-screen a finished case and be stopped at the first step that differs from the team's answer; practice answers never touch the research data.</li></ul>
   <p>One rule I insisted on: the conflict-of-laws helper suggests an applicable law only when the facts it needs are recorded. If they are missing, it stops and asks for human review, because a missing fact must not silently become a "no".</p>
   <p>My part was the legal logic, the requirements, integrating and editing code, and testing and reporting real errors (syntax, indentation and type errors) until they were fixed. Much of the code itself was written with AI assistance.</p>`)}

${h.sec("outputs", "Outputs and evidence",
  h.table(["Output", "What it shows"], [
    ["Group 3 slide deck", "Research flow, 197 to 58 to 27 to 2, and the homeward analysis"],
    ["Analytical drafts, parts 3 and 4", "Case analysis, data tables, conditional scenarios"],
    ["Screening tool source code", "Four tabs, a guarded conflict-of-laws helper, practice mode"],
    ["Statistics brief for the team", "Codebook, denominators, missing-data rules"],
    ["Follow-up outline: courts and arbitration", "A separate study, in progress"],
  ]))}

${h.sec("skills", "What it demonstrates, and what I developed",
  `<p><strong>Demonstrated:</strong> applicability analysis of a treaty, case analysis that looks at reasoning rather than outcomes, disciplined use of data, and coordinating a team's research.</p>
   <p><strong>Developed during the project:</strong> turning legal rules into a decision sequence someone else can follow, reading error messages and fixing code with AI help, and presenting a narrow finding clearly.</p>
   <p><strong>Not shown by this project:</strong> expertise in privacy law, product compliance or software engineering.</p>`)}

${h.sec("limits", "Limitations and further questions",
  `<ul><li>The sample is the team's collection, not a representative national dataset.</li><li>Our legal coding has not been audited by anyone outside the team.</li></ul>
   <p>The question I would pursue next is whether arbitral tribunals in Vietnam handle the CISG differently from courts; I am drafting an outline for that in my ${h.link("notes", "research notes")}.</p>`)}
`)}`,
    },

    // ---------------------------------------------------------------- JCJ
    jcj: {
      title: "Juvenile justice case study",
      desc: "A seven-criterion comparison of Vietnamese law on juvenile prisoners' family contact with UN standards and four foreign approaches.",
      body: `${h.caseHero({ id: "jcj", kicker: "Course project, October 2026", title: `A higher ceiling is not a guaranteed floor`, lede: `A course project asking whether children serving prison sentences in Vietnam can rely on regular, accessible and protected contact with their families, measured against UN standards.`, meta: [
  ["Setting", "Group 7, course on Juvenile Justice, Faculty of Criminal Law, Ho Chi Minh City University of Law"],
  ["Period", "October 2026"],
  ["My role", "Project coordinator; co-author of the introduction and legal framework; reviewer of the comparison and recommendations"],
  ["Methods", "Doctrinal analysis, historical comparison, comparison with UN standards, selective functional comparison with foreign law"],
  ["Outputs", "Chapter drafts and a 138-page assembled group draft; presentation script"],
] })}
${h.caseBody([["problem","Problem"],["role","My role"],["vn","Vietnamese law"],["intl","UN and foreign law"],["method","Method"],["reasoning","Applied reasoning"],["findings","Findings"],["reform","Recommendations"],["outputs","Outputs"],["limits","Limits"]], `

${h.sec("problem", "The research problem",
  `<p>Vietnam's 2024 Law on Juvenile Justice raised the limits on family visits and calls for prisoners aged 14 to under 18. But a larger allowance does not tell you how much contact a child can actually count on. That depends on who counts as family, what the calls cost, who listens, what happens after a disciplinary breach, and whether a complaint can be resolved before the missed visit stops mattering.</p>
   <h3>Research questions</h3>
   <ol><li>What entitlements, conditions and safeguards govern family contact under the 2024 juvenile justice law and the 2025 law on execution of criminal judgments, and how do the two interact?</li>
   <li>How does this compare with UN obligations and standards on relationships, regularity, access, privacy, restrictions and remedies?</li>
   <li>Which gaps justify legislative or administrative responses?</li></ol>`)}

${h.sec("role", "My role",
  `<p>I worked on the introduction and first chapter with another team member: defining the population (sentenced prisoners aged 14 to under 18, not pre-trial detainees or reformatory pupils), the research questions and the legal framework. Across the project I pushed for primary sources, exact citations, consistent terms, and claims no stronger than their sources. I reviewed the comparative chapter and the recommendations, which other members were assigned to draft, and prepared an English question-and-answer script for part of the presentation.</p>`,
  h.note("", "AI tools helped with drafting. My part was direction, checking sources and revision."))}

${h.sec("vn", "Vietnamese legal framework",
  h.table(["", "2019 law (Article 76)", "2024 law (Article 166)"], [
    ["In-person visits", "At most 3 a month, up to 3 hours each", "At most 4 a month, up to 4 hours each; may extend to 24 hours under conditions"],
    ["Phone or video contact in Vietnam", "At most 4 calls a month, up to 10 minutes", "At most 4 a month, up to 15 minutes; urgent-case exception"],
    ["Guaranteed minimum", "None stated", "None stated"],
  ]) + `${h.quote("A higher ceiling does not create an enforceable floor.", "Juvenile justice case study, the central observation")}<p>The figures improved, but every one of them is a maximum. The project's central observation is that <strong>a higher ceiling does not create an enforceable floor</strong>. The 2025 general law and its circulars still govern letters, visitor approval, supervision and complaints, so the two laws have to be read together.</p>`,
  h.note("", "Article 166 figures checked against the official government text."))}

${h.sec("intl", "UN standards and foreign approaches",
  `<p>We kept sources apart by legal force:</p>
   ${h.table(["Source", "Legal force", "Used for"], [
     ["Convention on the Rights of the Child, Art. 37(c), 16", "Binding treaty", "Right to contact; privacy"],
     ["General Comments No. 24, 14 and 25", "Authoritative interpretation", "No disciplinary loss of family contact; best interests; children in the digital environment"],
     ["Havana, Beijing and Nelson Mandela Rules", "Non-binding standards", "Detailed benchmarks, e.g. Havana Rule 60: weekly visits in principle, at least monthly"],
     ["Berlin, England and Wales, Queensland, California", "Foreign state or regional law and standards", "Drafting techniques: a statutory visiting floor, monitoring rules, contact as a basic entitlement, free calls"],
   ])}
   <p>The four foreign examples were chosen purposively because each addresses one Vietnamese gap. They are not a representative sample and not evidence that those systems work better in practice.</p>`,
  h.note("", "Our draft cites the Berlin visiting rule as §31; the current official version numbers it §47."))}

${h.sec("method", "Comparative method: seven criteria",
  `<p>Instead of describing each system in turn, the paper asked the same seven questions of every source and sorted each gap into a type.</p>
   ${h.table(["Criterion", "Question asked"], [
     ["1. Relationships", "Who may the child stay in contact with?"],
     ["2. Frequency and duration", "How often and for how long, and is any of it guaranteed?"],
     ["3. Visiting conditions", "Is a visit private and practically reachable?"],
     ["4. Channels and digital safeguards", "How are letters, calls and video regulated, paid for and monitored?"],
     ["5. Special family events", "What happens in illness, bereavement or when family live abroad?"],
     ["6. Restrictions and discipline", "Can contact be cut as punishment?"],
     ["7. Complaints and remedies", "Can the child get a timely, confidential remedy?"],
   ])}
   <p>Each gap was labelled as an <em>internal ambiguity</em> between two Vietnamese texts, a <em>normative shortfall</em> against a non-binding standard, or an <em>implementation risk</em> that would need data to confirm. None was presented as a proven violation.</p>`)}

${h.sec("reasoning", "Applied reasoning: does the misconduct rule reach children?",
  `<p>The general 2025 law (Article 49(1)) reduces family visits after a prison-rule breach. The juvenile law sets its own contact regime (Article 166) and its own disciplinary rules (Article 169(1)). Which governs?</p>
   <div class="tree">
     <div class="q">Does the general visit reduction apply to prisoners under 18?</div>
     <div class="b"><b>Reading A: the juvenile law displaces it</b>An official interpretation or circular could make this clear.</div>
     <div class="b"><b>Reading B: the general rule still applies</b>A circular cannot override a statute, so the law itself would need amending.</div>
   </div>
   <p>We set out both readings instead of asserting one, and proposed protecting baseline contact under either. This was an interpretive problem drawn from the texts, not a client matter.</p>
   <h3>Monitoring phone and video contact</h3>
   <p>The law permits supervision of calls. Drawing on the CRC's privacy article and General Comment No. 25, the paper separated watching a call from listening to it, recording it, keeping the recording and giving others access, and proposed a two-tier model: routine supervision by default, content review only for a documented risk and with procedural controls.</p>`,
  h.note("", "<b>Why this matters beyond prisons.</b> The same distinctions (observe, record, retain, access) are the ones privacy law asks of any service that handles a child's communications. The method transfers; the legal rules do not."))}

${h.sec("findings", "Key findings",
  `<p>The group assessed the framework as <strong>partly compatible</strong> with the UN material. It improves allowances and recognises audiovisual contact. But maxima without minima, domestic-only remote contact, cost, broad monitoring, uncertain status for non-family carers, thin procedures for family emergencies and slow complaints can each limit real protection.</p>`)}

${h.sec("reform", "Recommendations",
  `<p>The draft proposes eight reforms, staged by who can make them and what they cost:</p>
   <ol><li>A guaranteed minimum under the existing monthly limits.</li><li>No disciplinary cuts to baseline contact.</li><li>A clear category for people significant to the child who are not relatives.</li><li>Funded contact, including safeguarded calls with family abroad.</li><li>Two-tier, proportionate monitoring.</li><li>Prompt notice of serious family events and a reviewable compassionate-leave decision.</li><li>Fast, confidential complaints with interim relief.</li><li>Explicit rules for digital contact services.</li></ol>
   <p>These are proposals in a student draft, not adopted reforms.</p>`)}

${h.sec("outputs", "Outputs and evidence",
  `<ul><li>Introduction and Chapter 1 drafts, several versions</li><li>Chapter 4 drafts on gaps and reforms</li><li>Assembled group draft, 138 pages</li><li>English question-and-answer presentation script</li></ul>`)}

${h.sec("limits", "Limitations and reflection",
  `<p>This was desk research: no interviews, prison visits or data on how often contact actually happens. Official 2023 statistics predate the 2026 rules and cannot measure their effect. Foreign provisions need a final version-by-version check.</p>
   <p>The method the project relied on: a right written in a statute has to be followed down to procedure, cost, discretion and remedy before you can say whether it protects anyone.</p>`)}
`)}`,
    },

  }),
};
