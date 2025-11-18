import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "howItWorks": "How it Works",
        "benefits": "Benefits",
        "pricing": "Pricing",
        "contact": "Contact",
        "bookDemo": "Book Free Demo"
      },
      "hero": {
        "badge": "Trusted by 50+ Calgary Dental Practices",
        "headline": "Never Miss Another Patient Call",
        "subhead": "CaptureCall AI handles 100% of your calls 24/7, books appointments directly into your PMS, and saves your front desk 20+ hours a week.",
        "primaryCta": "Get Started",
        "secondaryCta": "See Live Demo",
        "stat": "Calls Saved This Week"
      },
      "trust": {
        "hipaa": "HIPAA Compliant",
        "soc2": "SOC 2 Secure",
        "award": "Award Winning",
        "rating": "4.9/5 Rating"
      },
      "problem": {
        "title": "The Hidden Cost of Missed Calls",
        "card1": {
          "title": "Lost Revenue",
          "desc": "Every missed new patient call is $1,500+ in lost lifetime value."
        },
        "card2": {
          "title": "Staff Burnout",
          "desc": "Front desk staff are overwhelmed juggling phones and in-person patients."
        },
        "card3": {
          "title": "Poor Experience",
          "desc": "Patients hate voicemail. 85% will call a competitor if you don't answer."
        },
        "highlight": "$100k - $265k lost annually"
      },
      "howItWorks": {
        "title": "How CaptureCall AI Works",
        "step1": {
          "title": "Quick Setup",
          "desc": "We integrate with your phone system and PMS in under 30 minutes."
        },
        "step2": {
          "title": "Smart Training",
          "desc": "Our AI learns your practice's specific protocols and FAQs."
        },
        "step3": {
          "title": "Go Live",
          "desc": "Relax knowing every call is answered professionally, 24/7."
        }
      },
      "benefits": {
        "title": "Why Top Practices Choose Us",
        "b1": "24/7 Availability",
        "b1desc": "Answer calls nights, weekends, and holidays.",
        "b2": "Instant Booking",
        "b2desc": "Integrates with Dentrix, Eaglesoft, and Open Dental.",
        "b3": "Bilingual Support",
        "b3desc": "Fluent in English and French for all patients.",
        "b4": "Call Analytics",
        "b4desc": "Dashboard with recording and sentiment analysis.",
        "b5": "Reduced Overhead",
        "b5desc": "A fraction of the cost of a full-time receptionist.",
        "b6": "Patient Satisfaction",
        "b6desc": "No more hold times or voicemail jail."
      },
      "pricing": {
        "title": "Simple, Transparent Pricing",
        "monthly": "Monthly",
        "yearly": "Yearly (Save 20%)",
        "starter": {
          "name": "Starter",
          "price": "$299",
          "desc": "Perfect for small practices."
        },
        "pro": {
          "name": "Professional",
          "price": "$499",
          "desc": "For growing clinics with high volume."
        },
        "enterprise": {
          "name": "Enterprise",
          "price": "Custom",
          "desc": "For DSOs and multi-location groups."
        },
        "guarantee": "30-Day Money-Back Guarantee"
      },
      "contact": {
        "title": "Ready to Transform Your Practice?",
        "name": "Full Name",
        "practice": "Practice Name",
        "email": "Email Address",
        "phone": "Phone Number",
        "message": "Message",
        "submit": "Request Demo"
      },
      "footer": {
        "desc": "The #1 AI Receptionist for Dental Practices."
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "howItWorks": "Comment ça marche",
        "benefits": "Avantages",
        "pricing": "Tarifs",
        "contact": "Contact",
        "bookDemo": "Réserver une démo"
      },
      "hero": {
        "badge": "Approuvé par 50+ cabinets dentaires à Calgary",
        "headline": "Ne manquez plus jamais un appel",
        "subhead": "CaptureCall AI gère 100% de vos appels 24/7, prend les rendez-vous directement dans votre PMS et fait gagner 20h+ par semaine à votre accueil.",
        "primaryCta": "Commencer",
        "secondaryCta": "Voir la démo",
        "stat": "Appels sauvés cette semaine"
      },
      "trust": {
        "hipaa": "Conforme HIPAA",
        "soc2": "Sécurité SOC 2",
        "award": "Primé",
        "rating": "Note 4.9/5"
      },
      "problem": {
        "title": "Le coût caché des appels manqués",
        "card1": {
          "title": "Perte de revenus",
          "desc": "Chaque nouveau patient manqué représente 1 500 $+ de valeur perdue."
        },
        "card2": {
          "title": "Épuisement du personnel",
          "desc": "Le personnel d'accueil est débordé entre le téléphone et les patients."
        },
        "card3": {
          "title": "Mauvaise expérience",
          "desc": "Les patients détestent les boîtes vocales. 85% appelleront un concurrent."
        },
        "highlight": "100k $ - 265k $ perdus annuellement"
      },
      "howItWorks": {
        "title": "Comment fonctionne CaptureCall AI",
        "step1": {
          "title": "Installation rapide",
          "desc": "Nous intégrons votre système téléphonique et PMS en moins de 30 min."
        },
        "step2": {
          "title": "Apprentissage intelligent",
          "desc": "Notre IA apprend les protocoles et FAQ spécifiques de votre cabinet."
        },
        "step3": {
          "title": "Mise en ligne",
          "desc": "Détendez-vous sachant que chaque appel est répondu professionnellement."
        }
      },
      "benefits": {
        "title": "Pourquoi les meilleurs cabinets nous choisissent",
        "b1": "Disponibilité 24/7",
        "b1desc": "Réponse aux appels nuits, week-ends et jours fériés.",
        "b2": "Réservation instantanée",
        "b2desc": "S'intègre avec Dentrix, Eaglesoft et Open Dental.",
        "b3": "Support bilingue",
        "b3desc": "Parle couramment anglais et français.",
        "b4": "Analytique d'appels",
        "b4desc": "Tableau de bord avec enregistrements et analyse de sentiments.",
        "b5": "Frais réduits",
        "b5desc": "Une fraction du coût d'une réceptionniste à temps plein.",
        "b6": "Satisfaction patient",
        "b6desc": "Plus de temps d'attente ou de messagerie vocale."
      },
      "pricing": {
        "title": "Tarification simple et transparente",
        "monthly": "Mensuel",
        "yearly": "Annuel (Économisez 20%)",
        "starter": {
          "name": "Démarrage",
          "price": "299 $",
          "desc": "Parfait pour les petits cabinets."
        },
        "pro": {
          "name": "Professionnel",
          "price": "499 $",
          "desc": "Pour les cliniques en croissance."
        },
        "enterprise": {
          "name": "Entreprise",
          "price": "Sur mesure",
          "desc": "Pour les groupes et DSO."
        },
        "guarantee": "Garantie satisfait ou remboursé de 30 jours"
      },
      "contact": {
        "title": "Prêt à transformer votre cabinet ?",
        "name": "Nom complet",
        "practice": "Nom du cabinet",
        "email": "Adresse email",
        "phone": "Numéro de téléphone",
        "message": "Message",
        "submit": "Demander une démo"
      },
      "footer": {
        "desc": "L'IA réceptionniste n°1 pour les cabinets dentaires."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
