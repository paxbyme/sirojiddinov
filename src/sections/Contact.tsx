import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { profile } from "../data/profile";

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

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a project in mind? Let's talk."
        />

        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
          {/* Form */}
          <Reveal delay={80}>
            <div className="glass-surface rounded-2xl p-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-accent-300/45 bg-accent-100/55 p-12 text-center dark:border-accent-400/25 dark:bg-accent-500/12">
                  <CheckCircle
                    size={48}
                    className="mb-4 text-accent-700 dark:text-accent-300"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full rounded-xl border bg-white/62 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 backdrop-blur-md transition-colors focus:border-accent-500 focus:outline-none dark:bg-slate-900/55 dark:text-slate-100 dark:placeholder-slate-500 ${
                        errors.name
                          ? "border-red-400 dark:border-red-500"
                          : "border-slate-300/55 dark:border-slate-700/60"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full rounded-xl border bg-white/62 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 backdrop-blur-md transition-colors focus:border-accent-500 focus:outline-none dark:bg-slate-900/55 dark:text-slate-100 dark:placeholder-slate-500 ${
                        errors.email
                          ? "border-red-400 dark:border-red-500"
                          : "border-slate-300/55 dark:border-slate-700/60"
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full resize-none rounded-xl border bg-white/62 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 backdrop-blur-md transition-colors focus:border-accent-500 focus:outline-none dark:bg-slate-900/55 dark:text-slate-100 dark:placeholder-slate-500 ${
                        errors.message
                          ? "border-red-400 dark:border-red-500"
                          : "border-slate-300/55 dark:border-slate-700/60"
                      }`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Social links */}
          <Reveal delay={150}>
            <div className="glass-surface flex flex-col justify-center rounded-2xl p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
                Or find me on
              </h3>
              <p className="mb-6 text-sm text-slate-600 dark:text-slate-300">
                Feel free to reach out through any of these platforms.
              </p>

              <div className="space-y-3">
                {profile.socialLinks.map((link, index) => (
                  <Reveal key={link.platform} delay={180 + index * 80}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-slate-300/50 bg-white/54 p-4 text-slate-700 transition-all duration-300 hover:translate-x-1.5 hover:border-accent-400/55 hover:bg-white/70 dark:border-slate-700/60 dark:bg-slate-900/52 dark:text-slate-200 dark:hover:border-accent-400/45 dark:hover:bg-slate-900/72"
                      aria-label={`Visit ${link.platform} profile`}
                    >
                      <Icon
                        name={link.icon}
                        size={20}
                        className="text-accent-700 dark:text-accent-300"
                      />
                      <span className="text-sm font-medium">{link.platform}</span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
