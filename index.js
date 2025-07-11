import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));

app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));

app.use((req, res) => res.status(404).sendFile(path.join(__dirname, '404.html')))

//manages the port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is up and running at http://localhost:${PORT}`)
});

// import http from 'http';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// //create server
// const server = http.createServer(function (req, res) {
//     //case we're looking at is the req.url
//     const urlPath = req.url;

//     //when this case switches we want to display different web pages
//     switch(urlPath) {
//         //case for entry to site, via index.html
//         case '/':
//             fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
//                 //if error is received during loading of page
//                 if(err) {
//                     res.writeHead(500, {'content-type': 'text/plain'});
//                     res.end('Index.html did not load');
//                     console.log('Site not loading');
//                 //we write this content if no errors during load
//                 //status 200 OK signals clean load
//                 } else {
//                     res.writeHead(200, {'content-type': 'text/html'});
//                     res.end(data);
//                 }
//             });
//             //must have break at end of each case or code will spill into next case
//             break;
        
//             //case for /about page
//         case '/about':
//             fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
//                 if(err) {
//                     res.writeHead(500, {'content-type': 'text/plain'});
//                     res.end('About page did not load');
//                     console.log('About page not loading')
//                 } else {
//                     res.writeHead(200, {'content-type': 'text/html'});
//                     res.end(data);
//                 }
//             });
//             break;

//             //case for contact page
//         case '/contact':
//             fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
//                 if(err) {
//                     res.writeHead(500, {'content-type': 'text/plain'});
//                     res.end('Contact page did not load');
//                     console.log('Contact page not loading.');
//                 } else {
//                     res.writeHead(200, {'content-type': 'text/html'});
//                     res.end(data);
//                 }
//             });
//             break;

//             //default handles all URLs not specified above, sending a 404 error
//         default:
//             fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
//                 if(err) {
//                     res.writeHead(500, {'content-type': 'text/plain'});
//                     res.end('404 Error page did not load');
//                     console.log('Error page did not load. Yikes.')
//                 } else {
//                     //rather than the 200 OK messages before, here we write a 404 error on load
//                     res.writeHead(404, {'content-type': 'text/html'});
//                     res.end(data);
//                 }
//             });
//             break;
//     }
// });