// NCERT Books Data - All Classes 1-12 with Subjects and Chapters
// PDFs are self-hosted in public/pdfs folder
// Download PDFs from NCERT and place them in the appropriate folders

export interface Chapter {
    number: number;
    title: string;
    pdfUrl: string;
}

export interface Subject {
    id: string;
    name: string;
    book: string;
    icon: string;
    chapters: Chapter[];
}

export interface ClassData {
    id: number;
    name: string;
    subjects: Subject[];
}

// Helper function to generate local PDF path
const pdf = (classId: number, subject: string, chapter: number) =>
    `/pdfs/class-${classId}/${subject}/chapter-${chapter}.pdf`;

export const classes: ClassData[] = [
    {
        id: 1,
        name: "Class 1",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Marigold",
                icon: "📖",
                chapters: [
                    { number: 1, title: "A Happy Child", pdfUrl: pdf(1, "english", 1) },
                    { number: 2, title: "Three Little Pigs", pdfUrl: pdf(1, "english", 2) },
                    { number: 3, title: "The Bubble, the Straw, and the Shoe", pdfUrl: pdf(1, "english", 3) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Rimjhim",
                icon: "🔤",
                chapters: [
                    { number: 1, title: "झूला", pdfUrl: pdf(1, "hindi", 1) },
                    { number: 2, title: "आम की कहानी", pdfUrl: pdf(1, "hindi", 2) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Math Magic",
                icon: "🔢",
                chapters: [
                    { number: 1, title: "Shapes and Space", pdfUrl: pdf(1, "math", 1) },
                    { number: 2, title: "Numbers from One to Nine", pdfUrl: pdf(1, "math", 2) },
                    { number: 3, title: "Addition", pdfUrl: pdf(1, "math", 3) },
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Class 2",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Marigold",
                icon: "📖",
                chapters: [
                    { number: 1, title: "First Day at School", pdfUrl: pdf(2, "english", 1) },
                    { number: 2, title: "Haldi's Adventure", pdfUrl: pdf(2, "english", 2) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Rimjhim",
                icon: "🔤",
                chapters: [
                    { number: 1, title: "ऊँट चला", pdfUrl: pdf(2, "hindi", 1) },
                    { number: 2, title: "भालू ने खेली फुटबॉल", pdfUrl: pdf(2, "hindi", 2) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Math Magic",
                icon: "🔢",
                chapters: [
                    { number: 1, title: "What is Long, What is Round?", pdfUrl: pdf(2, "math", 1) },
                    { number: 2, title: "Counting in Groups", pdfUrl: pdf(2, "math", 2) },
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Class 3",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Marigold",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Good Morning", pdfUrl: pdf(3, "english", 1) },
                    { number: 2, title: "The Magic Garden", pdfUrl: pdf(3, "english", 2) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Rimjhim",
                icon: "🔤",
                chapters: [
                    { number: 1, title: "कक्कू", pdfUrl: pdf(3, "hindi", 1) },
                    { number: 2, title: "शेखीबाज़ मक्खी", pdfUrl: pdf(3, "hindi", 2) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Math Magic",
                icon: "🔢",
                chapters: [
                    { number: 1, title: "Where to Look From", pdfUrl: pdf(3, "math", 1) },
                    { number: 2, title: "Fun with Numbers", pdfUrl: pdf(3, "math", 2) },
                ]
            },
            {
                id: "evs",
                name: "EVS",
                book: "Looking Around",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Poonam's Day Out", pdfUrl: pdf(3, "evs", 1) },
                    { number: 2, title: "The Plant Fairy", pdfUrl: pdf(3, "evs", 2) },
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Class 4",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Marigold",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Wake Up!", pdfUrl: pdf(4, "english", 1) },
                    { number: 2, title: "Neha's Alarm Clock", pdfUrl: pdf(4, "english", 2) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Rimjhim",
                icon: "🔤",
                chapters: [
                    { number: 1, title: "मन के भोले-भाले बादल", pdfUrl: pdf(4, "hindi", 1) },
                    { number: 2, title: "जैसा सवाल वैसा जवाब", pdfUrl: pdf(4, "hindi", 2) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Math Magic",
                icon: "🔢",
                chapters: [
                    { number: 1, title: "Building with Bricks", pdfUrl: pdf(4, "math", 1) },
                    { number: 2, title: "Long and Short", pdfUrl: pdf(4, "math", 2) },
                ]
            },
            {
                id: "evs",
                name: "EVS",
                book: "Looking Around",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Going to School", pdfUrl: pdf(4, "evs", 1) },
                    { number: 2, title: "Ear to Ear", pdfUrl: pdf(4, "evs", 2) },
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Class 5",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Marigold",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Wonderful Waste!", pdfUrl: pdf(5, "english", 1) },
                    { number: 2, title: "Flying Together", pdfUrl: pdf(5, "english", 2) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Rimjhim",
                icon: "🔤",
                chapters: [
                    { number: 1, title: "राख की रस्सी", pdfUrl: pdf(5, "hindi", 1) },
                    { number: 2, title: "फ़सलों के त्योहार", pdfUrl: pdf(5, "hindi", 2) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Math Magic",
                icon: "🔢",
                chapters: [
                    { number: 1, title: "The Fish Tale", pdfUrl: pdf(5, "math", 1) },
                    { number: 2, title: "Shapes and Angles", pdfUrl: pdf(5, "math", 2) },
                ]
            },
            {
                id: "evs",
                name: "EVS",
                book: "Looking Around",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Super Senses", pdfUrl: pdf(5, "evs", 1) },
                    { number: 2, title: "A Snake Charmer's Story", pdfUrl: pdf(5, "evs", 2) },
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Class 6",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Honeysuckle",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Who Did Patrick's Homework?", pdfUrl: pdf(6, "english", 1) },
                    { number: 2, title: "How the Dog Found Himself a New Master!", pdfUrl: pdf(6, "english", 2) },
                    { number: 3, title: "Taro's Reward", pdfUrl: pdf(6, "english", 3) },
                    { number: 4, title: "An Indian-American Woman in Space", pdfUrl: pdf(6, "english", 4) },
                    { number: 5, title: "A Different Kind of School", pdfUrl: pdf(6, "english", 5) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Vasant",
                icon: "🔤",
                chapters: [
                    { number: 1, title: "वह चिड़िया जो", pdfUrl: pdf(6, "hindi", 1) },
                    { number: 2, title: "बचपन", pdfUrl: pdf(6, "hindi", 2) },
                    { number: 3, title: "नादान दोस्त", pdfUrl: pdf(6, "hindi", 3) },
                    { number: 4, title: "चाँद से थोड़ी सी गप्पें", pdfUrl: pdf(6, "hindi", 4) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Knowing Our Numbers", pdfUrl: pdf(6, "math", 1) },
                    { number: 2, title: "Whole Numbers", pdfUrl: pdf(6, "math", 2) },
                    { number: 3, title: "Playing with Numbers", pdfUrl: pdf(6, "math", 3) },
                    { number: 4, title: "Basic Geometrical Ideas", pdfUrl: pdf(6, "math", 4) },
                    { number: 5, title: "Understanding Elementary Shapes", pdfUrl: pdf(6, "math", 5) },
                ]
            },
            {
                id: "science",
                name: "Science",
                book: "Science",
                icon: "🔬",
                chapters: [
                    { number: 1, title: "Food: Where Does It Come From?", pdfUrl: pdf(6, "science", 1) },
                    { number: 2, title: "Components of Food", pdfUrl: pdf(6, "science", 2) },
                    { number: 3, title: "Fibre to Fabric", pdfUrl: pdf(6, "science", 3) },
                    { number: 4, title: "Sorting Materials into Groups", pdfUrl: pdf(6, "science", 4) },
                ]
            },
            {
                id: "history",
                name: "History",
                book: "Our Pasts I",
                icon: "🏛️",
                chapters: [
                    { number: 1, title: "What, Where, How and When?", pdfUrl: pdf(6, "history", 1) },
                    { number: 2, title: "From Hunting–Gathering to Growing Food", pdfUrl: pdf(6, "history", 2) },
                ]
            },
            {
                id: "geography",
                name: "Geography",
                book: "The Earth: Our Habitat",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "The Earth in the Solar System", pdfUrl: pdf(6, "geography", 1) },
                    { number: 2, title: "Globe: Latitudes and Longitudes", pdfUrl: pdf(6, "geography", 2) },
                ]
            },
            {
                id: "civics",
                name: "Political Science",
                book: "Social and Political Life I",
                icon: "⚖️",
                chapters: [
                    { number: 1, title: "Understanding Diversity", pdfUrl: pdf(6, "civics", 1) },
                    { number: 2, title: "Diversity and Discrimination", pdfUrl: pdf(6, "civics", 2) },
                ]
            }
        ]
    },
    {
        id: 7,
        name: "Class 7",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Honeycomb",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Three Questions", pdfUrl: pdf(7, "english", 1) },
                    { number: 2, title: "A Gift of Chappals", pdfUrl: pdf(7, "english", 2) },
                    { number: 3, title: "Gopal and the Hilsa Fish", pdfUrl: pdf(7, "english", 3) },
                    { number: 4, title: "The Ashes That Made Trees Bloom", pdfUrl: pdf(7, "english", 4) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Vasant",
                icon: "🔤",
                chapters: [
                    { number: 1, title: "हम पंछी उन्मुक्त गगन के", pdfUrl: pdf(7, "hindi", 1) },
                    { number: 2, title: "दादी माँ", pdfUrl: pdf(7, "hindi", 2) },
                    { number: 3, title: "हिमालय की बेटियाँ", pdfUrl: pdf(7, "hindi", 3) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Integers", pdfUrl: pdf(7, "math", 1) },
                    { number: 2, title: "Fractions and Decimals", pdfUrl: pdf(7, "math", 2) },
                    { number: 3, title: "Data Handling", pdfUrl: pdf(7, "math", 3) },
                    { number: 4, title: "Simple Equations", pdfUrl: pdf(7, "math", 4) },
                ]
            },
            {
                id: "science",
                name: "Science",
                book: "Science",
                icon: "🔬",
                chapters: [
                    { number: 1, title: "Nutrition in Plants", pdfUrl: pdf(7, "science", 1) },
                    { number: 2, title: "Nutrition in Animals", pdfUrl: pdf(7, "science", 2) },
                    { number: 3, title: "Fibre to Fabric", pdfUrl: pdf(7, "science", 3) },
                    { number: 4, title: "Heat", pdfUrl: pdf(7, "science", 4) },
                ]
            },
            {
                id: "history",
                name: "History",
                book: "Our Pasts II",
                icon: "🏛️",
                chapters: [
                    { number: 1, title: "Tracing Changes Through a Thousand Years", pdfUrl: pdf(7, "history", 1) },
                    { number: 2, title: "New Kings and Kingdoms", pdfUrl: pdf(7, "history", 2) },
                ]
            },
            {
                id: "geography",
                name: "Geography",
                book: "Our Environment",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Environment", pdfUrl: pdf(7, "geography", 1) },
                    { number: 2, title: "Inside Our Earth", pdfUrl: pdf(7, "geography", 2) },
                ]
            },
            {
                id: "civics",
                name: "Political Science",
                book: "Social and Political Life II",
                icon: "⚖️",
                chapters: [
                    { number: 1, title: "On Equality", pdfUrl: pdf(7, "civics", 1) },
                    { number: 2, title: "Role of the Government in Health", pdfUrl: pdf(7, "civics", 2) },
                ]
            }
        ]
    },
    {
        id: 8,
        name: "Class 8",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Honeydew",
                icon: "📖",
                chapters: [
                    { number: 1, title: "The Best Christmas Present in the World", pdfUrl: pdf(8, "english", 1) },
                    { number: 2, title: "The Tsunami", pdfUrl: pdf(8, "english", 2) },
                    { number: 3, title: "Glimpses of the Past", pdfUrl: pdf(8, "english", 3) },
                    { number: 4, title: "Bepin Choudhury's Lapse of Memory", pdfUrl: pdf(8, "english", 4) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Vasant",
                icon: "🔤",
                chapters: [
                    { number: 1, title: "ध्वनि", pdfUrl: pdf(8, "hindi", 1) },
                    { number: 2, title: "लाख की चूड़ियाँ", pdfUrl: pdf(8, "hindi", 2) },
                    { number: 3, title: "बस की यात्रा", pdfUrl: pdf(8, "hindi", 3) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Rational Numbers", pdfUrl: pdf(8, "math", 1) },
                    { number: 2, title: "Linear Equations in One Variable", pdfUrl: pdf(8, "math", 2) },
                    { number: 3, title: "Understanding Quadrilaterals", pdfUrl: pdf(8, "math", 3) },
                    { number: 4, title: "Practical Geometry", pdfUrl: pdf(8, "math", 4) },
                ]
            },
            {
                id: "science",
                name: "Science",
                book: "Science",
                icon: "🔬",
                chapters: [
                    { number: 1, title: "Crop Production and Management", pdfUrl: pdf(8, "science", 1) },
                    { number: 2, title: "Microorganisms: Friend and Foe", pdfUrl: pdf(8, "science", 2) },
                    { number: 3, title: "Synthetic Fibres and Plastics", pdfUrl: pdf(8, "science", 3) },
                    { number: 4, title: "Materials: Metals and Non-metals", pdfUrl: pdf(8, "science", 4) },
                ]
            },
            {
                id: "history",
                name: "History",
                book: "Our Pasts III",
                icon: "🏛️",
                chapters: [
                    { number: 1, title: "How, When and Where", pdfUrl: pdf(8, "history", 1) },
                    { number: 2, title: "From Trade to Territory", pdfUrl: pdf(8, "history", 2) },
                ]
            },
            {
                id: "geography",
                name: "Geography",
                book: "Resources and Development",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Resources", pdfUrl: pdf(8, "geography", 1) },
                    { number: 2, title: "Land, Soil, Water, Natural Vegetation and Wildlife Resources", pdfUrl: pdf(8, "geography", 2) },
                ]
            },
            {
                id: "civics",
                name: "Political Science",
                book: "Social and Political Life III",
                icon: "⚖️",
                chapters: [
                    { number: 1, title: "The Indian Constitution", pdfUrl: pdf(8, "civics", 1) },
                    { number: 2, title: "Understanding Secularism", pdfUrl: pdf(8, "civics", 2) },
                ]
            }
        ]
    },
    {
        id: 9,
        name: "Class 9",
        subjects: [
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Number Systems", pdfUrl: pdf(9, "math", 1) },
                    { number: 2, title: "Polynomials", pdfUrl: pdf(9, "math", 2) },
                    { number: 3, title: "Coordinate Geometry", pdfUrl: pdf(9, "math", 3) },
                    { number: 4, title: "Linear Equations in Two Variables", pdfUrl: pdf(9, "math", 4) },
                    { number: 5, title: "Introduction to Euclid's Geometry", pdfUrl: pdf(9, "math", 5) },
                    { number: 6, title: "Lines and Angles", pdfUrl: pdf(9, "math", 6) },
                    { number: 7, title: "Triangles", pdfUrl: pdf(9, "math", 7) },
                    { number: 8, title: "Quadrilaterals", pdfUrl: pdf(9, "math", 8) },
                    { number: 9, title: "Areas of Parallelograms and Triangles", pdfUrl: pdf(9, "math", 9) },
                    { number: 10, title: "Circles", pdfUrl: pdf(9, "math", 10) },
                    { number: 11, title: "Constructions", pdfUrl: pdf(9, "math", 11) },
                    { number: 12, title: "Heron's Formula", pdfUrl: pdf(9, "math", 12) },
                    { number: 13, title: "Surface Areas and Volumes", pdfUrl: pdf(9, "math", 13) },
                    { number: 14, title: "Statistics", pdfUrl: pdf(9, "math", 14) },
                    { number: 15, title: "Probability", pdfUrl: pdf(9, "math", 15) },
                ]
            },
            {
                id: "science",
                name: "Science",
                book: "Science",
                icon: "🔬",
                chapters: [
                    { number: 1, title: "Matter in Our Surroundings", pdfUrl: pdf(9, "science", 1) },
                    { number: 2, title: "Is Matter Around Us Pure?", pdfUrl: pdf(9, "science", 2) },
                    { number: 3, title: "Atoms and Molecules", pdfUrl: pdf(9, "science", 3) },
                    { number: 4, title: "Structure of the Atom", pdfUrl: pdf(9, "science", 4) },
                    { number: 5, title: "The Fundamental Unit of Life", pdfUrl: pdf(9, "science", 5) },
                    { number: 6, title: "Tissues", pdfUrl: pdf(9, "science", 6) },
                    { number: 7, title: "Diversity in Living Organisms", pdfUrl: pdf(9, "science", 7) },
                    { number: 8, title: "Motion", pdfUrl: pdf(9, "science", 8) },
                    { number: 9, title: "Force and Laws of Motion", pdfUrl: pdf(9, "science", 9) },
                    { number: 10, title: "Gravitation", pdfUrl: pdf(9, "science", 10) },
                    { number: 11, title: "Work and Energy", pdfUrl: pdf(9, "science", 11) },
                    { number: 12, title: "Sound", pdfUrl: pdf(9, "science", 12) },
                    { number: 13, title: "Why Do We Fall Ill", pdfUrl: pdf(9, "science", 13) },
                    { number: 14, title: "Natural Resources", pdfUrl: pdf(9, "science", 14) },
                    { number: 15, title: "Improvement in Food Resources", pdfUrl: pdf(9, "science", 15) },
                ]
            },
            {
                id: "english",
                name: "English",
                book: "Beehive",
                icon: "📖",
                chapters: [
                    { number: 1, title: "The Fun They Had", pdfUrl: pdf(9, "english", 1) },
                    { number: 2, title: "The Sound of Music", pdfUrl: pdf(9, "english", 2) },
                    { number: 3, title: "The Little Girl", pdfUrl: pdf(9, "english", 3) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Kshitij & Kritika",
                icon: "🔤",
                chapters: [
                    { number: 1, title: "दो बैलों की कथा", pdfUrl: pdf(9, "hindi", 1) },
                    { number: 2, title: "ल्हासा की ओर", pdfUrl: pdf(9, "hindi", 2) },
                ]
            },
            {
                id: "history",
                name: "History",
                book: "India and the Contemporary World I",
                icon: "🏛️",
                chapters: [
                    { number: 1, title: "The French Revolution", pdfUrl: pdf(9, "history", 1) },
                    { number: 2, title: "Socialism in Europe and the Russian Revolution", pdfUrl: pdf(9, "history", 2) },
                ]
            },
            {
                id: "civics",
                name: "Political Science",
                book: "Democratic Politics I",
                icon: "⚖️",
                chapters: [
                    { number: 1, title: "What is Democracy? Why Democracy?", pdfUrl: pdf(9, "civics", 1) },
                    { number: 2, title: "Constitutional Design", pdfUrl: pdf(9, "civics", 2) },
                ]
            },
            {
                id: "geography",
                name: "Geography",
                book: "Contemporary India I",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "India – Size and Location", pdfUrl: pdf(9, "geography", 1) },
                    { number: 2, title: "Physical Features of India", pdfUrl: pdf(9, "geography", 2) },
                ]
            }
        ]
    },
    {
        id: 10,
        name: "Class 10",
        subjects: [
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Real Numbers", pdfUrl: pdf(10, "math", 1) },
                    { number: 2, title: "Polynomials", pdfUrl: pdf(10, "math", 2) },
                    { number: 3, title: "Pair of Linear Equations in Two Variables", pdfUrl: pdf(10, "math", 3) },
                    { number: 4, title: "Quadratic Equations", pdfUrl: pdf(10, "math", 4) },
                    { number: 5, title: "Arithmetic Progressions", pdfUrl: pdf(10, "math", 5) },
                    { number: 6, title: "Triangles", pdfUrl: pdf(10, "math", 6) },
                    { number: 7, title: "Coordinate Geometry", pdfUrl: pdf(10, "math", 7) },
                    { number: 8, title: "Introduction to Trigonometry", pdfUrl: pdf(10, "math", 8) },
                    { number: 9, title: "Some Applications of Trigonometry", pdfUrl: pdf(10, "math", 9) },
                    { number: 10, title: "Circles", pdfUrl: pdf(10, "math", 10) },
                    { number: 11, title: "Constructions", pdfUrl: pdf(10, "math", 11) },
                    { number: 12, title: "Areas Related to Circles", pdfUrl: pdf(10, "math", 12) },
                    { number: 13, title: "Surface Areas and Volumes", pdfUrl: pdf(10, "math", 13) },
                    { number: 14, title: "Statistics", pdfUrl: pdf(10, "math", 14) },
                    { number: 15, title: "Probability", pdfUrl: pdf(10, "math", 15) },
                ]
            },
            {
                id: "science",
                name: "Science",
                book: "Science",
                icon: "🔬",
                chapters: [
                    { number: 1, title: "Chemical Reactions and Equations", pdfUrl: pdf(10, "science", 1) },
                    { number: 2, title: "Acids, Bases and Salts", pdfUrl: pdf(10, "science", 2) },
                    { number: 3, title: "Metals and Non-metals", pdfUrl: pdf(10, "science", 3) },
                    { number: 4, title: "Carbon and its Compounds", pdfUrl: pdf(10, "science", 4) },
                    { number: 5, title: "Periodic Classification of Elements", pdfUrl: pdf(10, "science", 5) },
                    { number: 6, title: "Life Processes", pdfUrl: pdf(10, "science", 6) },
                    { number: 7, title: "Control and Coordination", pdfUrl: pdf(10, "science", 7) },
                    { number: 8, title: "How do Organisms Reproduce?", pdfUrl: pdf(10, "science", 8) },
                    { number: 9, title: "Heredity and Evolution", pdfUrl: pdf(10, "science", 9) },
                    { number: 10, title: "Light - Reflection and Refraction", pdfUrl: pdf(10, "science", 10) },
                    { number: 11, title: "Human Eye and Colourful World", pdfUrl: pdf(10, "science", 11) },
                    { number: 12, title: "Electricity", pdfUrl: pdf(10, "science", 12) },
                    { number: 13, title: "Magnetic Effects of Electric Current", pdfUrl: pdf(10, "science", 13) },
                    { number: 14, title: "Sources of Energy", pdfUrl: pdf(10, "science", 14) },
                    { number: 15, title: "Our Environment", pdfUrl: pdf(10, "science", 15) },
                    { number: 16, title: "Sustainable Management of Natural Resources", pdfUrl: pdf(10, "science", 16) },
                ]
            },
            {
                id: "english",
                name: "English",
                book: "First Flight",
                icon: "📖",
                chapters: [
                    { number: 1, title: "A Letter to God", pdfUrl: pdf(10, "english", 1) },
                    { number: 2, title: "Nelson Mandela: Long Walk to Freedom", pdfUrl: pdf(10, "english", 2) },
                    { number: 3, title: "Two Stories about Flying", pdfUrl: pdf(10, "english", 3) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Kshitij & Kritika",
                icon: "🔤",
                chapters: [
                    { number: 1, title: "सूरदास के पद", pdfUrl: pdf(10, "hindi", 1) },
                    { number: 2, title: "राम-लक्ष्मण-परशुराम संवाद", pdfUrl: pdf(10, "hindi", 2) },
                ]
            },
            {
                id: "history",
                name: "History",
                book: "India and the Contemporary World II",
                icon: "🏛️",
                chapters: [
                    { number: 1, title: "The Rise of Nationalism in Europe", pdfUrl: pdf(10, "history", 1) },
                    { number: 2, title: "Nationalism in India", pdfUrl: pdf(10, "history", 2) },
                ]
            },
            {
                id: "civics",
                name: "Political Science",
                book: "Democratic Politics II",
                icon: "⚖️",
                chapters: [
                    { number: 1, title: "Power Sharing", pdfUrl: pdf(10, "civics", 1) },
                    { number: 2, title: "Federalism", pdfUrl: pdf(10, "civics", 2) },
                ]
            },
            {
                id: "geography",
                name: "Geography",
                book: "Contemporary India II",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Resources and Development", pdfUrl: pdf(10, "geography", 1) },
                    { number: 2, title: "Forest and Wildlife Resources", pdfUrl: pdf(10, "geography", 2) },
                ]
            }
        ]
    },
    {
        id: 11,
        name: "Class 11",
        subjects: [
            {
                id: "physics",
                name: "Physics",
                book: "Physics Part I & II",
                icon: "⚛️",
                chapters: [
                    { number: 1, title: "Physical World", pdfUrl: pdf(11, "physics", 1) },
                    { number: 2, title: "Units and Measurements", pdfUrl: pdf(11, "physics", 2) },
                    { number: 3, title: "Motion in a Straight Line", pdfUrl: pdf(11, "physics", 3) },
                    { number: 4, title: "Motion in a Plane", pdfUrl: pdf(11, "physics", 4) },
                    { number: 5, title: "Laws of Motion", pdfUrl: pdf(11, "physics", 5) },
                    { number: 6, title: "Work, Energy and Power", pdfUrl: pdf(11, "physics", 6) },
                    { number: 7, title: "System of Particles and Rotational Motion", pdfUrl: pdf(11, "physics", 7) },
                    { number: 8, title: "Gravitation", pdfUrl: pdf(11, "physics", 8) },
                    { number: 9, title: "Mechanical Properties of Solids", pdfUrl: pdf(11, "physics", 9) },
                    { number: 10, title: "Mechanical Properties of Fluids", pdfUrl: pdf(11, "physics", 10) },
                    { number: 11, title: "Thermal Properties of Matter", pdfUrl: pdf(11, "physics", 11) },
                    { number: 12, title: "Thermodynamics", pdfUrl: pdf(11, "physics", 12) },
                    { number: 13, title: "Kinetic Theory", pdfUrl: pdf(11, "physics", 13) },
                    { number: 14, title: "Oscillations", pdfUrl: pdf(11, "physics", 14) },
                    { number: 15, title: "Waves", pdfUrl: pdf(11, "physics", 15) },
                ]
            },
            {
                id: "chemistry",
                name: "Chemistry",
                book: "Chemistry Part I & II",
                icon: "🧪",
                chapters: [
                    { number: 1, title: "Some Basic Concepts of Chemistry", pdfUrl: pdf(11, "chemistry", 1) },
                    { number: 2, title: "Structure of Atom", pdfUrl: pdf(11, "chemistry", 2) },
                    { number: 3, title: "Classification of Elements and Periodicity in Properties", pdfUrl: pdf(11, "chemistry", 3) },
                    { number: 4, title: "Chemical Bonding and Molecular Structure", pdfUrl: pdf(11, "chemistry", 4) },
                    { number: 5, title: "States of Matter", pdfUrl: pdf(11, "chemistry", 5) },
                    { number: 6, title: "Thermodynamics", pdfUrl: pdf(11, "chemistry", 6) },
                    { number: 7, title: "Equilibrium", pdfUrl: pdf(11, "chemistry", 7) },
                    { number: 8, title: "Redox Reactions", pdfUrl: pdf(11, "chemistry", 8) },
                    { number: 9, title: "Hydrogen", pdfUrl: pdf(11, "chemistry", 9) },
                    { number: 10, title: "The s-Block Elements", pdfUrl: pdf(11, "chemistry", 10) },
                    { number: 11, title: "The p-Block Elements", pdfUrl: pdf(11, "chemistry", 11) },
                    { number: 12, title: "Organic Chemistry - Some Basic Principles and Techniques", pdfUrl: pdf(11, "chemistry", 12) },
                    { number: 13, title: "Hydrocarbons", pdfUrl: pdf(11, "chemistry", 13) },
                    { number: 14, title: "Environmental Chemistry", pdfUrl: pdf(11, "chemistry", 14) },
                ]
            },
            {
                id: "biology",
                name: "Biology",
                book: "Biology",
                icon: "🧬",
                chapters: [
                    { number: 1, title: "The Living World", pdfUrl: pdf(11, "biology", 1) },
                    { number: 2, title: "Biological Classification", pdfUrl: pdf(11, "biology", 2) },
                    { number: 3, title: "Plant Kingdom", pdfUrl: pdf(11, "biology", 3) },
                    { number: 4, title: "Animal Kingdom", pdfUrl: pdf(11, "biology", 4) },
                    { number: 5, title: "Morphology of Flowering Plants", pdfUrl: pdf(11, "biology", 5) },
                    { number: 6, title: "Anatomy of Flowering Plants", pdfUrl: pdf(11, "biology", 6) },
                    { number: 7, title: "Structural Organisation in Animals", pdfUrl: pdf(11, "biology", 7) },
                    { number: 8, title: "Cell: The Unit of Life", pdfUrl: pdf(11, "biology", 8) },
                    { number: 9, title: "Biomolecules", pdfUrl: pdf(11, "biology", 9) },
                    { number: 10, title: "Cell Cycle and Cell Division", pdfUrl: pdf(11, "biology", 10) },
                    { number: 11, title: "Transport in Plants", pdfUrl: pdf(11, "biology", 11) },
                    { number: 12, title: "Mineral Nutrition", pdfUrl: pdf(11, "biology", 12) },
                    { number: 13, title: "Photosynthesis in Higher Plants", pdfUrl: pdf(11, "biology", 13) },
                    { number: 14, title: "Respiration in Plants", pdfUrl: pdf(11, "biology", 14) },
                    { number: 15, title: "Plant Growth and Development", pdfUrl: pdf(11, "biology", 15) },
                    { number: 16, title: "Digestion and Absorption", pdfUrl: pdf(11, "biology", 16) },
                    { number: 17, title: "Breathing and Exchange of Gases", pdfUrl: pdf(11, "biology", 17) },
                    { number: 18, title: "Body Fluids and Circulation", pdfUrl: pdf(11, "biology", 18) },
                    { number: 19, title: "Excretory Products and their Elimination", pdfUrl: pdf(11, "biology", 19) },
                    { number: 20, title: "Locomotion and Movement", pdfUrl: pdf(11, "biology", 20) },
                    { number: 21, title: "Neural Control and Coordination", pdfUrl: pdf(11, "biology", 21) },
                    { number: 22, title: "Chemical Coordination and Integration", pdfUrl: pdf(11, "biology", 22) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Sets", pdfUrl: pdf(11, "math", 1) },
                    { number: 2, title: "Relations and Functions", pdfUrl: pdf(11, "math", 2) },
                    { number: 3, title: "Trigonometric Functions", pdfUrl: pdf(11, "math", 3) },
                    { number: 4, title: "Principle of Mathematical Induction", pdfUrl: pdf(11, "math", 4) },
                    { number: 5, title: "Complex Numbers and Quadratic Equations", pdfUrl: pdf(11, "math", 5) },
                    { number: 6, title: "Linear Inequalities", pdfUrl: pdf(11, "math", 6) },
                    { number: 7, title: "Permutations and Combinations", pdfUrl: pdf(11, "math", 7) },
                    { number: 8, title: "Binomial Theorem", pdfUrl: pdf(11, "math", 8) },
                    { number: 9, title: "Sequences and Series", pdfUrl: pdf(11, "math", 9) },
                    { number: 10, title: "Straight Lines", pdfUrl: pdf(11, "math", 10) },
                    { number: 11, title: "Conic Sections", pdfUrl: pdf(11, "math", 11) },
                    { number: 12, title: "Introduction to Three Dimensional Geometry", pdfUrl: pdf(11, "math", 12) },
                    { number: 13, title: "Limits and Derivatives", pdfUrl: pdf(11, "math", 13) },
                    { number: 14, title: "Mathematical Reasoning", pdfUrl: pdf(11, "math", 14) },
                    { number: 15, title: "Statistics", pdfUrl: pdf(11, "math", 15) },
                    { number: 16, title: "Probability", pdfUrl: pdf(11, "math", 16) },
                ]
            },
            {
                id: "english",
                name: "English",
                book: "Hornbill & Snapshots",
                icon: "📖",
                chapters: [
                    { number: 1, title: "The Portrait of a Lady", pdfUrl: pdf(11, "english", 1) },
                    { number: 2, title: "We're Not Afraid to Die", pdfUrl: pdf(11, "english", 2) },
                    { number: 3, title: "Discovering Tut: the Saga Continues", pdfUrl: pdf(11, "english", 3) },
                ]
            }
        ]
    },
    {
        id: 12,
        name: "Class 12",
        subjects: [
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics Part I & II",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Relations and Functions", pdfUrl: pdf(12, "math", 1) },
                    { number: 2, title: "Inverse Trigonometric Functions", pdfUrl: pdf(12, "math", 2) },
                    { number: 3, title: "Matrices", pdfUrl: pdf(12, "math", 3) },
                    { number: 4, title: "Determinants", pdfUrl: pdf(12, "math", 4) },
                    { number: 5, title: "Continuity and Differentiability", pdfUrl: pdf(12, "math", 5) },
                    { number: 6, title: "Application of Derivatives", pdfUrl: pdf(12, "math", 6) },
                    { number: 7, title: "Integrals", pdfUrl: pdf(12, "math", 7) },
                    { number: 8, title: "Application of Integrals", pdfUrl: pdf(12, "math", 8) },
                    { number: 9, title: "Differential Equations", pdfUrl: pdf(12, "math", 9) },
                    { number: 10, title: "Vector Algebra", pdfUrl: pdf(12, "math", 10) },
                    { number: 11, title: "Three Dimensional Geometry", pdfUrl: pdf(12, "math", 11) },
                    { number: 12, title: "Linear Programming", pdfUrl: pdf(12, "math", 12) },
                    { number: 13, title: "Probability", pdfUrl: pdf(12, "math", 13) },
                ]
            },
            {
                id: "physics",
                name: "Physics",
                book: "Physics Part I & II",
                icon: "⚛️",
                chapters: [
                    { number: 1, title: "Electric Charges and Fields", pdfUrl: pdf(12, "physics", 1) },
                    { number: 2, title: "Electrostatic Potential and Capacitance", pdfUrl: pdf(12, "physics", 2) },
                    { number: 3, title: "Current Electricity", pdfUrl: pdf(12, "physics", 3) },
                    { number: 4, title: "Moving Charges and Magnetism", pdfUrl: pdf(12, "physics", 4) },
                    { number: 5, title: "Magnetism and Matter", pdfUrl: pdf(12, "physics", 5) },
                    { number: 6, title: "Electromagnetic Induction", pdfUrl: pdf(12, "physics", 6) },
                    { number: 7, title: "Alternating Current", pdfUrl: pdf(12, "physics", 7) },
                    { number: 8, title: "Electromagnetic Waves", pdfUrl: pdf(12, "physics", 8) },
                    { number: 9, title: "Ray Optics and Optical Instruments", pdfUrl: pdf(12, "physics", 9) },
                    { number: 10, title: "Wave Optics", pdfUrl: pdf(12, "physics", 10) },
                    { number: 11, title: "Dual Nature of Radiation and Matter", pdfUrl: pdf(12, "physics", 11) },
                    { number: 12, title: "Atoms", pdfUrl: pdf(12, "physics", 12) },
                    { number: 13, title: "Nuclei", pdfUrl: pdf(12, "physics", 13) },
                    { number: 14, title: "Semiconductor Electronics", pdfUrl: pdf(12, "physics", 14) },
                ]
            },
            {
                id: "chemistry",
                name: "Chemistry",
                book: "Chemistry Part I & II",
                icon: "🧪",
                chapters: [
                    { number: 1, title: "The Solid State", pdfUrl: pdf(12, "chemistry", 1) },
                    { number: 2, title: "Solutions", pdfUrl: pdf(12, "chemistry", 2) },
                    { number: 3, title: "Electrochemistry", pdfUrl: pdf(12, "chemistry", 3) },
                    { number: 4, title: "Chemical Kinetics", pdfUrl: pdf(12, "chemistry", 4) },
                    { number: 5, title: "Surface Chemistry", pdfUrl: pdf(12, "chemistry", 5) },
                    { number: 6, title: "General Principles and Processes of Isolation of Elements", pdfUrl: pdf(12, "chemistry", 6) },
                    { number: 7, title: "The p-Block Elements", pdfUrl: pdf(12, "chemistry", 7) },
                    { number: 8, title: "The d- and f-Block Elements", pdfUrl: pdf(12, "chemistry", 8) },
                    { number: 9, title: "Coordination Compounds", pdfUrl: pdf(12, "chemistry", 9) },
                    { number: 10, title: "Haloalkanes and Haloarenes", pdfUrl: pdf(12, "chemistry", 10) },
                    { number: 11, title: "Alcohols, Phenols and Ethers", pdfUrl: pdf(12, "chemistry", 11) },
                    { number: 12, title: "Aldehydes, Ketones and Carboxylic Acids", pdfUrl: pdf(12, "chemistry", 12) },
                    { number: 13, title: "Amines", pdfUrl: pdf(12, "chemistry", 13) },
                    { number: 14, title: "Biomolecules", pdfUrl: pdf(12, "chemistry", 14) },
                    { number: 15, title: "Polymers", pdfUrl: pdf(12, "chemistry", 15) },
                    { number: 16, title: "Chemistry in Everyday Life", pdfUrl: pdf(12, "chemistry", 16) },
                ]
            },
            {
                id: "biology",
                name: "Biology",
                book: "Biology",
                icon: "🧬",
                chapters: [
                    { number: 1, title: "Reproduction in Organisms", pdfUrl: pdf(12, "biology", 1) },
                    { number: 2, title: "Sexual Reproduction in Flowering Plants", pdfUrl: pdf(12, "biology", 2) },
                    { number: 3, title: "Human Reproduction", pdfUrl: pdf(12, "biology", 3) },
                    { number: 4, title: "Reproductive Health", pdfUrl: pdf(12, "biology", 4) },
                    { number: 5, title: "Principles of Inheritance and Variation", pdfUrl: pdf(12, "biology", 5) },
                    { number: 6, title: "Molecular Basis of Inheritance", pdfUrl: pdf(12, "biology", 6) },
                    { number: 7, title: "Evolution", pdfUrl: pdf(12, "biology", 7) },
                    { number: 8, title: "Human Health and Diseases", pdfUrl: pdf(12, "biology", 8) },
                    { number: 9, title: "Strategies for Enhancement in Food Production", pdfUrl: pdf(12, "biology", 9) },
                    { number: 10, title: "Microbes in Human Welfare", pdfUrl: pdf(12, "biology", 10) },
                    { number: 11, title: "Biotechnology: Principles and Processes", pdfUrl: pdf(12, "biology", 11) },
                    { number: 12, title: "Biotechnology and its Applications", pdfUrl: pdf(12, "biology", 12) },
                    { number: 13, title: "Organisms and Populations", pdfUrl: pdf(12, "biology", 13) },
                    { number: 14, title: "Ecosystem", pdfUrl: pdf(12, "biology", 14) },
                    { number: 15, title: "Biodiversity and Conservation", pdfUrl: pdf(12, "biology", 15) },
                    { number: 16, title: "Environmental Issues", pdfUrl: pdf(12, "biology", 16) },
                ]
            },
            {
                id: "english",
                name: "English",
                book: "Flamingo & Vistas",
                icon: "📖",
                chapters: [
                    { number: 1, title: "The Last Lesson", pdfUrl: pdf(12, "english", 1) },
                    { number: 2, title: "Lost Spring", pdfUrl: pdf(12, "english", 2) },
                    { number: 3, title: "Deep Water", pdfUrl: pdf(12, "english", 3) },
                ]
            }
        ]
    }
];

// Helper function to get class by ID
export function getClassById(id: number): ClassData | undefined {
    return classes.find(c => c.id === id);
}

// Helper function to get subject
export function getSubject(classId: number, subjectId: string): Subject | undefined {
    const classData = getClassById(classId);
    return classData?.subjects.find(s => s.id === subjectId);
}

// Search function for chapters
export interface SearchResult {
    classId: number;
    className: string;
    subjectId: string;
    subjectName: string;
    chapter: Chapter;
}

export function searchChapters(query: string): SearchResult[] {
    if (!query || query.length < 2) return [];

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    for (const classData of classes) {
        for (const subject of classData.subjects) {
            for (const chapter of subject.chapters) {
                if (chapter.title.toLowerCase().includes(lowerQuery)) {
                    results.push({
                        classId: classData.id,
                        className: classData.name,
                        subjectId: subject.id,
                        subjectName: subject.name,
                        chapter: chapter
                    });
                }
            }
        }
    }

    return results.slice(0, 10); // Limit to 10 results
}
