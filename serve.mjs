import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');
http.createServer(async(req,res)=>{try{const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=resolve(root,'.'+(path.endsWith('/')?path+'index.html':path));if(!file.startsWith(root+sep)){res.writeHead(403);res.end();return}const data=await readFile(file);res.writeHead(200,{'Content-Type':({'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml'})[extname(file)]||'application/octet-stream'});res.end(data)}catch{res.writeHead(404);res.end('Not found')}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
