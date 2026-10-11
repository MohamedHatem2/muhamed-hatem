/**
 * ============================================================
 * PORTFOLIO CONFIG — edit these values; do not put secrets here
 * ============================================================
 *
 * 1. PROJECT_URLS  — add a real URL when a case study is ready.
 *    Leave empty ("") for a disabled "Details coming soon" state.
 *
 * 2. CONTACT_WEBHOOK — n8n webhook URL for the contact form.
 *    Leave empty to fall back to mailto: (no backend required).
 *
 * 3. CHAT_WEBHOOK — n8n webhook URL for the AI assistant.
 *    Leave empty; the chat will show a clear "not configured" state.
 *
 * API keys, SMTP passwords, and LLM credentials belong in n8n
 * credentials — never in this file or any public frontend file.
 */
window.PORTFOLIO_CONFIG = {
  /* Contact */
  CONTACT_EMAIL: "Ramohamed482@gmail.com",
  CONTACT_WEBHOOK: "https://9da29579.kube-ops.com/webhook/portfolio-contact", // e.g. 'https://your-n8n.host/webhook/portfolio-contact'

  /* Chatbot */
  CHAT_WEBHOOK: "https://9da29579.kube-ops.com/webhook/portfolio-chat", // e.g. 'https://your-n8n.host/webhook/portfolio-chat'

  /**
   * Project detail URLs — keys match project ids in script.js PROJECTS.
   * Example: AI_EXAM_MAKER: 'https://example.com/case-studies/ai-exam-maker'
   */
  PROJECT_URLS: {
    AI_EXAM_MAKER: "https://vercel.com/mohamed-hatems-projects-d3c5bfb7/exam-generator/ATz6hxdyP4txAczCuFp1Qcrz1cuK",
    ORDER_INVENTORY:
      "https://app.notion.com/p/Smart-Order-Inventory-Management-System-3881e67539e480339d08d5e67f9ded45?source=copy_link",
    MEALMEN: "https://jobs-website-rho.vercel.app/",
    ANEES: "https://aneesai.vercel.app/",
    HOME_CYCLE:
      "https://www.behance.net/gallery/228009333/UX-UI-Case-Study-(-E-Commerce-Website-)",
  },
};
