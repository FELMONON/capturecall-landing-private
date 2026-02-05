import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "howItWorks": "How It Works",
        "benefits": "Benefits",
        "pricing": "Pricing",
        "contact": "Contact",
        "bookDemo": "Get My Free Demo"
      },
      "hero": {
        "badge": "50+ Calgary Dental Practices Trust Us",
        "headline": "Stop Losing $1,500 Every Time Your Phone Rings Unanswered",
        "subhead": "Your front desk is juggling patients, paperwork, and a ringing phone. CaptureCall AI answers every call in 2 rings, books appointments into Dentrix automatically, and gives your team 20+ hours back each week.",
        "primaryCta": "Get My Free Demo",
        "secondaryCta": "See It In Action",
        "stat": "Calls Answered Today",
        "statNumber": "2,847",
        "socialProof": "50+ practices recovered $5M+ in lost revenue"
      },
      "trust": {
        "hipaa": "HIPAA Compliant",
        "soc2": "SOC 2 Certified",
        "integrations": "Dentrix, Eaglesoft & Open Dental",
        "rating": "4.9/5 from 127 Reviews"
      },
      "problem": {
        "title": "Right Now, Patients Are Calling Your Competitors",
        "subtitle": "Because no one picked up your phone",
        "card1": {
          "title": "Lost Revenue",
          "stat": "$1,500+",
          "desc": "Lifetime value walks out the door with every missed new patient call"
        },
        "card2": {
          "title": "Overwhelmed Staff",
          "stat": "67%",
          "desc": "of front desk staff can't keep up with phones while helping in-office patients"
        },
        "card3": {
          "title": "Gone in 30 Seconds",
          "stat": "85%",
          "desc": "of patients hang up and call another practice if they hit voicemail"
        },
        "highlight": "The math: 3 missed calls per day × $1,500 lifetime value = $135K lost per year"
      },
      "howItWorks": {
        "title": "Live in 30 Minutes. No IT Required.",
        "subtitle": "We handle the setup. You handle the patients.",
        "step1": {
          "title": "We Connect to Your Systems",
          "desc": "Forward your overflow calls to CaptureCall. We plug into Dentrix, Eaglesoft, or Open Dental.",
          "time": "15 min"
        },
        "step2": {
          "title": "We Learn Your Practice",
          "desc": "One 10-minute call. We learn your services, hours, insurance policies, and booking rules.",
          "time": "10 min"
        },
        "step3": {
          "title": "Calls Get Answered",
          "desc": "Every ring answered. Appointments booked. Patients happy. Revenue recovered.",
          "time": "5 min"
        }
      },
      "benefits": {
        "title": "What Your Front Desk Wishes They Had",
        "subtitle": "Built for dental practices, not generic call centers",
        "b1": "Answers at 2am",
        "b1desc": "Nights, weekends, lunch breaks, holidays. Patients call when it's convenient for them, not you.",
        "b2": "Books Into Your PMS",
        "b2desc": "Appointments land directly in Dentrix, Eaglesoft, or Open Dental. No copy-paste. No double-booking.",
        "b3": "Speaks Their Language",
        "b3desc": "Fluent English and French. Patients hear their native language, not \"press 1 for...\"",
        "b4": "See Every Call",
        "b4desc": "Dashboard with recordings, transcripts, and conversion rates. Know exactly what's happening.",
        "b5": "1/10th the Cost",
        "b5desc": "Hiring a receptionist: $45K/year. CaptureCall: $6K/year. Works 24/7. Never calls in sick.",
        "b6": "No Hold Music",
        "b6desc": "Answered in 2 rings. Not 2 minutes. Patients feel valued from the first hello."
      },
      "pricing": {
        "title": "Pick a Plan. Cancel Anytime.",
        "subtitle": "No setup fees. No annual contracts. 30-day money-back guarantee.",
        "monthly": "Monthly",
        "yearly": "Yearly (Save 20%)",
        "starter": {
          "name": "Starter",
          "price": "$299",
          "period": "/month",
          "desc": "For single-location practices",
          "cta": "Try Free for 14 Days",
          "features": ["Up to 200 calls/month", "1 practice location", "Dentrix integration", "Email support", "Call analytics dashboard"]
        },
        "pro": {
          "name": "Professional",
          "price": "$499",
          "period": "/month",
          "desc": "For practices with 500+ calls/month",
          "cta": "Try Free for 14 Days",
          "popular": true,
          "features": ["Unlimited calls", "Up to 3 locations", "Dentrix, Eaglesoft & Open Dental", "Priority phone support", "Custom AI training", "Conversion tracking"]
        },
        "enterprise": {
          "name": "Enterprise",
          "price": "Custom",
          "period": "",
          "desc": "For DSOs with 4+ locations",
          "cta": "Talk to Sales",
          "features": ["Unlimited calls & locations", "Dedicated account manager", "Custom PMS integrations", "99.9% uptime SLA", "White-label option", "Volume discounts"]
        },
        "guarantee": "Not happy? Full refund within 30 days. No questions. No hassle."
      },
      "contact": {
        "title": "See CaptureCall Handle a Real Call",
        "name": "Your Name",
        "practice": "Practice Name",
        "email": "Work Email",
        "phone": "Phone Number",
        "message": "Anything we should know?",
        "submit": "Get My Free Demo"
      },
      "testimonials": {
        "title": "Don't Take Our Word For It",
        "subtitle": "Hear from practice owners who stopped losing patients to voicemail"
      },
      "footer": {
        "desc": "AI that answers your phone. So your team can focus on patients."
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
        "bookDemo": "Obtenir ma démo"
      },
      "hero": {
        "badge": "50+ cabinets dentaires à Calgary nous font confiance",
        "headline": "Arrêtez de perdre 1 500 $ chaque fois que le téléphone sonne sans réponse",
        "subhead": "Votre réception jongle entre patients, paperasse et téléphone qui sonne. CaptureCall AI répond en 2 sonneries, réserve les rendez-vous dans Dentrix automatiquement et libère 20h+ par semaine à votre équipe.",
        "primaryCta": "Obtenir ma démo gratuite",
        "secondaryCta": "Voir en action",
        "stat": "Appels répondus aujourd'hui",
        "statNumber": "2,847",
        "socialProof": "50+ cabinets ont récupéré plus de 5M$ en revenus perdus"
      },
      "trust": {
        "hipaa": "Conforme HIPAA",
        "soc2": "Certifié SOC 2",
        "integrations": "Dentrix, Eaglesoft & Open Dental",
        "rating": "4.9/5 de 127 avis"
      },
      "problem": {
        "title": "En ce moment, des patients appellent vos concurrents",
        "subtitle": "Parce que personne n'a décroché chez vous",
        "card1": {
          "title": "Revenus perdus",
          "stat": "1 500 $+",
          "desc": "La valeur à vie d'un patient s'envole à chaque appel manqué"
        },
        "card2": {
          "title": "Personnel débordé",
          "stat": "67%",
          "desc": "des réceptionnistes ne peuvent pas gérer le téléphone et les patients en même temps"
        },
        "card3": {
          "title": "Parti en 30 secondes",
          "stat": "85%",
          "desc": "des patients raccrochent et appellent un autre cabinet s'ils tombent sur la boîte vocale"
        },
        "highlight": "Le calcul : 3 appels manqués/jour × 1 500 $ = 135K $ perdus par an"
      },
      "howItWorks": {
        "title": "En ligne en 30 minutes. Sans informaticien.",
        "subtitle": "On s'occupe de l'installation. Vous, des patients.",
        "step1": {
          "title": "On se connecte à vos systèmes",
          "desc": "Transférez vos appels débordés vers CaptureCall. On s'intègre à Dentrix, Eaglesoft ou Open Dental.",
          "time": "15 min"
        },
        "step2": {
          "title": "On apprend votre cabinet",
          "desc": "Un appel de 10 minutes. On apprend vos services, horaires, assurances et règles de réservation.",
          "time": "10 min"
        },
        "step3": {
          "title": "Les appels sont répondus",
          "desc": "Chaque sonnerie répondue. Rendez-vous réservés. Patients satisfaits. Revenus récupérés.",
          "time": "5 min"
        }
      },
      "benefits": {
        "title": "Ce dont votre réception rêve",
        "subtitle": "Conçu pour les cabinets dentaires, pas pour les centres d'appels génériques",
        "b1": "Répond à 2h du matin",
        "b1desc": "Nuits, week-ends, pauses déjeuner, jours fériés. Les patients appellent quand ça les arrange.",
        "b2": "Réserve dans votre PMS",
        "b2desc": "Les rendez-vous arrivent directement dans Dentrix, Eaglesoft ou Open Dental. Pas de copier-coller.",
        "b3": "Parle leur langue",
        "b3desc": "Anglais et français courants. Les patients entendent leur langue, pas « appuyez sur 1 pour... »",
        "b4": "Voyez chaque appel",
        "b4desc": "Tableau de bord avec enregistrements, transcriptions et taux de conversion. Sachez exactement ce qui se passe.",
        "b5": "1/10 du coût",
        "b5desc": "Embaucher une réceptionniste : 45K$/an. CaptureCall : 6K$/an. Disponible 24/7. Ne tombe jamais malade.",
        "b6": "Pas de musique d'attente",
        "b6desc": "Répondu en 2 sonneries. Pas 2 minutes. Les patients se sentent valorisés dès le premier bonjour."
      },
      "pricing": {
        "title": "Choisissez un forfait. Annulez quand vous voulez.",
        "subtitle": "Pas de frais d'installation. Pas de contrat annuel. Garantie de remboursement 30 jours.",
        "monthly": "Mensuel",
        "yearly": "Annuel (Économisez 20%)",
        "starter": {
          "name": "Démarrage",
          "price": "299 $",
          "period": "/mois",
          "desc": "Pour les cabinets à un seul emplacement",
          "cta": "Essai gratuit 14 jours",
          "features": ["Jusqu'à 200 appels/mois", "1 emplacement", "Intégration Dentrix", "Support par email", "Tableau de bord analytique"]
        },
        "pro": {
          "name": "Professionnel",
          "price": "499 $",
          "period": "/mois",
          "desc": "Pour les cabinets avec 500+ appels/mois",
          "cta": "Essai gratuit 14 jours",
          "popular": true,
          "features": ["Appels illimités", "Jusqu'à 3 emplacements", "Dentrix, Eaglesoft & Open Dental", "Support téléphonique prioritaire", "Formation IA personnalisée", "Suivi des conversions"]
        },
        "enterprise": {
          "name": "Entreprise",
          "price": "Sur mesure",
          "period": "",
          "desc": "Pour les DSO avec 4+ emplacements",
          "cta": "Parler aux ventes",
          "features": ["Appels et emplacements illimités", "Gestionnaire de compte dédié", "Intégrations PMS personnalisées", "SLA 99.9% de disponibilité", "Option marque blanche", "Remises sur volume"]
        },
        "guarantee": "Pas satisfait ? Remboursement complet sous 30 jours. Sans questions. Sans tracas."
      },
      "contact": {
        "title": "Voyez CaptureCall gérer un vrai appel",
        "name": "Votre nom",
        "practice": "Nom du cabinet",
        "email": "Email professionnel",
        "phone": "Numéro de téléphone",
        "message": "Quelque chose à nous dire ?",
        "submit": "Obtenir ma démo gratuite"
      },
      "testimonials": {
        "title": "Ne nous croyez pas sur parole",
        "subtitle": "Écoutez les propriétaires de cabinets qui ont arrêté de perdre des patients à cause de la boîte vocale"
      },
      "footer": {
        "desc": "L'IA qui répond à vos appels. Pour que votre équipe se concentre sur les patients."
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
