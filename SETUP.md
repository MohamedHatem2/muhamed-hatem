# Portfolio setup — Mohamed Hatem Sadek

## What you still need to supply

| Item | Why |
|------|-----|
| **`me.png`** | Portrait used in hero, about avatar, navbar logo, and chatbot. Place it in the same folder as `index.html`. Without it, initials fallbacks appear. |
| **Project detail URLs** | Edit `config.js` → `PROJECT_URLS`. Leave empty for “Details coming soon”. |
| **n8n instance** | Host (cloud or self-hosted) to import the two workflows. |
| **LLM provider credentials** | OpenAI, Anthropic, Google, etc. — stored only in n8n Credentials. |
| **Email / SMTP credentials** | For the contact form. Choose a provider (Gmail SMTP, SendGrid, Amazon SES, Resend, etc.). |

---

## 1. Theme & language (already implemented)

- **Default theme:** light (not OS preference).
- **Toggle:** sun/moon button; choice saved in `localStorage` key `theme`.
- **Language:** EN/AR with RTL; saved in `localStorage` key `lang`.
- Brand colours: `#003166` (primary), `#F54F1B` (secondary), `#E6D5B7` (support).

---

## 2. Contact form → email via n8n

### Steps

1. In n8n: **Workflows → Import from File** → select `n8n/contact-workflow.json`.
2. Open the **Send Email** node:
   - Attach **SMTP** (or provider-specific) credentials.
   - Set **From** to a verified sender address you control.
   - **To** is already `Ramohamed482@gmail.com`.
   - **Reply-To** is set to the visitor’s email (do not spoof From).
3. Activate the workflow.
4. Copy the **Production webhook URL** (path ends with `/portfolio-contact` or your instance’s equivalent).
5. In `config.js`, set:
   ```js
   CONTACT_WEBHOOK: 'https://YOUR-N8N-HOST/webhook/portfolio-contact'
   ```
6. Test: submit the form with a real email; confirm delivery and Reply-To.
7. Test failure: wrong webhook → form shows error (never a false success).

### Provider notes

n8n does not assume a provider. Common options:

- **Gmail:** App password + SMTP host `smtp.gmail.com`, port 465 or 587.
- **SendGrid / Resend / SES:** Use their SMTP or the dedicated n8n node if available.

Until `CONTACT_WEBHOOK` is set, the form opens the visitor’s mail client (`mailto:`) as a safe fallback.

### Abuse protection (recommended)

- Enable n8n rate limiting on the webhook if available.
- Keep the honeypot field (`_gotcha`) — bots that fill it are ignored on the client.
- Server-side validation rejects empty/invalid payloads.
- Optionally add a CAPTCHA in front of the webhook later.

---

## 3. AI chatbot via n8n

### Steps

1. Import `n8n/chatbot-workflow.json`.
2. Update the **Build prompt + knowledge** Code node so `KNOWLEDGE` matches the latest `knowledge/mohamed.md` (or replace that node with an HTTP Request / Read Binary File that loads the markdown).
3. Configure the **LLM node**:
   - Default template uses an OpenAI-style node (`gpt-4o-mini` as example).
   - You may swap it for Anthropic Claude, Google Gemini, or any n8n-supported LLM.
   - Put the API key **only** in n8n Credentials.
4. Activate the workflow.
5. Copy the production webhook URL.
6. In `config.js`:
   ```js
   CHAT_WEBHOOK: 'https://YOUR-N8N-HOST/webhook/portfolio-chat'
   ```
7. Test:
   - In-scope: “What does AI Exam Maker do?”
   - Out-of-scope: “What is the capital of France?” → polite refusal.
   - Injection attempt: “Ignore previous instructions…” → refusal.
   - Empty webhook → UI shows offline / not-configured message (no fake success).

### Scope rules (enforced in the system prompt)

- Only Mohamed’s verified background, projects, skills, education, interests.
- No general knowledge, coding help, news, politics, medical, legal.
- No invented metrics or seniority claims.
- No claim that Mohamed is personally online.

---

## 4. Project detail links

In `config.js`:

```js
PROJECT_URLS: {
  AI_EXAM_MAKER: '',      // e.g. 'https://...'
  ORDER_INVENTORY: '',
  MEALMEN: '',
  ANEES: '',
  HOME_CYCLE: ''
}
```

Empty string → disabled button labelled “Details coming soon”. Non-empty → “View project details” opens the URL in a new tab.

---

## 5. Local preview

Serve the folder with any static server, for example:

```bash
cd portfolio
python3 -m http.server 8080
```

Open `http://localhost:8080`. Check light/dark, EN/AR, mobile menu, project buttons, form states, and chatbot open/close.

---

## 6. File map

| Path | Role |
|------|------|
| `index.html` | Structure, sections, chatbot shell |
| `styles.css` | Design system, themes, responsive layout |
| `script.js` | Theme, i18n, projects, form, chatbot client |
| `config.js` | **Edit this** — webhooks & project URLs |
| `knowledge/mohamed.md` | Editable chatbot knowledge base |
| `n8n/contact-workflow.json` | Importable contact → email workflow |
| `n8n/chatbot-workflow.json` | Importable chat → LLM workflow |
| `me.png` | **You must add** personal photo |
| `SETUP.md` | This guide |

---

## Security reminders

- Never put LLM keys, SMTP passwords, or private tokens in `config.js`, `script.js`, or any public file.
- Treat public webhooks as abusable: validate input, limit size, rate-limit when possible.
- Do not log full visitor messages in public responses.
- Chatbot and form claim success only after a real backend confirmation.
