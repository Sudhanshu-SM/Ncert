# NCERT PDFs Self-Hosting Guide

This folder contains all NCERT textbook PDFs organized by class and subject.

## Folder Structure

```
pdfs/
├── class-1/
│   ├── english/
│   │   ├── chapter-1.pdf
│   │   ├── chapter-2.pdf
│   │   └── full-book.pdf
│   ├── hindi/
│   ├── math/
│   └── ...
├── class-2/
├── ...
└── class-12/
    ├── physics/
    ├── chemistry/
    ├── biology/
    ├── math/
    └── english/
```

## How to Add PDFs

### Step 1: Download PDFs from NCERT

1. Go to **https://ncert.nic.in/textbook.php**
2. Select the **Class** (e.g., Class 12)
3. Select the **Subject** (e.g., Physics)
4. Select the **Book** (e.g., Physics Part I)
5. Download each chapter PDF

### Step 2: Rename and Organize

Rename each downloaded PDF to match the expected format:
- `chapter-1.pdf`
- `chapter-2.pdf`
- etc.

Place them in the appropriate folder:
- Class 12 Physics → `pdfs/class-12/physics/`
- Class 10 Science → `pdfs/class-10/science/`
- etc.

### Step 3: (Optional) Add Full Book PDF

If you want the "Download Full Book" button to work, add:
- `full-book.pdf` in each subject folder

## PDF Naming Convention

| Chapter | Filename |
|---------|----------|
| Chapter 1 | `chapter-1.pdf` |
| Chapter 2 | `chapter-2.pdf` |
| Chapter 3 | `chapter-3.pdf` |
| ... | ... |
| Full Book | `full-book.pdf` |

## Subject Folder Names

| Subject | Folder Name |
|---------|-------------|
| Mathematics | `math` |
| Physics | `physics` |
| Chemistry | `chemistry` |
| Biology | `biology` |
| English | `english` |
| Hindi | `hindi` |
| Science | `science` |
| History | `history` |
| Geography | `geography` |
| Political Science | `civics` |
| EVS | `evs` |

## GitHub LFS (For Large Files)

If using GitHub and your repo gets too large, consider using Git LFS:

```bash
# Install Git LFS
git lfs install

# Track PDF files
git lfs track "*.pdf"

# Add .gitattributes
git add .gitattributes

# Commit and push
git add .
git commit -m "Add NCERT PDFs"
git push
```

## File Size Estimates

| Classes | Est. Size |
|---------|-----------|
| 1-5 (Primary) | ~500MB |
| 6-8 (Middle) | ~1GB |
| 9-10 (Secondary) | ~1.5GB |
| 11-12 (Senior) | ~2GB |
| **Total** | **~5GB** |

## Alternative: CDN Hosting

For production, consider hosting PDFs on:
- **Cloudflare R2** (10GB free, no egress fees)
- **Vercel Blob** (1GB free)
- **AWS S3** (pay as you go)

Then update the `pdf()` function in `data/books.ts` to point to your CDN URL.
