'use server';

import { getNukipaClient } from '@/lib/nukipa';

export interface ContactState {
  ok:     boolean;
  error?: string;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name    = String(formData.get('name')    || '').trim();
  const email   = String(formData.get('email')   || '').trim();
  const company = String(formData.get('company') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (!name || !email || !message) {
    return { ok: false, error: 'missing_required' };
  }

  try {
    const client = await getNukipaClient();
    await client.submitForm('contact', { name, email, company, message });
    return { ok: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'unknown';
    return { ok: false, error: msg };
  }
}
