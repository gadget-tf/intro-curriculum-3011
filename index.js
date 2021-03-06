'use strict';

const html_header = {
  'Content-Type': 'text/html; charset=utf-8'
};
const html_str = '<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>';

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, html_header);
  res.write(html_str);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
