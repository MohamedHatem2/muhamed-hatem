import contact from '../data/contact.json'

const recipient = contact.formSubmitId || contact.email
export const contactAction = `https://formsubmit.co/${recipient}`
export const contactEndpoint = `https://formsubmit.co/ajax/${recipient}`
export const contactFormUrl = contact.formUrl

export function createContactPayload(fields) {
  return {
    name: fields.name.trim(),
    email: fields.email.trim(),
    subject: fields.subject.trim(),
    message: fields.message.trim(),
    _subject: `Portfolio inquiry: ${fields.subject.trim()}`,
    _replyto: fields.email.trim(),
    _template: 'table',
    _url: contactFormUrl,
    _honey: fields._honey || '',
  }
}

export async function submitContactMessage(fields, signal) {
  const response = await fetch(contactEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(createContactPayload(fields)),
    signal,
  })
  if (response.status === 429) throw new Error('RATE_LIMITED')
  const result = await response.json().catch(() => null)
  if (!result || typeof result !== 'object') throw new Error('SUBMISSION_FAILED')
  // Activation can be returned with success:false; classify it before delivery.
  if (/activat|(?:confirm|verify|verification)\s+(?:your\s+|the\s+)?(?:email|form)|(?:email|form)\s+(?:confirmation|verification)/i.test(result.message || '')) throw new Error('DELIVERY_NOT_ACTIVATED')
  if (!response.ok || !(result.success === true || result.success === 'true')) throw new Error('SUBMISSION_FAILED')
  return result
}
