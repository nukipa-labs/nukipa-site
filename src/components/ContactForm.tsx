'use client';

import { useActionState } from 'react';
import { submitContact, type ContactState } from '@/lib/actions/contact';

interface ContactCopy {
  name:    string;
  email:   string;
  company: string;
  message: string;
  submit:  string;
  submitting: string;
  success: { title: string; body: string };
  errors: {
    missingRequired: string;
    generic:         string;
  };
  fallbackEmail: string;
}

const initialState: ContactState = { ok: false };

export function ContactForm({ copy }: { copy: ContactCopy }) {
  const [state, action, pending] = useActionState(submitContact, initialState);

  if (state.ok) {
    return (
      <div className="rounded-[18px] border border-[color:var(--brand-primary)] bg-[color:var(--surface-soft)] p-8">
        <h2 className="text-[22px] font-semibold tracking-tight text-[color:var(--text-primary)]">
          {copy.success.title}
        </h2>
        <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--text-secondary)]">
          {copy.success.body}
        </p>
      </div>
    );
  }

  const errorMessage =
    state.error === 'missing_required' ? copy.errors.missingRequired
    : state.error                      ? copy.errors.generic
    : null;

  return (
    <form action={action} className="space-y-5">
      <Field label={copy.name}    name="name"    type="text"     required />
      <Field label={copy.email}   name="email"   type="email"    required />
      <Field label={copy.company} name="company" type="text"     />
      <Field label={copy.message} name="message" textarea        required />

      {errorMessage && (
        <p className="text-[14px] text-[#B91C1C]" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-5">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-7 py-3 text-[15px] font-medium text-[color:var(--text-on-brand)] transition-transform duration-200 hover:-translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {pending ? copy.submitting : copy.submit}
        </button>
        <a
          href={`mailto:${copy.fallbackEmail}`}
          className="link-underline text-[14px] text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)]"
        >
          {copy.fallbackEmail}
        </a>
      </div>
    </form>
  );
}

interface FieldProps {
  label:    string;
  name:     string;
  type?:    string;
  required?: boolean;
  textarea?: boolean;
}

function Field({ label, name, type = 'text', required, textarea }: FieldProps) {
  const base =
    'mt-1.5 w-full rounded-[12px] border border-[color:var(--border-default)] bg-[color:var(--surface-card)] px-4 py-3 text-[15px] text-[color:var(--text-primary)] placeholder:text-[color:var(--text-muted)] outline-none focus:border-[color:var(--brand-primary)] focus:ring-[3px] focus:ring-[rgba(0,84,201,0.15)] transition-[border-color,box-shadow] duration-150';
  return (
    <label className="block">
      <span className="text-[14px] font-medium text-[color:var(--text-primary)]">
        {label} {required && <span className="text-[color:var(--brand-primary)]">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
