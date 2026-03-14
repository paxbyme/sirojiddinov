import type { Locale } from "../types";
import type { TranslationStrings } from "./types";

export const translations: Record<Locale, TranslationStrings> = {
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navContact: "Contact",

    heroViewProjects: "View Projects",
    heroContact: "Contact",

    aboutTitle: "About Me",
    aboutSubtitle: "A little bit about who I am and what I do.",
    aboutCommand: "cat about.md",

    skillsTitle: "Skills & Tools",
    skillsSubtitle: "Technologies I work with on a daily basis.",
    skillsCommand: "skills --list",

    projectsTitle: "Projects",
    projectsSubtitle: "A selection of things I've built.",
    projectsCommand: "ls projects/",
    projectLiveDemo: "Live Demo",
    projectSourceCode: "Source Code",
    projectLive: "Live",
    projectCode: "Code",
    projectProductionReady: "Production Ready",

    experienceTitle: "Experience & Education",
    experienceSubtitle: "My professional journey so far.",
    experienceCommand: "git log --experience",

    contactTitle: "Get in Touch",
    contactSubtitle: "Have a project in mind? Let's talk.",
    contactCommand: "ssh contact@paxbyme.dev",
    contactName: "Name",
    contactEmail: "Email",
    contactMessage: "Message",
    contactNamePlaceholder: "Your name",
    contactEmailPlaceholder: "you@example.com",
    contactMessagePlaceholder: "Tell me about your project...",
    contactSend: "Send Message",
    contactSending: "Sending...",
    contactSendError: "Failed to send. Please try again.",
    contactSuccess: "Message Sent!",
    contactSuccessMessage: "Thanks for reaching out. I'll get back to you soon.",
    contactOrFindMe: "Or find me on",
    contactPlatformsMessage: "Feel free to reach out through any of these platforms.",

    validationNameRequired: "Name is required.",
    validationEmailRequired: "Email is required.",
    validationEmailInvalid: "Enter a valid email address.",
    validationMessageRequired: "Message is required.",

    footerBuiltWith: "Built with React & Tailwind CSS.",

    themeSwitchToLight: "Switch to light mode",
    themeSwitchToDark: "Switch to dark mode",

    languageLabel: "Language",
  },
  ru: {
    navAbout: "Обо мне",
    navSkills: "Навыки",
    navProjects: "Проекты",
    navExperience: "Опыт",
    navContact: "Контакт",

    heroViewProjects: "Проекты",
    heroContact: "Связаться",

    aboutTitle: "Обо мне",
    aboutSubtitle: "Немного о том, кто я и чем занимаюсь.",
    aboutCommand: "cat about.md",

    skillsTitle: "Навыки и инструменты",
    skillsSubtitle: "Технологии, с которыми я работаю ежедневно.",
    skillsCommand: "skills --list",

    projectsTitle: "Проекты",
    projectsSubtitle: "Подборка моих работ.",
    projectsCommand: "ls projects/",
    projectLiveDemo: "Демо",
    projectSourceCode: "Исходный код",
    projectLive: "Демо",
    projectCode: "Код",
    projectProductionReady: "В продакшене",

    experienceTitle: "Опыт и образование",
    experienceSubtitle: "Мой профессиональный путь.",
    experienceCommand: "git log --experience",

    contactTitle: "Связаться",
    contactSubtitle: "Есть проект? Давайте обсудим.",
    contactCommand: "ssh contact@paxbyme.dev",
    contactName: "Имя",
    contactEmail: "Эл. почта",
    contactMessage: "Сообщение",
    contactNamePlaceholder: "Ваше имя",
    contactEmailPlaceholder: "you@example.com",
    contactMessagePlaceholder: "Расскажите о вашем проекте...",
    contactSend: "Отправить",
    contactSending: "Отправка...",
    contactSendError: "Не удалось отправить. Попробуйте ещё раз.",
    contactSuccess: "Сообщение отправлено!",
    contactSuccessMessage: "Спасибо за обращение. Я свяжусь с вами в ближайшее время.",
    contactOrFindMe: "Или найдите меня",
    contactPlatformsMessage: "Свяжитесь со мной через любую из этих платформ.",

    validationNameRequired: "Введите имя.",
    validationEmailRequired: "Введите email.",
    validationEmailInvalid: "Введите корректный email.",
    validationMessageRequired: "Введите сообщение.",

    footerBuiltWith: "Создано с React и Tailwind CSS.",

    themeSwitchToLight: "Светлая тема",
    themeSwitchToDark: "Тёмная тема",

    languageLabel: "Язык",
  },
  uz: {
    navAbout: "Men haqimda",
    navSkills: "Ko'nikmalar",
    navProjects: "Loyihalar",
    navExperience: "Tajriba",
    navContact: "Aloqa",

    heroViewProjects: "Loyihalar",
    heroContact: "Bog'lanish",

    aboutTitle: "Men haqimda",
    aboutSubtitle: "Men kim ekanligim va nima qilishim haqida.",
    aboutCommand: "cat about.md",

    skillsTitle: "Ko'nikmalar va vositalar",
    skillsSubtitle: "Har kuni ishlaydigan texnologiyalar.",
    skillsCommand: "skills --list",

    projectsTitle: "Loyihalar",
    projectsSubtitle: "Men yaratgan loyihalar.",
    projectsCommand: "ls projects/",
    projectLiveDemo: "Demo",
    projectSourceCode: "Manba kodi",
    projectLive: "Demo",
    projectCode: "Kod",
    projectProductionReady: "Productionda",

    experienceTitle: "Tajriba va ta'lim",
    experienceSubtitle: "Mening kasbiy yo'lim.",
    experienceCommand: "git log --experience",

    contactTitle: "Bog'lanish",
    contactSubtitle: "Loyihangiz bormi? Gaplashamiz.",
    contactCommand: "ssh contact@paxbyme.dev",
    contactName: "Ism",
    contactEmail: "Email",
    contactMessage: "Xabar",
    contactNamePlaceholder: "Ismingiz",
    contactEmailPlaceholder: "you@example.com",
    contactMessagePlaceholder: "Loyihangiz haqida gapirib bering...",
    contactSend: "Yuborish",
    contactSending: "Yuborilmoqda...",
    contactSendError: "Yuborib bo'lmadi. Qaytadan urinib ko'ring.",
    contactSuccess: "Xabar yuborildi!",
    contactSuccessMessage: "Murojaat uchun rahmat. Tez orada javob beraman.",
    contactOrFindMe: "Yoki meni toping",
    contactPlatformsMessage: "Ushbu platformalar orqali bog'laning.",

    validationNameRequired: "Ism kiriting.",
    validationEmailRequired: "Email kiriting.",
    validationEmailInvalid: "To'g'ri email kiriting.",
    validationMessageRequired: "Xabar kiriting.",

    footerBuiltWith: "React va Tailwind CSS bilan yaratilgan.",

    themeSwitchToLight: "Yorug' rejim",
    themeSwitchToDark: "Qorong'u rejim",

    languageLabel: "Til",
  },
};
