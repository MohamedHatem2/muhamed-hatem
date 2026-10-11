/* Mohamed Hatem Sadek — portfolio
   Theme (light/dark), language (EN/AR + RTL), projects, contact form, chatbot. */
(() => {
  "use strict";

  const cfg = window.PORTFOLIO_CONFIG || {};
  const FORM_ENDPOINT = cfg.CONTACT_WEBHOOK || "";
  const CHAT_ENDPOINT = cfg.CHAT_WEBHOOK || "";
  const CONTACT_EMAIL = cfg.CONTACT_EMAIL || "Ramohamed482@gmail.com";
  const PROJECT_URLS = cfg.PROJECT_URLS || {};

  const doc = document,
    root = doc.documentElement;
  const $ = (s, c = doc) => c.querySelector(s);
  const $$ = (s, c = doc) => Array.from(c.querySelectorAll(s));
  root.classList.add("js");
  const store = {
    get: (k) => {
      try {
        return localStorage.getItem(k);
      } catch (_) {
        return null;
      }
    },
    set: (k, v) => {
      try {
        localStorage.setItem(k, v);
      } catch (_) {}
    },
  };

  /* ---------- Projects (source of truth for cards) ---------- */
  const PROJECTS = [
    {
      id: "AI_EXAM_MAKER",
      statusKey: "p1s",
      statusSolid: true,
      title: "AI Exam Maker",
      titleKey: null,
      descKey: "p1d",
      chips: ["p1a", "p1b", "p1c"],
      half: false,
    },
    {
      id: "ORDER_INVENTORY",
      statusKey: "p2s",
      statusSolid: true,
      titleKey: "p2t",
      descKey: "p2d",
      chips: ["n8n", "Google Sheets", "Telegram"],
      half: false,
    },
    {
      id: "MEALMEN",
      statusKey: "p3s",
      statusSolid: true,
      title: "Mealmen",
      titleKey: null,
      descKey: "p3d",
      chips: ["p3a", "p3b", "p3c"],
      half: false,
    },
    {
      id: "ANEES",
      statusKey: "p4s",
      statusSolid: false,
      titleKey: "p4t",
      descKey: "p4d",
      chips: ["p4a", "p4b", "p4c"],
      half: true,
    },
    {
      id: "HOME_CYCLE",
      statusKey: "p5s",
      statusSolid: false,
      titleKey: "p5t",
      descKey: "p5d",
      chips: ["p5a", "p5b", "p5c"],
      half: true,
    },
  ];

  /* ---------- Arabic translations ---------- */
  const AR = {
    "meta.title": "محمد حاتم صادق — التفكير المنتجي × أتمتة الذكاء الاصطناعي",
    skip: "تخطَّ إلى المحتوى",
    "logo.aria": "محمد حاتم صادق، الصفحة الرئيسية",
    "nav.aria": "التنقل الرئيسي",
    "nav.menu": "القائمة",
    "nav.home": "الرئيسية",
    "nav.about": "من أنا",
    "nav.services": "أسلوبي",
    "nav.work": "الأعمال",
    "nav.process": "المنهج",
    "nav.contact": "تواصل",
    "nav.cta": "لنتحدث",
    "lang.aria": "Switch language to English",
    "theme.aria.dark": "التبديل إلى الوضع الداكن",
    "theme.aria.light": "التبديل إلى الوضع الفاتح",
    "hero.badge": "متاح لفرص في المنتجات وأتمتة الذكاء الاصطناعي",
    "hero.title":
      "أربط التفكير المنتجي بأتمتة الذكاء الاصطناعي <mark>لحل مشاكل حقيقية.</mark>",
    "hero.sub":
      "أهلاً، أنا <b>محمد حاتم صادق</b>. أحوّل مشاكل العمل إلى متطلبات واضحة وتجارب عملية وأتمتة تعمل — من الاكتشاف وUX إلى الواجهات وسير عمل n8n بالذكاء الاصطناعي.",
    "hero.tag1": "التفكير المنتجي",
    "hero.tag2": "أتمتة الذكاء الاصطناعي",
    "hero.tag3": "UX والواجهات",
    "hero.cta1": "شاهد أعمالي",
    "hero.cta2": "تواصل معي",
    "stat.1": "مشاريع مختارة",
    "stat.2": "مجالات تركيز",
    "stat.3": "خطوات من المشكلة إلى الحل",
    "hero.frame": "المنتج × أتمتة الذكاء الاصطناعي × UX",
    "hero.name": "محمد حاتم صادق",
    "hero.role": "التفكير المنتجي × أتمتة الذكاء الاصطناعي",
    "photo.alt": "صورة شخصية لمحمد حاتم صادق",
    "hero.m1t": "التفكير المنتجي",
    "hero.m1d": "من المشكلة إلى المتطلبات",
    "hero.m2t": "أتمتة الذكاء الاصطناعي",
    "hero.m2d": "n8n ووكلاء الذكاء الاصطناعي",
    "about.badge": "من أنا",
    "about.title": "أفهم المشكلة قبل أن أبني",
    "about.sub":
      "في بداية مسيرتي، أتعلم بالتنفيذ: أبحث مع المستخدمين، أحدد المتطلبات، أصمم التجربة، أكتب كود الواجهة، وأؤتمت سير العمل بـ n8n ووكلاء الذكاء الاصطناعي.",
    "about.hi": "أهلاً، أنا محمد.",
    "about.role":
      "مفكّر منتجات · بنّاء أتمتة بالذكاء الاصطناعي · UX/UI والواجهات",
    "about.p1":
      "أربط اكتشاف المنتج وUX العملي وتنفيذ الواجهات وسير عمل n8n وتطبيقات وكلاء الذكاء الاصطناعي. أبدأ بـ لماذا يجب أن يوجد المنتج، ثم أقرر شكله وكيف يعمل.",
    "about.p2":
      "وكمدرّب مستقل لتطوير UI/UX في ITI، أشرح الأفكار المعقدة ببساطة. وهذه العادة تنعكس على كتابة المتطلبات وعرض القرارات وتصميم أتمتة يمكن للآخرين صيانتها.",
    "about.strengths": "أبرز نقاط القوة",
    s1: "اكتشاف المنتج وكتابة المتطلبات",
    s2: "أبحاث UX وخرائط رحلة المستخدم",
    s3: "تصميم الواجهات وتنفيذها (HTML وCSS وJS)",
    s4: "أتمتة سير العمل بـ n8n",
    s5: "تطبيقات وكلاء الذكاء الاصطناعي",
    s6: "التواصل الواضح والتدريس",
    "edu.title": "التعليم والتدريب",
    e1: "مدرّب مستقل لتطوير UI/UX · ITI",
    e1m: "ديسمبر 2025 – الآن",
    e1d: "إرشاد طلاب مسارات UX/UI؛ تبسيط المفاهيم المعقدة في مسارات تعلم منظمة؛ توجيه البحث والوايرفريم والنماذج الأولية.",
    e2: "متدرب مطوّر UX/UI · برنامج ITI المكثف",
    e2m: "فبراير 2025 – أغسطس 2025 · شهادة",
    e2d: "سير عمل تصميم منتج كامل: اكتشاف، بحث، شخصيات، معمارية معلومات، وايرفريم، نماذج عالية الدقة، واختبار قابلية الاستخدام والتكرار.",
    e3: "تطبيقات وكلاء الذكاء الاصطناعي · DEPI",
    e3m: "يوليو 2026 – أكتوبر 2026",
    e3d: "تدريب في تطبيقات الذكاء الاصطناعي والأتمتة الذكية وحالات استخدام وكلاء الذكاء الاصطناعي للمسارات التعليمية والتشغيلية.",
    e4: "بكالوريوس تكنولوجيا التعليم · جامعة الأزهر",
    e4m: "أكتوبر 2019 – يونيو 2023",
    e4d: "تصميم تعليمي وأدوات تعلم رقمية وأنظمة تعليمية — أساس في التواصل المنظم وسير العمل الرقمي.",
    "edu.achTitle": "مشاركات بارزة",
    "edu.nasaTitle": "ناسا سبيس أبس القاهرة",
    "edu.huaweiTitle": "مسابقة هواوي ICT",
    "edu.nasa":
      "تعريف مفهوم منتج (التنبؤ بحرائق الغابات) ضمن تحدٍ عالمي للابتكار.",
    "edu.huawei":
      "مسار الشبكات — تمثيل جامعة الأزهر؛ أساسيات الشبكات وحل المشكلات التقنية.",
    "phil.title": "طريقة تفكيري",
    ph1t: "المشكلة أولاً",
    ph1d: "أحدد المشكلة في جملة واحدة واضحة قبل أن أصمم أو أؤتمت أي شيء.",
    ph2t: "المستخدم أولاً",
    ph2d: "المقابلات والاستبيانات وخرائط الرحلة هي التي توجّه القرارات، لا الافتراضات.",
    ph3t: "التصميم بالكود",
    ph3d: "أنفّذ الواجهة بنفسي، فتُختبر الأفكار في واجهات حقيقية.",
    ph4t: "أؤتمت الباقي",
    ph4d: "الأعمال المتكررة تنتقل إلى سير عمل n8n ووكلاء الذكاء الاصطناعي.",
    "services.badge": "ماذا أقدّم",
    "services.title": "ثلاث قدرات مترابطة",
    "services.sub":
      "التفكير المنتجي وتصميم التجربة والأتمتة الذكية يدعم كل منها الآخر، فيُفهم الحل ويُصمَّم ويُبنى ويتحسّن كوحدة واحدة.",
    sv1g: "الاستراتيجية",
    sv1t: "التفكير المنتجي",
    sv1d: "اكتشاف المشكلة الحقيقية وتحديد احتياجات المستخدمين وتحويلها إلى متطلبات منتج ومعايير نجاح واضحة.",
    sv2g: "التجربة",
    sv2t: "UX/UI والواجهات",
    sv2d: "تدفقات وواجهات مبنية على البحث، تُنفَّذ كواجهات متجاوبة وسهلة الاستخدام ليُختبر الحل في الاستخدام الفعلي.",
    sv3g: "الأتمتة",
    sv3t: "أتمتة بالذكاء الاصطناعي",
    sv3d: "سير عمل n8n وتطبيقات وكلاء ذكاء اصطناعي تتولى الخطوات المتكررة وتربط الأدوات وتحافظ على موثوقية العمليات.",
    "work.badge": "أعمال مختارة",
    "work.title": "مشاريع بوصف صادق",
    "work.sub":
      "كل مشروع يوضح حقيقته: منتج مبني، أو منصة منشورة، أو أتمتة، أو فكرة، أو دراسة بحث. روابط التفاصيل تُضاف عند جاهزية دراسات الحالة.",
    p1s: "منتج مبني",
    p1d: "منتج بالذكاء الاصطناعي يولّد الامتحانات ويرسلها بالبريد، ويعطي الطلاب روابط للمشاركة، ويُجرى الامتحان أونلاين ويُصحَّح تلقائياً.",
    p1a: "ملكية المنتج",
    p1b: "الأتمتة",
    p1c: "تصميم التجربة",
    p2s: "أتمتة مبنية",
    p2t: "إدارة الطلبات والمخزون",
    p2d: "مبني بـ n8n وGoogle Sheets وTelegram. يستقبل الطلبات ويحدّث حالتها ويخصم المخزون ويرسل إشعارات التشغيل.",
    p3s: "مشروع منشور",
    p3d: "منصة للحرفيين تعالج محدودية وصولهم الرقمي لفرص العمل، من تحديد المشكلة إلى تطوير المنتج ونشره.",
    p3a: "اكتشاف المشكلة",
    p3b: "تطوير المنتج",
    p3c: "النشر",
    p4s: "فكرة منصة",
    p4t: "أنيس — الصحة النفسية للطلاب",
    p4d: "منصة مقترحة لمتابعة الصحة النفسية للطلاب والتقييمات السلوكية، مع سير عمل بالذكاء الاصطناعي لتحليل ملاحظات المعلمين وتتبع التقدم وتحديد الحالات التي تحتاج دعماً إضافياً.",
    p4a: "تعريف المنتج",
    p4b: "سير عمل بالذكاء الاصطناعي",
    p4c: "تتبع التقدم",
    p5s: "دراسة بحث UX",
    p5t: "هوم سايكل — تجارة إلكترونية",
    p5d: "مقابلات واستبيانات وشخصيات وخرائط رحلة لاكتشاف نقاط الاحتكاك، ثم متطلبات منتج مبنية على البحث.",
    p5a: "أبحاث UX",
    p5b: "خرائط الرحلة",
    p5c: "المتطلبات",
    "work.details": "تفاصيل المشروع",
    "work.soon": "التفاصيل قريباً",
    "process.badge": "أسلوبي",
    "process.title": "من المشكلة إلى حل يعمل",
    "process.sub":
      "المنتج أكثر من شاشاته. هذا هو المسار الذي أتبعه في كل مرة — بما في ذلك أين تناسب الأتمتة.",
    st1t: "افهم",
    st1d: "اذكر المشكلة في جملة واضحة.",
    st2t: "اكتشف",
    st2d: "تعرّف على ما يحتاجه المستخدمون فعلاً.",
    st3t: "حدّد",
    st3d: "حوّل النتائج إلى متطلبات واضحة.",
    st4t: "صمّم",
    st4d: "ابدأ بالتدفقات ثم الشاشات.",
    st5t: "ابنِ",
    st5d: "نفّذ الحل في الواجهة.",
    st6t: "أتمت",
    st6d: "انقل العمل المتكرر إلى سير العمل والذكاء الاصطناعي.",
    "toolkit.badge": "الأدوات",
    "toolkit.title": "أدوات أستخدمها في السياق",
    "toolkit.sub":
      "ليست جداراً من الشارات — الأدوات التي تظهر في عملي المنتجي والتصميمي والأتمتة.",
    tk1t: "المنتج والبحث",
    tk2t: "التصميم والواجهات",
    tk3t: "الأتمتة والذكاء الاصطناعي",
    "contact.badge": "تواصل",
    "contact.title": "لنبنِ شيئاً مفيداً",
    "contact.sub":
      "إذا كنت تعمل على منتج يلتقي فيه التفكير المنتجي وتجربة المستخدم والأتمتة، أخبرني بالمشكلة ونبدأ منها.",
    "contact.direct": "أو راسلني مباشرة",
    "contact.li": "تواصل معي",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف",
    "f.name": "الاسم",
    "f.nameph": "اسمك",
    "f.email": "البريد الإلكتروني",
    "f.emailph": "you@example.com",
    "f.subject": "الموضوع",
    "f.subjectph": "بماذا يتعلق هذا؟",
    "f.msg": "الرسالة",
    "f.msgph": "حدّثني عن منتجك أو مشكلتك",
    "f.send": "أرسل الرسالة",
    "form.sending": "جارٍ الإرسال…",
    "form.ok": "تم الإرسال. سأرد عليك قريباً.",
    "form.err": "تعذّر الإرسال. جرّب البريد الإلكتروني مباشرة.",
    "form.invalid": "من فضلك املأ كل الحقول بشكل صحيح.",
    "form.mailto": "فتحنا تطبيق البريد لإرسال رسالتك.",
    "foot.top": "العودة للأعلى",
    "chat.title": "اسأل عن محمد",
    "chat.status": "مساعد ذكاء اصطناعي · متاح",
    "chat.close": "إغلاق المحادثة",
    "chat.inputLabel": "سؤالك",
    "chat.ph": "اسأل عن عمل محمد…",
    "chat.send": "إرسال",
    "chat.note": "الإجابات مقتصرة على خلفية محمد ومشاريعه الموثّقة.",
    "chat.welcome":
      "مرحباً — أنا مساعد رقمي يمثّل محمد حاتم صادق. اسألني عن خلفيته، مشاريعه، مهاراته، أو اهتماماته المهنية.",
    "chat.s1": "بماذا يتخصص محمد؟",
    "chat.s2": "ماذا يفعل AI Exam Maker؟",
    "chat.s3": "ما الذي بناه بـ n8n؟",
    "chat.s4": "ما الفرص التي يهتم بها؟",
    "chat.sending": "جارٍ التفكير…",
    "chat.err": "تعذّر الوصول للمساعد. حاول مرة أخرى أو راسل محمد مباشرة.",
    "chat.offline":
      "المساعد غير مُعد بعد. اضبط webhook في config.js بعد استيراد سير عمل n8n.",
    "chat.empty": "اكتب سؤالاً عن محمد.",
    "chat.retry": "إعادة المحاولة",
    'edu.cert': 'الشهادة',
    'hero.cta1': 'سيرتي الذاتية',
  };

  const EN_STATUS = {
    "form.sending": "Sending…",
    "form.ok": "Sent. I’ll get back to you soon.",
    "form.err": "Couldn’t send. Please email me directly.",
    "form.invalid": "Please fill in every field correctly.",
    "form.mailto": "We opened your email app to send your message.",
    "theme.aria.dark": "Switch to dark mode",
    "theme.aria.light": "Switch to light mode",
    "lang.aria": "التبديل إلى العربية",
    "meta.title": doc.title,
    "edu.achTitle": "Notable participation",
    "edu.nasaTitle": "NASA Space Apps Cairo",
    "edu.huaweiTitle": "Huawei ICT Competition",
    "edu.nasa":
      "Defined a product concept (forest fire prediction) in a global innovation challenge.",
    "edu.huawei":
      "Network Track — represented Al-Azhar University; foundational networking and technical problem-solving.",
    e1: "Freelance UI/UX Development Instructor · ITI",
    e1m: "Dec 2025 – Present",
    e1d: "Mentoring students in UX/UI tracks; translating complex concepts into structured learning paths; guiding research, wireframing, and prototyping.",
    e2: "UX/UI Developer Trainee · ITI Intensive Program",
    e2m: "Feb 2025 – Aug 2025 · Certificate",
    e2d: "Full product design workflow: discovery, research, personas, IA, wireframes, high-fidelity prototypes, usability testing and iteration.",
    e3: "AI Agent Applications · DEPI",
    e3m: "Jul 2026 – Oct 2026",
    e3d: "Training in AI applications, intelligent automation, and AI-agent use cases for educational and operational workflows.",
    e4: "B.A. Educational Technology · Al-Azhar University",
    e4m: "Oct 2019 – Jun 2023",
    e4d: "Instructional design, digital learning tools, and educational systems — foundation in structured communication and digital workflows.",
    "work.details": "View project details",
    "work.soon": "Details coming soon",
    p1s: "Built product",
    p1d: "An AI-powered product that generates exams, emails them, gives students shareable links, runs the exam online and grades submissions automatically.",
    p1a: "Product ownership",
    p1b: "Automation",
    p1c: "Experience design",
    p2s: "Built automation",
    p2t: "Order & Inventory Management",
    p2d: "Built with n8n, Google Sheets and Telegram. It takes in orders, updates their status, deducts inventory and sends operational notifications.",
    p3s: "Deployed project",
    p3d: "A platform for craftsmen that tackles their limited digital access to employment, from identifying the problem to building and deploying the product.",
    p3a: "Problem discovery",
    p3b: "Product development",
    p3c: "Deployment",
    p4s: "Platform concept",
    p4t: "Anees — Student Wellness",
    p4d: "A proposed platform for monitoring student well-being and behavioural assessments, with AI-assisted workflows that analyse teacher feedback, track progress and flag cases needing extra support.",
    p4a: "Product definition",
    p4b: "AI workflows",
    p4c: "Progress tracking",
    p5s: "UX research case study",
    p5t: "Home Cycle — E-Commerce",
    p5d: "Interviews, surveys, personas and journey mapping to find friction points, then research-informed product requirements.",
    p5a: "UX research",
    p5b: "Journey mapping",
    p5c: "Requirements",
    "chat.title": "Ask about Mohamed",
    "chat.status": "AI assistant · available",
    "chat.close": "Close chat",
    "chat.inputLabel": "Your question",
    "chat.ph": "Ask about Mohamed’s work…",
    "chat.send": "Send",
    "chat.note":
      "Answers are limited to Mohamed’s verified background and projects.",
    "chat.welcome":
      "Hi — I’m a digital assistant representing Mohamed Hatem Sadek. Ask me about his background, projects, skills, or career interests.",
    "chat.s1": "What does Mohamed specialize in?",
    "chat.s2": "What does AI Exam Maker do?",
    "chat.s3": "What has he built with n8n?",
    "chat.s4": "What opportunities is he interested in?",
    "chat.sending": "Thinking…",
    "chat.err":
      "Couldn’t reach the assistant. Try again or contact Mohamed directly.",
    "chat.offline":
      "Assistant not configured yet. Set the webhook in config.js after importing the n8n workflow.",
    "chat.empty": "Type a question about Mohamed.",
    "chat.retry": "Retry",
    'edu.cert': 'Certificate',
    'hero.cta1': 'My Resume',
  };

  const els = {
    text: $$("[data-i18n]"),
    html: $$("[data-i18n-html]"),
    ph: $$("[data-i18n-ph]"),
    aria: $$("[data-i18n-aria]"),
    alt: $$("[data-i18n-alt]"),
  };
  els.text.forEach((e) => (e.dataset.en = e.innerHTML));
  els.html.forEach((e) => (e.dataset.en = e.innerHTML));
  els.ph.forEach((e) => (e.dataset.en = e.getAttribute("placeholder")));
  els.aria.forEach((e) => (e.dataset.en = e.getAttribute("aria-label")));
  els.alt.forEach((e) => (e.dataset.en = e.getAttribute("alt")));

  let lang = root.lang === "ar" ? "ar" : "en";
  const t = (k) => (lang === "ar" ? AR[k] : EN_STATUS[k]) ?? EN_STATUS[k] ?? k;

  function applyLang(l, persist) {
    lang = l;
    root.lang = l;
    root.dir = l === "ar" ? "rtl" : "ltr";
    const pick = (el, key, fallback) =>
      l === "ar" && AR[key] !== undefined ? AR[key] : fallback;
    els.text.forEach((e) => {
      e.innerHTML = pick(e, e.dataset.i18n, e.dataset.en);
    });
    els.html.forEach((e) => {
      e.innerHTML = pick(e, e.dataset.i18nHtml, e.dataset.en);
    });
    els.ph.forEach((e) =>
      e.setAttribute("placeholder", pick(e, e.dataset.i18nPh, e.dataset.en)),
    );
    els.alt.forEach((e) =>
      e.setAttribute("alt", pick(e, e.dataset.i18nAlt, e.dataset.en)),
    );
    els.aria.forEach((e) => {
      if (e.id !== "theme-btn" && e.id !== "lang-btn") {
        e.setAttribute("aria-label", pick(e, e.dataset.i18nAria, e.dataset.en));
      }
    });
    doc.title = l === "ar" ? AR["meta.title"] : EN_STATUS["meta.title"];
    $("#lang-label").textContent = l === "ar" ? "EN" : "عربي";
    $("#lang-btn").setAttribute("aria-label", t("lang.aria"));
    $("#lang-btn").setAttribute("lang", l === "ar" ? "en" : "ar");
    updateThemeLabel();
    if (window.__projectsReady) renderProjects();
    if (persist) store.set("lang", l);
  }

  /* ---------- Theme (manual only; default light) ---------- */
  function updateThemeLabel() {
    const dark = root.dataset.theme === "dark";
    $("#theme-btn").setAttribute(
      "aria-label",
      t(dark ? "theme.aria.light" : "theme.aria.dark"),
    );
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = dark ? "#1B1B1B" : "#FFFFFF";
  }
  $("#theme-btn").addEventListener("click", () => {
    root.classList.add("theming");
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    store.set("theme", root.dataset.theme);
    updateThemeLabel();
    setTimeout(() => root.classList.remove("theming"), 600);
  });
  $("#lang-btn").addEventListener("click", () =>
    applyLang(lang === "ar" ? "en" : "ar", true),
  );
  applyLang(lang, false);

  /* ---------- Photo / logo fallback ---------- */
  function bindPhotoFallback(wrapSel, imgSel) {
    const w = $(wrapSel),
      i = $(imgSel);
    if (!w || !i) return;
    const bad = () => w.classList.add("no-photo");
    if (i.complete && i.naturalWidth === 0) bad();
    i.addEventListener("error", bad);
  }
  bindPhotoFallback("#photo", "#photo img");
  bindPhotoFallback("#avatar", "#avatar img");
  bindPhotoFallback("#logo-avatar", "#logo-avatar img");
  $$(".chatbot__avatar").forEach((av) => {
    const img = av.querySelector("img");
    if (!img) return;
    const bad = () => av.classList.add("no-photo");
    if (img.complete && img.naturalWidth === 0) bad();
    img.addEventListener("error", bad);
  });

  /* ---------- Header: menu + active link ---------- */
  const nav = $("#nav"),
    menuBtn = $("#menu-btn");
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    doc.body.classList.toggle("nav-open", open);
  };
  menuBtn.addEventListener("click", () =>
    setMenu(!nav.classList.contains("is-open")),
  );
  $$("a", nav).forEach((a) =>
    a.addEventListener("click", () => setMenu(false)),
  );
  doc.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
  doc.addEventListener("click", (e) => {
    if (
      !e.target.closest("#nav, #menu-btn") &&
      nav.classList.contains("is-open")
    )
      setMenu(false);
  });

  const links = $$("a", nav);
  const secs = links.map((a) => $(a.getAttribute("href")));
  const spy = new IntersectionObserver(
    (es) => {
      es.forEach((en) => {
        if (en.isIntersecting) {
          const i = secs.indexOf(en.target);
          links.forEach((a, k) => a.classList.toggle("is-active", k === i));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  secs.forEach((s) => s && spy.observe(s));

  /* ---------- Reveal on scroll ---------- */
  $$("[data-stagger]").forEach((g) =>
    Array.from(g.children).forEach((c, i) =>
      c.style.setProperty("--d", i * 90 + "ms"),
    ),
  );
  const io = new IntersectionObserver(
    (es) => {
      es.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        io.unobserve(en.target);
        setTimeout(() => en.target.style.setProperty("--d", "0ms"), 1400);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
  );
  $$("[data-reveal], [data-stagger] > *").forEach((el) => io.observe(el));

  /* ---------- Glass pointer light ---------- */
  if (matchMedia("(hover: hover)").matches) {
    doc.addEventListener(
      "pointermove",
      (e) => {
        const g = e.target.closest && e.target.closest(".glass");
        if (!g) return;
        const r = g.getBoundingClientRect();
        g.style.setProperty("--mx", e.clientX - r.left + "px");
        g.style.setProperty("--my", e.clientY - r.top + "px");
      },
      { passive: true },
    );
  }

  /* ---------- Render project cards ---------- */
  function chipLabel(c) {
    if (c.indexOf(" ") >= 0 || !/^[a-z0-9]+$/i.test(c.replace(/\./g, ""))) {
      // plain tech label or already translated key path
      if (AR[c] || EN_STATUS[c]) return t(c);
      return c;
    }
    return t(c);
  }

  function renderProjects() {
    const grid = $("#work-grid");
    if (!grid) return;
    grid.innerHTML = "";
    PROJECTS.forEach((p) => {
      const url = PROJECT_URLS[p.id] || "";
      const title = p.titleKey ? t(p.titleKey) : p.title || "";
      const desc = t(p.descKey);
      const status = t(p.statusKey);
      const tagClass = p.statusSolid ? "tag tag--solid" : "tag";
      const half = p.half ? " card--half" : "";
      const chipsHtml = p.chips
        .map((c) => {
          const label =
            c === "n8n" || c === "Google Sheets" || c === "Telegram" ? c : t(c);
          return `<li>${label}</li>`;
        })
        .join("");

      let action;
      if (url) {
        action = `<a class="btn btn--primary btn--sm project-details" href="${url}" target="_blank" rel="noopener noreferrer"><span>${t('work.details')}</span><svg class="ic" aria-hidden="true"><use href="#i-external"/></svg></a>`;
      } else {
        action = `<button type="button" class="btn btn--ghost btn--sm project-details is-disabled" disabled aria-disabled="true"><span>${t('work.soon')}</span></button>`;
      }

      const art = doc.createElement("article");
      art.className = "card card--lg" + half + " glass";
      art.innerHTML =
        `<div class="card__top"><span class="${tagClass}">${status}</span></div>` +
        `<h3>${title}</h3>` +
        `<p>${desc}</p>` +
        `<ul class="chips">${chipsHtml}</ul>` +
        `<div class="card__action">${action}</div>`;
      grid.appendChild(art);
      if (typeof io !== "undefined" && io) io.observe(art);
      else art.classList.add("in");
    });
  }
  window.__projectsReady = true;
  renderProjects();

  /* ---------- Contact form ---------- */
  const form = $("#contact-form"),
    statusEl = $("#form-status"),
    sendBtn = $("#send-btn");
  const say = (key, cls) => {
    statusEl.textContent = t(key);
    statusEl.className = "form__status" + (cls ? " " + cls : "");
  };
  let formBusy = false;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (formBusy) return;
    const data = new FormData(form);
    if (data.get("_gotcha")) return;
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      say("form.invalid", "is-err");
      return;
    }

    if (!FORM_ENDPOINT) {
      const subj = encodeURIComponent(
        subject || "Portfolio message from " + name,
      );
      const body = encodeURIComponent(
        message + "\n\n— " + name + " (" + email + ")",
      );
      window.location.href =
        "mailto:" + CONTACT_EMAIL + "?subject=" + subj + "&body=" + body;
      say("form.mailto", "is-ok");
      return;
    }

    formBusy = true;
    sendBtn.disabled = true;
    say("form.sending");
    try {
      const payload = { name, email, subject, message, source: "portfolio" };
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad status");
      let json = null;
      try {
        json = await res.json();
      } catch (_) {}
      if (json && json.ok === false) throw new Error("server reject");
      form.reset();
      say("form.ok", "is-ok");
    } catch (_) {
      say("form.err", "is-err");
    } finally {
      formBusy = false;
      sendBtn.disabled = false;
    }
  });

  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Chatbot ---------- */
  const chatOpen = $("#chat-open");
  const chatClose = $("#chat-close");
  const chatPanel = $("#chat-panel");
  const chatMessages = $("#chat-messages");
  const chatForm = $("#chat-form");
  const chatInput = $("#chat-input");
  const chatSend = $("#chat-send");
  const chatSuggestions = $("#chat-suggestions");
  let chatBusy = false;
  let chatInitialized = false;

  function appendMsg(role, text, opts = {}) {
    const div = doc.createElement("div");
    div.className = "chat-msg chat-msg--" + role;
    if (opts.error) div.classList.add("is-err");
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
  }

  function showSuggestions() {
    chatSuggestions.innerHTML = "";
    ["chat.s1", "chat.s2", "chat.s3", "chat.s4"].forEach((key) => {
      const b = doc.createElement("button");
      b.type = "button";
      b.className = "chat-suggest";
      b.textContent = t(key);
      b.addEventListener("click", () => {
        chatInput.value = t(key);
        chatForm.requestSubmit();
      });
      chatSuggestions.appendChild(b);
    });
  }

  function openChat() {
    chatPanel.hidden = false;
    chatOpen.setAttribute("aria-expanded", "true");
    chatOpen.classList.add("is-open");
    if (!chatInitialized) {
      appendMsg("assistant", t("chat.welcome"));
      showSuggestions();
      chatInitialized = true;
    }
    setTimeout(() => chatInput.focus(), 50);
  }

  function closeChat() {
    chatPanel.hidden = true;
    chatOpen.setAttribute("aria-expanded", "false");
    chatOpen.classList.remove("is-open");
    chatOpen.focus();
  }

  chatOpen.addEventListener("click", () => {
    if (chatPanel.hidden) openChat();
    else closeChat();
  });
  chatClose.addEventListener("click", closeChat);
  doc.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !chatPanel.hidden) closeChat();
  });

  chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (chatBusy) return;
    const msg = String(chatInput.value || "").trim();
    if (!msg) {
      appendMsg("assistant", t("chat.empty"), { error: true });
      return;
    }
    chatSuggestions.innerHTML = "";
    appendMsg("user", msg);
    chatInput.value = "";
    chatInput.blur();
    chatBusy = true;
    chatSend.disabled = true;
    const loading = document.createElement("div");
    loading.className = "chat-msg chat-msg--assistant chat-msg--typing";
    loading.innerHTML =
      '<span class="typing-label">' +
      (lang === "ar" ? "محمد يكتب الآن" : "Mohamed is typing") +
      '</span><span class="typing-dots" aria-hidden="true"><span></span><span></span><span></span></span>';
    chatMessages.appendChild(loading);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (!CHAT_ENDPOINT) {
      loading.remove();
      appendMsg("assistant", t("chat.offline"), { error: true });
      chatBusy = false;
      chatSend.disabled = false;
      return;
    }

    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 45000);
      const res = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ message: msg, lang }),
        signal: controller.signal,
      });
      clearTimeout(timer);
      loading.remove();
      if (!res.ok) throw new Error("bad status");
      const data = await res.json();
      const reply = (data && (data.reply || data.message || data.text)) || "";
      if (!reply) throw new Error("empty");
      appendMsg("assistant", reply);
    } catch (_) {
      loading.remove();
      const err = appendMsg("assistant", t("chat.err"), { error: true });
      const retry = doc.createElement("button");
      retry.type = "button";
      retry.className = "chat-retry";
      retry.textContent = t("chat.retry");
      retry.addEventListener("click", () => {
        chatInput.value = msg;
        err.remove();
        chatForm.requestSubmit();
      });
      err.appendChild(doc.createElement("br"));
      err.appendChild(retry);
    } finally {
      chatBusy = false;
      chatSend.disabled = false;
      // متفتحش الكيبورد تاني على الموبايل
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        chatInput.focus();
      }
    }
  });
})();
