const PDFDocument = require('pdfkit');
const catFacts = require('cat-facts');
const fs = require('fs');

const doc = new PDFDocument;
let randomFact = catFacts.random();


doc.pipe(fs.createWriteStream('output.pdf'));
doc.text(randomFact);
doc.end();