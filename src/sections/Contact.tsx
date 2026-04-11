import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const { t, profile } = useTranslation();

  function validate(form: FormState): FormErrors {
    const errors: FormErrors = {};
    if (!form.name.trim()) errors.name = t.validationNameRequired;
    if (!form.email.trim()) {
      errors.email = t.validationEmailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = t.validationEmailInvalid;
    }
    if (!form.message.trim()) errors.message = t.validationMessageRequired;
    return errors;
  }

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSending(true);
    setSendError(false);

    try {
      const res = await fetch("https://formsubmit.co/ajax/paxbyme@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio contact from ${form.name}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  const inputBase =
    "w-full rounded-lg border bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:bg-white focus:outline-none dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:bg-neutral-800/80";
  const inputNormal = "border-neutral-200 focus:border-accent-500 dark:border-neutral-700 dark:focus:border-accent-500";
  const inputError = "border-red-300 focus:border-red-400 dark:border-red-700";

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionTitle
          title={t.contactTitle}
          subtitle={t.contactSubtitle}
        />

        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
          {/* Form */}
          <Reveal delay={80}>
            <div className="surface rounded-xl overflow-hidden">
              <div className="surface-label">
                <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">contact.sh</span>
              </div>
              <div className="p-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center rounded-xl border border-accent-200 bg-accent-50 p-12 text-center dark:border-accent-800/40 dark:bg-accent-900/10">
                    <CheckCircle size={40} className="mb-4 text-accent-500" />
                    <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-neutral-50">
                      {t.contactSuccess}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {t.contactSuccessMessage}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                      >
                        {t.contactName}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                        placeholder={t.contactNamePlaceholder}
                      />
                      {errors.name && (
                        <p className="mt-1 font-mono text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                      >
                        {t.contactEmail}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                        placeholder={t.contactEmailPlaceholder}
                      />
                      {errors.email && (
                        <p className="mt-1 font-mono text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                      >
                        {t.contactMessage}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
                        placeholder={t.contactMessagePlaceholder}
                      />
                      {errors.message && (
                        <p className="mt-1 font-mono text-xs text-red-500">{errors.message}</p>
                      )}
                    </div>

                    {sendError && (
                      <p className="font-mono text-xs text-red-500">{t.contactSendError}</p>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={sending}
                    >
                      <Send size={16} />
                      {sending ? t.contactSending : t.contactSend}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>

          {/* Social links */}
          <Reveal delay={150}>
            <div className="surface rounded-xl overflow-hidden">
              <div className="surface-label">
                <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">socials.sh</span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-neutral-50">
                  {t.contactOrFindMe}
                </h3>
                <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                  {t.contactPlatformsMessage}
                </p>

                <div className="space-y-2">
                  {profile.socialLinks.map((link, index) => (
                    <Reveal key={link.platform} delay={180 + index * 60}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-neutral-700 transition-all duration-200 hover:border-accent-300 hover:bg-accent-50 hover:text-accent-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-accent-600/50 dark:hover:bg-accent-900/15 dark:hover:text-accent-300"
                        aria-label={`Visit ${link.platform} profile`}
                      >
                        <Icon name={link.icon} size={18} className="text-neutral-500 dark:text-neutral-400" />
                        <span className="text-sm font-semibold">{link.platform}</span>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
