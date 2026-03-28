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

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionTitle
          title={t.contactTitle}
          subtitle={t.contactSubtitle}
          command={t.contactCommand}
        />

        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
          {/* Form */}
          <Reveal delay={80}>
            <Card title="contact.sh">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-accent-500/20 bg-accent-100/40 p-12 text-center dark:border-accent-500/15 dark:bg-accent-500/8">
                  <CheckCircle
                    size={48}
                    className="mb-4 text-accent-600 dark:text-accent-400"
                  />
                  <h3 className="mb-2 font-mono text-lg font-bold text-neutral-900 dark:text-neutral-50">
                    {t.contactSuccess}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {t.contactSuccessMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block font-mono text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="terminal-prompt">{">"}</span> {t.contactName}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-white/60 px-4 py-2.5 font-mono text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-accent-500 focus:outline-none dark:bg-neutral-900/60 dark:text-neutral-100 dark:placeholder-neutral-500 ${
                        errors.name
                          ? "border-red-400 dark:border-red-500"
                          : "border-neutral-300/50 dark:border-neutral-700/50"
                      }`}
                      placeholder={t.contactNamePlaceholder}
                    />
                    {errors.name && (
                      <p className="mt-1 font-mono text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block font-mono text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="terminal-prompt">{">"}</span> {t.contactEmail}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-white/60 px-4 py-2.5 font-mono text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-accent-500 focus:outline-none dark:bg-neutral-900/60 dark:text-neutral-100 dark:placeholder-neutral-500 ${
                        errors.email
                          ? "border-red-400 dark:border-red-500"
                          : "border-neutral-300/50 dark:border-neutral-700/50"
                      }`}
                      placeholder={t.contactEmailPlaceholder}
                    />
                    {errors.email && (
                      <p className="mt-1 font-mono text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block font-mono text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="terminal-prompt">{">"}</span> {t.contactMessage}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full resize-none rounded-lg border bg-white/60 px-4 py-2.5 font-mono text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-accent-500 focus:outline-none dark:bg-neutral-900/60 dark:text-neutral-100 dark:placeholder-neutral-500 ${
                        errors.message
                          ? "border-red-400 dark:border-red-500"
                          : "border-neutral-300/50 dark:border-neutral-700/50"
                      }`}
                      placeholder={t.contactMessagePlaceholder}
                    />
                    {errors.message && (
                      <p className="mt-1 font-mono text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {sendError && (
                    <p className="font-mono text-xs text-red-500">
                      {t.contactSendError}
                    </p>
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
            <Card title="socials.sh">
              <h3 className="mb-2 font-mono text-lg font-bold text-neutral-900 dark:text-neutral-50">
                {t.contactOrFindMe}
              </h3>
              <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-300">
                {t.contactPlatformsMessage}
              </p>

              <div className="space-y-3">
                {profile.socialLinks.map((link, index) => (
                  <Reveal key={link.platform} delay={180 + index * 80}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-accent-500/12 bg-white/40 p-4 font-mono text-neutral-700 transition-all duration-300 hover:translate-x-1.5 hover:border-accent-500/30 hover:bg-accent-500/5 dark:border-accent-500/10 dark:bg-neutral-900/40 dark:text-neutral-300 dark:hover:border-accent-500/25 dark:hover:bg-accent-500/8"
                      aria-label={`Visit ${link.platform} profile`}
                    >
                      <Icon
                        name={link.icon}
                        size={20}
                        className="text-accent-600 dark:text-accent-400"
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
