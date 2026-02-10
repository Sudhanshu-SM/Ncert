import { classes, searchChapters } from './data/books';

console.log("--- START TEST ---");

const queries = ["Math", "Science", "Shapes", "Algebra"];

queries.forEach(q => {
    const results = searchChapters(q);
    console.log(`Query: "${q}" -> Found ${results.length} results.`);
    if (results.length > 0) {
        console.log(`First result: ${results[0].chapter.title} (${results[0].subjectName})`);
    }
});

console.log("--- END TEST ---");
