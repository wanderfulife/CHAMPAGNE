// 🚂 ENQUÊTE MOBILITÉ CHAMPAGNE-SUR-SEINE
// Gare de Champagne-sur-Seine - Version v1.0
// Structure: Entrée → Montant/Descendant → Questions dynamiques

export const templateSurveyQuestions = [

    // 🚪 Q0 - Numéro d'entrée
    {
        id: "Q0",
        text: "Quel numéro d'entrée ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Entrée 1", next: "Q1" },
            { id: 2, text: "Entrée 2", next: "Q1" },
            { id: 3, text: "Entrée 3", next: "Q1" },
            { id: 4, text: "Entrée 4", next: "Q1" }
        ]
    },

    // 🔄 Q1 - Direction
    {
        id: "Q1",
        text: "Direction",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Montant", next: "Q2" },
            { id: 2, text: "Descendant", next: "Q1_DESC" }
        ]
    },

    // ============================================================
    // === FLUX MONTANT ===
    // ============================================================

    // 📍 Q2 - De quelle commune venez-vous ?
    {
        id: "Q2",
        text: "De quelle commune venez-vous ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Champagne-sur-Seine", next: "Q2a" },
            { id: 2, text: "Autre commune", next: "Q2b" }
        ]
    },

    // 🏙️ Q2a - De quel quartier ?
    {
        id: "Q2a",
        text: "De quel quartier ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Aubépine", next: "Q3" },
            { id: 2, text: "Du Coteau aux Chaillots", next: "Q3" },
            { id: 3, text: "Les Champignots", next: "Q3" },
            { id: 4, text: "Seine et Forêt", next: "Q3" }
        ]
    },

    // 📝 Q2b - Autre commune
    {
        id: "Q2b",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "Q3"
    },

    // 🚗 Q3 - Mode de rabattement
    {
        id: "Q3",
        text: "Par quel mode de transport êtes-vous venus à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Marche", next: "Q4" },
            { id: 2, text: "Vélo - EDPM", next: "Q4" },
            { id: 3, text: "Voiture (seul)", next: "Q3a" },
            { id: 4, text: "Voiture (à plusieurs)", next: "Q3a" },
            { id: 5, text: "Voiture (déposé à la gare)", next: "Q4" },
            { id: 6, text: "Bus", next: "Q3b" },
            { id: 7, text: "2 Roues Motorisés", next: "Q4" }
        ]
    },

    // 🚗 Q3a - Où êtes-vous garés ?
    {
        id: "Q3a",
        text: "Où êtes-vous garés ?",
        type: 'singleChoice',
        image: "plan.png",
        options: [
            { id: 1, text: "Parvis de la Gare", next: "Q4" },
            { id: 2, text: "Parking principal", next: "Q4" },
            { id: 3, text: "Autres", next: "Q3a_autre" }
        ]
    },

    // 📝 Q3a_autre - Autre parking
    {
        id: "Q3a_autre",
        text: "Préciser le lieu de stationnement :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser...",
        next: "Q4"
    },

    // 🚌 Q3b - Quelle ligne de bus ?
    {
        id: "Q3b",
        text: "Quelle ligne avez-vous pris ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Ligne 3261", next: "Q4" },
            { id: 2, text: "Ligne 3430", next: "Q4" },
            { id: 3, text: "Ligne 3433", next: "Q4" },
            { id: 4, text: "Ligne 3436", next: "Q4" },
            { id: 5, text: "Ligne 3439", next: "Q4" },
            { id: 6, text: "Ligne 3442", next: "Q4" }
        ]
    },

    // 🚉 Q4 - Gare de destination
    {
        id: "Q4",
        text: "Quelle est votre gare de destination ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Paris Gare de Lyon TER", next: "Q5" },
            { id: 2, text: "Paris Gare de Lyon (via Melun) TRANSILIEN R", next: "Q5" },
            { id: 3, text: "Melun", next: "Q5" },
            { id: 4, text: "Montereau", next: "Q5" },
            { id: 5, text: "Livry sur Seine", next: "Q5" },
            { id: 6, text: "Chartrettes", next: "Q5" },
            { id: 7, text: "Fontaine le Port", next: "Q5" },
            { id: 8, text: "Héricy", next: "Q5" },
            { id: 9, text: "Vulaines sur Seine", next: "Q5" },
            { id: 10, text: "Samoreau", next: "Q5" },
            { id: 11, text: "Vernou-sur-Seine", next: "Q5" },
            { id: 12, text: "La Grande Paroisse", next: "Q5" },
            { id: 13, text: "Autre", next: "Q4a" }
        ]
    },

    // 📝 Q4a - Autre gare
    {
        id: "Q4a",
        text: "Préciser la gare de destination :",
        type: 'gare',
        next: "Q5"
    },

    // 🎯 Q5 - Motif
    {
        id: "Q5",
        text: "Quel est le motif de votre déplacement ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Travail", next: "Q6" },
            { id: 2, text: "Étude", next: "Q6" },
            { id: 3, text: "Loisirs", next: "Q6" },
            { id: 4, text: "Utilitaire - Achats", next: "Q6" },
            { id: 5, text: "Autre", next: "Q5a" }
        ]
    },

    // 📝 Q5a - Autre motif
    {
        id: "Q5a",
        text: "Préciser le motif :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser...",
        next: "Q6"
    },

    // 🔁 Q6 - Fréquence
    {
        id: "Q6",
        text: "Vous faites ce même déplacement, pour le même motif :",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Au moins 4 fois par semaine", next: "end" },
            { id: 2, text: "1 à 3 fois par semaine", next: "end" },
            { id: 3, text: "1 à 3 fois par mois", next: "end" },
            { id: 4, text: "Moins souvent", next: "end" }
        ]
    },

    // ============================================================
    // === FLUX DESCENDANT ===
    // ============================================================

    // 📍 Q1_DESC - D'où venez-vous ?
    {
        id: "Q1_DESC",
        text: "D'où venez-vous ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "De votre domicile", next: "Q2_DESC" },
            { id: 2, text: "Du logement de vos parents/famille/amis", next: "Q2_DESC" },
            { id: 3, text: "De votre lieu de travail / de formation", next: "Q2_DESC" },
            { id: 4, text: "De votre lieu d'études", next: "Q2_DESC" },
            { id: 5, text: "D'un autre lieu", next: "Q2_DESC" }
        ]
    },

    // 🏙️ Q2_DESC - Dans quelle commune est situé ce lieu ?
    {
        id: "Q2_DESC",
        text: "Dans quelle commune est situé ce lieu ?",
        type: 'commune',
        next: "Q3_DESC"
    },

    // 🎯 Q3_DESC - Motif
    {
        id: "Q3_DESC",
        text: "Pour quel motif prenez-vous le train aujourd'hui ? Vous vous rendez :",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Sur votre lieu de travail / de formation", next: "Q4_DESC" },
            { id: 2, text: "A un RDV professionnel (en dehors de votre lieu de travail habituel)", next: "Q4_DESC" },
            { id: 3, text: "Sur votre lieu d'études", next: "Q4_DESC" },
            { id: 4, text: "A un RDV privé (médecin, administration, entretien...)", next: "Q4_DESC" },
            { id: 5, text: "Sur un lieu de loisirs, faire des courses", next: "Q4_DESC" },
            { id: 6, text: "Chez des amis / de la famille", next: "Q4_DESC" },
            { id: 7, text: "Chez vous", next: "Q4_DESC" }
        ]
    },

    // 🔁 Q4_DESC - Fréquence
    {
        id: "Q4_DESC",
        text: "Vous faites ce même déplacement, pour le même motif :",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Au moins 4 fois par semaine", next: "Q5_DESC" },
            { id: 2, text: "1 à 3 fois par semaine", next: "Q5_DESC" },
            { id: 3, text: "1 à 3 fois par mois", next: "Q5_DESC" },
            { id: 4, text: "Moins souvent", next: "Q5_DESC" }
        ]
    },

    // 🚗 Q5_DESC - Mode de diffusion
    {
        id: "Q5_DESC",
        text: "Comment êtes-vous arrivé à la gare de Champagne ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "A pied uniquement", next: "end" },
            { id: 2, text: "En bus ou car", next: "end" },
            { id: 3, text: "En voiture conducteur", next: "end" },
            { id: 4, text: "En voiture en tant que passager", next: "end" },
            { id: 5, text: "En vélo", next: "end" },
            { id: 6, text: "En moto ou scooter", next: "end" },
            { id: 7, text: "En taxi", next: "end" },
            { id: 8, text: "Autre (trottinette, ...)", next: "Q5a_DESC" }
        ]
    },

    // 📝 Q5a_DESC - Autre mode
    {
        id: "Q5a_DESC",
        text: "Préciser le mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser...",
        next: "end"
    }
];