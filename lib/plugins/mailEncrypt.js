export const handleEmailClick = (e, emailIcon, CONTACT_EMAIL) => {
  if (CONTACT_EMAIL && emailIcon && !emailIcon.current.href) {
    e.preventDefault()
    const email = decryptEmail(CONTACT_EMAIL)
    emailIcon.current.href = `mailto:${email}`
    emailIcon.current.click()
  }
}

export const encryptEmail = email => {
  return btoa(unescape(encodeURIComponent(email)))
}

const BASE64_PATTERN = /^[A-Za-z0-9+/]+={0,2}$/

const normalizeBase64 = value => {
  const cleaned = (value || '').trim().replace(/\s+/g, '')
  if (!cleaned) return ''
  if (!BASE64_PATTERN.test(cleaned)) return ''
  if (cleaned.length % 4 !== 0) return ''
  return cleaned
}

export const decryptEmail = encryptedEmail => {
  if (!encryptedEmail || typeof encryptedEmail !== 'string') {
    return encryptedEmail
  }

  const raw = encryptedEmail.trim()
  // If the value is already a plain email, keep it unchanged.
  if (raw.includes('@')) {
    return raw
  }

  const normalized = normalizeBase64(raw)
  if (!normalized) {
    return raw
  }

  try {
    const decoded = decodeURIComponent(escape(atob(normalized)))
    return decoded || raw
  } catch (error) {
    return raw
  }
}
