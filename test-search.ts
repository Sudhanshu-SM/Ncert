import { classes, searchChapters } from './data/books';

console.log("Checking data integrity...");
let errors = 0;

classes.forEach(c => {
    if (!c.subjects) {
        console.error(`ERROR: Class ${c.id} has no subjects!`);
        errors++;
        return;
    }
    c.subjects.forEach(s => {
        if (!s.chapters) {
            console.error(`ERROR: Subject ${s.id} in Class ${c.id} has no chapters array!`);
            errors++;
        } else {
            // Check for undefined chapters
            s.chapters.forEach((ch, idx) => {
                if (!ch) {
                    console.error(`ERROR: Subject ${s.id} in Class ${c.id} has undefined chapter at index ${idx}`);
                    errors++;
                } else if (!ch.title) {
                    console.error(`ERROR: Subject ${s.id} in Class ${c.id} chapter ${ch.number} has no title`);
                    errors++;
                }
            });
        }
    });
});

if (errors === 0) {
    console.log("Data structure looks correct (no missing subjects/chapters arrays).");
} else {
    console.log(`Found ${errors} data integrity errors.`);
}

console.log("\nTesting search function...");
try {
    const results = searchChapters("Math");
    console.log(`Search for 'Math' returned ${results.length} results.`);
} catch (e) {
    console.error("CRITICAL: searchChapters('Math') crashed!", e);
}

try {
    const results = searchChapters("Science");
    console.log(`Search for 'Science' returned ${results.length} results.`);
} catch (e) {
    console.error("CRITICAL: searchChapters('Science') crashed!", e);
}

try {
    const results = searchChapters("x"); // Short query
    console.log(`Search for 'x' returned ${results.length} results (expected 0/empty).`);
} catch (e) {
    console.error("CRITICAL: searchChapters('x') crashed!", e);
}

console.log("Done.");
