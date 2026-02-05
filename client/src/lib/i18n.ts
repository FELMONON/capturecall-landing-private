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
        "subhead": "CaptureCall AI answers every call 24/7, books appointments directly into your practice management system, and gives your front desk 20+ hours back each week.",
        "primaryCta": "Book Your Free Demo",
        "secondaryCta": "Watch 2-Min Demo",
        "stat": "Calls Answered Today",
        "statNumber": "2,847",
        "socialProof": "Join 50+ practices saving $100K+ annually"
      },
      "trust": {
        "hipaa": "HIPAA Compliant",
        "soc2": "SOC 2 Certified",
        "integrations": "Dentrix, Eaglesoft & Open Dental",
        "rating": "4.9/5 from 127 Reviews"
      },
      "problem": {
        "title": "The Hidden Cost of Missed Calls",
        "subtitle": "Every unanswered call is a patient choosing your competitor",
        "card1": {
          "title": "Lost Revenue",
          "stat": "$1,500+",
          "desc": "Average lifetime value lost per missed new patient call"
        },
        "card2": {
          "title": "Staff Burnout",
          "stat": "67%",
          "desc": "of front desk staff report feeling overwhelmed by call volume"
        },
        "card3": {
          "title": "Lost Patients",
          "stat": "85%",
          "desc": "of patients will call a competitor if they reach voicemail"
        },
        "highlight": "Average dental practice loses $100K - $265K annually to missed calls"
      },
      "howItWorks": {
        "title": "Up and Running in 30 Minutes",
        "subtitle": "No IT team required. No complex integrations. Just results.",
        "step1": {
          "title": "Connect Your System",
          "desc": "We integrate with your existing phone system and PMS - Dentrix, Eaglesoft, or Open Dental.",
          "time": "15 min"
        },
        "step2": {
          "title": "Train Your AI",
          "desc": "Our AI learns your practice's protocols, services, and FAQs from a simple onboarding call.",
          "time": "10 min"
        },
        "step3": {
          "title": "Start Capturing Calls",
          "desc": "Go live and watch as every call is answered professionally, appointments booked, and revenue recovered.",
          "time": "5 min"
        }
      },
      "benefits": {
        "title": "Everything Your Front Desk Needs",
        "subtitle": "Powerful features designed specifically for dental practices",
        "b1": "24/7 Availability",
        "b1desc": "Never miss a call - nights, weekends, or holidays. Patients always reach a helpful voice.",
        "b2": "Instant Booking",
        "b2desc": "Books directly into Dentrix, Eaglesoft, or Open Dental. No double-entry or sync issues.",
        "b3": "Bilingual Support",
        "b3desc": "Fluent in English and French. Serves all your patients in their preferred language.",
        "b4": "Smart Analytics",
        "b4desc": "Real-time dashboard with call recordings, sentiment analysis, and conversion tracking.",
        "b5": "90% Cost Savings",
        "b5desc": "A fraction of hiring another receptionist. ROI positive from month one.",
        "b6": "Zero Wait Times",
        "b6desc": "Patients never wait on hold or reach voicemail. Every caller feels valued."
      },
      "pricing": {
        "title": "Simple, Transparent Pricing",
        "subtitle": "No hidden fees. No long-term contracts. Cancel anytime.",
        "monthly": "Monthly",
        "yearly": "Yearly (Save 20%)",
        "starter": {
          "name": "Starter",
          "price": "$299",
          "period": "/month",
          "desc": "Perfect for single-location practices",
          "cta": "Start Free Trial",
          "features": ["Up to 200 calls/month", "1 practice location", "Dentrix integration", "Email support", "Basic analytics"]
        },
        "pro": {
          "name": "Professional",
          "price": "$499",
          "period": "/month",
          "desc": "For busy practices with high call volume",
          "cta": "Start Free Trial",
          "popular": true,
          "features": ["Unlimited calls", "Up to 3 locations", "All PMS integrations", "Priority phone support", "Advanced analytics", "Custom AI training"]
        },
        "enterprise": {
          "name": "Enterprise",
          "price": "Custom",
          "period": "",
          "desc": "For DSOs and multi-location groups",
          "cta": "Contact Sales",
          "features": ["Unlimited everything", "Unlimited locations", "Dedicated success manager", "Custom integrations", "SLA guarantee", "White-label option"]
        },
        "guarantee": "30-Day Money-Back Guarantee - No Questions Asked"
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
      "testimonials": {
        "title": "Trusted by Leading Dental Practices",
        "subtitle": "See what practice owners are saying about CaptureCall AI"
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
        "subhead": "CaptureCall AI répond à chaque appel 24/7, réserve les rendez-vous directement dans votre système de gestion et libère 20h+ par semaine à votre accueil.",
        "primaryCta": "Réservez votre démo gratuite",
        "secondaryCta": "Voir la démo de 2 min",
        "stat": "Appels répondus aujourd'hui",
        "statNumber": "2,847",
        "socialProof": "Rejoignez 50+ cabinets économisant 100K$+ par an"
      },
      "trust": {
        "hipaa": "Conforme HIPAA",
        "soc2": "Certifié SOC 2",
        "integrations": "Dentrix, Eaglesoft & Open Dental",
        "rating": "4.9/5 de 127 avis"
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
