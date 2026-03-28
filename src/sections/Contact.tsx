import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Card } from "../components/Card";
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
    "w-full rounded-2xl border bg-white/50 px-5 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 transition-all duration-500 focus:border-accent-300 focus:ring-4 focus:ring-accent-100/50 focus:outline-none dark:bg-neutral-900/50 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-accent-500/50 dark:focus:ring-accent-500/10";

  return (
    <section id="contact" className="py-28">
      <Container>
        <div className="section-fade mb-28" />

        <SectionTitle title={t.contactTitle} subtitle={t.contactSubtitle} />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* Form */}
          <Reveal delay={60}>
            <Card>
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-accent-50/50 to-warm-50/50 p-12 text-center dark:from-accent-500/5 dark:to-warm-500/5">
                  <CheckCircle size={48} className="mb-5 text-accent-500" />
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
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
                      className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      {t.contactName}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`${inputBase} ${
                        errors.name
                          ? "border-red-300 dark:border-red-500"
                          : "border-neutral-200/60 dark:border-neutral-700/60"
                      }`}
                      placeholder={t.contactNamePlaceholder}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      {t.contactEmail}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`${inputBase} ${
                        errors.email
                          ? "border-red-300 dark:border-red-500"
                          : "border-neutral-200/60 dark:border-neutral-700/60"
                      }`}
                      placeholder={t.contactEmailPlaceholder}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      {t.contactMessage}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`resize-none ${inputBase} ${
                        errors.message
                          ? "border-red-300 dark:border-red-500"
                          : "border-neutral-200/60 dark:border-neutral-700/60"
                      }`}
                      placeholder={t.contactMessagePlaceholder}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {sendError && (
                    <p className="text-xs text-red-500">{t.contactSendError}</p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={sending}
                  >
                    <Send size={18} />
                    {sending ? t.contactSending : t.contactSend}
                  </Button>
                </form>
              )}
            </Card>
          </Reveal>

          {/* Social links */}
          <Reveal delay={150}>
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {t.contactOrFindMe}
              </h3>
              <p className="mb-7 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {t.contactPlatformsMessage}
              </p>

              <div className="space-y-3">
                {profile.socialLinks.map((link, index) => (
                  <Reveal key={link.platform} delay={200 + index * 80}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 rounded-2xl border border-neutral-200/40 bg-white/30 p-4.5 text-neutral-600 transition-all duration-500 hover:border-accent-300/50 hover:bg-accent-50/30 hover:text-accent-700 dark:border-neutral-800/40 dark:bg-neutral-900/30 dark:text-neutral-300 dark:hover:border-accent-500/25 dark:hover:bg-accent-500/5 dark:hover:text-accent-400"
                      aria-label={`Visit ${link.platform} profile`}
                    >
                      <Icon
                        name={link.icon}
                        size={20}
                        className="text-accent-500 dark:text-accent-400"
                      />
                      <span className="text-sm font-medium">{link.platform}</span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
