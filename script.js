const translations = {
    en: {
        home: "Home",
        fleet: "Fleet",
        contact: "Contact",
        heroTitle: "Welcome to Economica Limousine and Car Service.",
        heroSubtitle: "Reliable. Affordable. Professional.",
        heroText: "Experience premium car service without the premium price.",
        bookNow: "Book Now",
        about: "About Us",
        aboutText: "Economica Limousine and Car Service is dedicated to providing top-notch transportation services. Our fleet of luxury vehicles and experienced drivers ensure a seamless and comfortable journey for every client. We pride ourselves on reliability, professionalism, and customer satisfaction.",
        services: "Our Services",
        servicesText: "We provide transportation to airports including Philadelphia, Newark, and New York. We are committed to providing efficient and reliable transportation services.",
        information: "Our Information",
        available: "Available 24/7",
        privacy: "Privacy Policy",
        contactTitle: "Contact Us",
        contactText: "Ready to book your ride? Get in touch with Economica and car service today.",
        rights: "All rights reserved."
    },

    es: {
        home: "Inicio",
        fleet: "Vehículos",
        contact: "Contacto",
        heroTitle: "Bienvenido a Economica Limousine and Car Service.",
        heroSubtitle: "Confiable. Económico. Profesional.",
        heroText: "Disfrute de un servicio de transporte premium sin el precio premium.",
        bookNow: "Reservar ahora",
        about: "Sobre nosotros",
        aboutText: "Economica Limousine and Car Service se dedica a proporcionar servicios de transporte de primera calidad. Nuestra flota de vehículos de lujo y nuestros conductores experimentados garantizan un viaje cómodo y sin complicaciones para cada cliente. Nos enorgullecemos de nuestra confiabilidad, profesionalismo y satisfacción del cliente.",
        services: "Nuestros servicios",
        servicesText: "Ofrecemos transporte a los aeropuertos de Filadelfia, Newark y Nueva York. Estamos comprometidos a brindar servicios de transporte eficientes y confiables.",
        information: "Nuestra información",
        available: "Disponible las 24 horas, los 7 días de la semana",
        privacy: "Política de privacidad",
        contactTitle: "Contáctenos",
        contactText: "¿Listo para reservar su viaje? Comuníquese hoy con Economica Limousine and Car Service.",
        rights: "Todos los derechos reservados."
    },

    fr: {
        home: "Accueil",
        fleet: "Véhicules",
        contact: "Contact",
        heroTitle: "Bienvenue chez Economica Limousine and Car Service.",
        heroSubtitle: "Fiable. Abordable. Professionnel.",
        heroText: "Profitez d'un service de transport haut de gamme sans le prix haut de gamme.",
        bookNow: "Réserver maintenant",
        about: "À propos de nous",
        aboutText: "Economica Limousine and Car Service s'engage à fournir des services de transport de qualité supérieure. Notre flotte de véhicules de luxe et nos chauffeurs expérimentés garantissent un trajet confortable et sans souci à chaque client.",
        services: "Nos services",
        servicesText: "Nous proposons des services de transport vers les aéroports de Philadelphie, Newark et New York. Nous nous engageons à fournir un transport efficace et fiable.",
        information: "Nos informations",
        available: "Disponible 24h/24 et 7j/7",
        privacy: "Politique de confidentialité",
        contactTitle: "Contactez-nous",
        contactText: "Prêt à réserver votre trajet ? Contactez Economica Limousine and Car Service dès aujourd'hui.",
        rights: "Tous droits réservés."
    },

    de: {
        home: "Startseite",
        fleet: "Fahrzeuge",
        contact: "Kontakt",
        heroTitle: "Willkommen bei Economica Limousine and Car Service.",
        heroSubtitle: "Zuverlässig. Preiswert. Professionell.",
        heroText: "Erleben Sie erstklassigen Fahrservice ohne den Premiumpreis.",
        bookNow: "Jetzt buchen",
        about: "Über uns",
        aboutText: "Economica Limousine and Car Service bietet erstklassige Transportdienstleistungen. Unsere luxuriöse Fahrzeugflotte und erfahrenen Fahrer sorgen für eine komfortable und reibungslose Fahrt.",
        services: "Unsere Dienstleistungen",
        servicesText: "Wir bieten Transport zu den Flughäfen Philadelphia, Newark und New York an.",
        information: "Unsere Informationen",
        available: "24/7 verfügbar",
        privacy: "Datenschutzrichtlinie",
        contactTitle: "Kontaktieren Sie uns",
        contactText: "Bereit, Ihre Fahrt zu buchen? Kontaktieren Sie Economica Limousine and Car Service noch heute.",
        rights: "Alle Rechte vorbehalten."
    }
};

function getBrowserLanguage() {
    const language = navigator.language || "en";
    const shortLanguage = language.toLowerCase().split("-")[0];

    if (translations[shortLanguage]) {
        return shortLanguage;
    }

    return "en";
}

function translatePage() {
    const language = getBrowserLanguage();
    const translation = translations[language];

    document.documentElement.lang = language;

    document.querySelectorAll("[data-language]").forEach(element => {
        const key = element.getAttribute("data-language");

        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
}

translatePage();