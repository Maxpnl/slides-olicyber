(self.webpackChunksuperslides=self.webpackChunksuperslides||[]).push([[179],{4487:(e,t,n)=>{"use strict";n.d(t,{G:()=>i});var a=n(7401);const i=e=>a.createElement("iframe",{src:e.src,width:"100%",height:"800px"})},2591:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>o,backgrounds:()=>p,fragmentSteps:()=>s,fusumaProps:()=>c,default:()=>m});var a=n(7401),i=n(9332),l=n(108);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const o=[e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("h1",null,"Introduzione al web ed alla web security"),(0,i.kt)("p",null,"Mattia Furlani"),(0,i.kt)("p",null,"Università di Pisa")),e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("h2",null,"Come funziona il web? (breve recap)"),(0,i.kt)(l.n,{id:.16863433011574003},(0,i.kt)("p",null,"Il browser (client) ed il webserver si scambiano informazioni."),(0,i.kt)("p",null,"Il browser invia richieste al webserver, attende la risposta e la elabora, aggiornando eventualmente ciò che viene visualizzato sulla pagina."),(0,i.kt)("p",null,"Il webserver resta in ascolto su una determinata porta (tipicamente la 80 o la 443), attende che gli vengano inviate richieste, in base al contenuto della richiesta decide che risposta inviare al browser e chiude la connessione.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://geobgu.xyz/web-mapping/images/web-server.png",alt:"web server"}))),e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("h2",null,"Ok... ma come fanno a comunicare?")),e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("h2",null,"Il protocollo HTTP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Protocollo client server (stateless) basato su TCP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Il client invia una richiesta al server ed attende di ricevere una risposta")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Il server resta in ascolto su una determinata porta (lo standard dice 80 per http e 443 per https) e, in base alla richiesta, esegue operazioni e/o risponde al client"))),(0,i.kt)(l.n,{id:.26826574443459417},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /path/to/file/?query=value&query2=value HTTP/1.1\nHost: www.google.com\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Mon, 27 Jul 2009 12:28:53 GMT\nServer: Apache/2.2.14 (Win32)\nLast-Modified: Wed, 22 Jul 2009 19:15:56 GMT\nContent-Length: 88\nContent-Type: text/html\n\n<html>\n<body>\n<h1>Hello, World!</h1>\n</body>\n</html>\n")))),e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("h2",null,"... Ma il client come glieli manda i dati al server?"))],p=[0,0,0,0,0],s=[0,[.16863433011574003,.16863433011574003,.16863433011574003],0,[.26826574443459417,.26826574443459417],0],c=[{classes:"title",sectionTitle:"intro"},{sectionTitle:"recap",classes:"sm-image"},{},{sectionTitle:"descrizione protocollo"},{}],u={};function m({components:e,...t}){return(0,i.kt)("wrapper",r({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Introduzione al web ed alla web security"),(0,i.kt)("p",null,"Mattia Furlani"),(0,i.kt)("p",null,"Università di Pisa"),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"Come funziona il web? (breve recap)"),(0,i.kt)("p",null,"Il browser (client) ed il webserver si scambiano informazioni."),(0,i.kt)("p",null,"Il browser invia richieste al webserver, attende la risposta e la elabora, aggiornando eventualmente ciò che viene visualizzato sulla pagina."),(0,i.kt)("p",null,"Il webserver resta in ascolto su una determinata porta (tipicamente la 80 o la 443), attende che gli vengano inviate richieste, in base al contenuto della richiesta decide che risposta inviare al browser e chiude la connessione."),(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://geobgu.xyz/web-mapping/images/web-server.png",alt:"web server"})),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"Ok... ma come fanno a comunicare?"),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"Il protocollo HTTP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Protocollo client server (stateless) basato su TCP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Il client invia una richiesta al server ed attende di ricevere una risposta")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Il server resta in ascolto su una determinata porta (lo standard dice 80 per http e 443 per https) e, in base alla richiesta, esegue operazioni e/o risponde al client"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /path/to/file/?query=value&query2=value HTTP/1.1\nHost: www.google.com\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Mon, 27 Jul 2009 12:28:53 GMT\nServer: Apache/2.2.14 (Win32)\nLast-Modified: Wed, 22 Jul 2009 19:15:56 GMT\nContent-Length: 88\nContent-Type: text/html\n\n<html>\n<body>\n<h1>Hello, World!</h1>\n</body>\n</html>\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"... Ma il client come glieli manda i dati al server?"))}m.isMDXComponent=!0},7960:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>p,backgrounds:()=>s,fragmentSteps:()=>c,fusumaProps:()=>u,default:()=>d});var a=n(4487),i=n(7401),l=n(9332),r=n(108);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const p=[e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("h2",null,"I metodi di richiesta HTTP"),(0,l.kt)("p",null,"I metodi HTTP e ciò che (tipicamente) dovrebbero fare. L'implementazione tuttavia è lasciata allo sviluppatore"),(0,l.kt)(r.n,{id:.15128770900710364},(0,l.kt)("div",{className:"methods"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET"),": Metodo senza corpo, usato tipicamente per accedere a una risorsa (prendendone headers e corpo)")),(0,l.kt)("div",{className:"methods"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HEAD"),": Metodo senza corpo, usato tipicamente per accedere a una risorsa (prendendone solo gli headers)")),(0,l.kt)("div",{className:"methods"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DELETE"),": Metodo senza corpo, usato tipicamente per cancellare una risorsa")),(0,l.kt)("div",{className:"methods"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OPTIONS"),": Metodo senza corpo, usato per sapere quali metodi accetta un determinato endpoint (path)")),(0,l.kt)("div",{className:"methods"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"PATCH"),": Metodi con corpo, usati tipicamente per inserire / modificare / modificare parzialmente un'entità")))),e=>(0,l.kt)(i.Fragment,null),e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("h2",null,"I codici di risposta HTTP"),(0,l.kt)(r.n,{id:.7435775829016114},(0,l.kt)("div",{className:"methods"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"2xx"),": Indica tipicamente uno stato di successo, il più famoso è 200")),(0,l.kt)("div",{className:"methods"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"3xx"),": Indica tipicamente un redirect, i più famosi sono 301 (permanente) e 302 (temporaneo)")),(0,l.kt)("div",{className:"methods"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"4xx"),": Indica la presenza di un errore nella richiesta del client, i più famosi sono 403 (forbidden), 404 (Not Found), 405 (method not allowed), ",(0,l.kt)("em",{parentName:"p"},"418 (I'm a teapot), LOL"))),(0,l.kt)("div",{className:"methods"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"5xx"),": Indica la presenza di un errore nella risposta del server, i più famosi sono 500 (Internal Server Error), 502 (Bad Gateway), 503 (Service Unavailable), 504 (Gateway Timeout)")))),e=>(0,l.kt)(i.Fragment,null),e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("h2",null,"Alcuni headers importanti (richiesta)"),(0,l.kt)(r.n,{id:.939626742348989},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Accept: text/html")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Accept-Encoding: gzip, deflate, br")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Referrer: https://link.da/cui/?sono=arrivato")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Cookie: PHPSESSID=123456; GDPRAccettata=1; chiave=valore")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer token")))),e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("h3",null,"I MIME types"),(0,l.kt)(a.G,{src:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types",mdxType:"IFrame",mdxType:"IFrame"})),e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("h2",null,"Alcuni headers importanti (risposta)"),(0,l.kt)(r.n,{id:.21997743402641},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Server: Apache/2.2.14 (Win32)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Allow: OPTIONS, GET, HEAD, POST")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'Content-Disposition: attachment; filename="filename.jpg"')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type: text/html; charset=UTF-8")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Content-Length: 8")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Location: /index.html")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Set-Cookie: PHPSESSID=123456; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly")))),e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("h2",null,"Ok, questo è come comunicano, ma come faccio a vedere le pagine?"))],s=[0,0,0,0,0,0,0,0],c=[[.15128770900710364,.15128770900710364,.15128770900710364,.15128770900710364,.15128770900710364],0,[.7435775829016114,.7435775829016114,.7435775829016114,.7435775829016114],0,[.939626742348989,.939626742348989,.939626742348989,.939626742348989,.939626742348989],0,[.21997743402641,.21997743402641,.21997743402641,.21997743402641,.21997743402641,.21997743402641,.21997743402641],0],u=[{classes:"title",sectionTitle:"richieste http"},{},{sectionTitle:"risposte http"},{},{sectionTitle:"headers richieste"},{sectionTitle:"MIME types"},{sectionTitle:"headers risposte"},{}],m={};function d({components:e,...t}){return(0,l.kt)("wrapper",o({},m,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"I metodi di richiesta HTTP"),(0,l.kt)("p",null,"I metodi HTTP e ciò che (tipicamente) dovrebbero fare. L'implementazione tuttavia è lasciata allo sviluppatore"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET"),": Metodo senza corpo, usato tipicamente per accedere a una risorsa (prendendone headers e corpo)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HEAD"),": Metodo senza corpo, usato tipicamente per accedere a una risorsa (prendendone solo gli headers)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DELETE"),": Metodo senza corpo, usato tipicamente per cancellare una risorsa"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OPTIONS"),": Metodo senza corpo, usato per sapere quali metodi accetta un determinato endpoint (path)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"PATCH"),": Metodi con corpo, usati tipicamente per inserire / modificare / modificare parzialmente un'entità"),(0,l.kt)("hr",null),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"I codici di risposta HTTP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"2xx"),": Indica tipicamente uno stato di successo, il più famoso è 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"3xx"),": Indica tipicamente un redirect, i più famosi sono 301 (permanente) e 302 (temporaneo)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"4xx"),": Indica la presenza di un errore nella richiesta del client, i più famosi sono 403 (forbidden), 404 (Not Found), 405 (method not allowed), ",(0,l.kt)("em",{parentName:"p"},"418 (I'm a teapot), LOL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"5xx"),": Indica la presenza di un errore nella risposta del server, i più famosi sono 500 (Internal Server Error), 502 (Bad Gateway), 503 (Service Unavailable), 504 (Gateway Timeout)"),(0,l.kt)("hr",null),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Alcuni headers importanti (richiesta)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Accept: text/html")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Accept-Encoding: gzip, deflate, br")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Referrer: https://link.da/cui/?sono=arrivato")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Cookie: PHPSESSID=123456; GDPRAccettata=1; chiave=valore")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer token")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"I MIME types"),(0,l.kt)(a.G,{src:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types",mdxType:"IFrame"}),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Alcuni headers importanti (risposta)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Server: Apache/2.2.14 (Win32)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Allow: OPTIONS, GET, HEAD, POST")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'Content-Disposition: attachment; filename="filename.jpg"')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type: text/html; charset=UTF-8")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Content-Length: 8")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Location: /index.html")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Set-Cookie: PHPSESSID=123456; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Ok, questo è come comunicano, ma come faccio a vedere le pagine?"))}d.isMDXComponent=!0},5519:(e,t,n)=>{"use strict";n.r(t),n.d(t,{backgrounds:()=>c,default:()=>k,fragmentSteps:()=>u,fusumaProps:()=>m,slides:()=>s});var a=n(7401),i=(n(527),n(4487));const l=()=>a.createElement(i.G,{src:"https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_document"});var r=n(9332),o=n(108);n(4819);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const s=[e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("h1",null,"HTML, CSS e Javascript"),(0,r.kt)(o.n,{id:.6106374657425202},(0,r.kt)("p",null,'HTML è un linguaggio di markup, ha una struttura ("a matrioska"), serve a definire COSA vediamo'),(0,r.kt)("p",null,"CSS è un linguaggio di stile, serve a definire COME vediamo ciò che vediamo, quindi colori, posizioni, etc degli elementi"),(0,r.kt)("p",null,"JS è un linguaggio di programmazione, serve a rendere la pagina dinamica"))),e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("h2",null,"Esempio di una struttura HTML"),(0,r.kt)(l,{mdxType:"ExampleStruttura",mdxType:"ExampleStruttura"})),e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("h2",null,"Attributi"),(0,r.kt)("p",null,"I tag HTML possono avere attributi, del tipo ",(0,r.kt)("inlineCode",{parentName:"p"},'nome="valore"'),", ad esempio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="il-mio-id" class="la-mia-classe" nome="valore"></div>\n'))),e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("h2",null,"Alcuni tag importanti"),(0,r.kt)(o.n,{id:.02211327928609652},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Base --\x3e\n<html>\n    <head>\n        <title>Questo è il titolo della scheda</title>\n        <meta charset="UTF-8">\n    </head>\n    <body>\n        <div>\n        </div>\n    </body>\n</html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- Tipografia --\x3e\n<h1>Titolo</h1>\n<h2>Titolo piccolo</h2>\n<h3>Titoletto</h3>\n<h4>Titolettino</h4>\n<h5>Titoluccio</h5>\n<h6>Titoluccino</h6>\n<p>Questo è un paragrafo</p>\n<br>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Inviare richieste --\x3e\n<form action="/endpoint/a/cui/mandare/i/dati" method="POST">\n  <input type="text" id="nome" name="nome">\n  <input type="password" id="password" name="password">\n  <input type="checkbox" id="ricordami" name="ricordami" value="ricordami">\n  <input type="submit" value="Invia form">\n</form> \n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Link, bottoni, immagini, iframe --\x3e\n<a href="https://google.it" target="_blank">Clicca qui per aprire google!</a>\n<button>Cliccami!</button>\n<img src="/immagine.jpg" />\n<iframe src="https://google.com"></iframe>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Caricare script (Javascript) e codice di stile (CSS) --\x3e\n<script src="/miofile.js"><\/script>\n<script>alert(1)<\/script>\n\n<link rel="stylesheet" href="/stile.css">\n<style>\n#test {\n    color: blue;\n}\n</style>\n\x3c!-- (# -> id, . -> class) --\x3e\n'))))],c=[0,0,0,0],u=[[.6106374657425202,.6106374657425202,.6106374657425202],0,0,[.02211327928609652,.02211327928609652,.02211327928609652,.02211327928609652,.02211327928609652]],m=[{classes:"title"},{},{},{}],d={};function k({components:e,...t}){return(0,r.kt)("wrapper",p({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"HTML, CSS e Javascript"),(0,r.kt)("p",null,'HTML è un linguaggio di markup, ha una struttura ("a matrioska"), serve a definire COSA vediamo'),(0,r.kt)("p",null,"CSS è un linguaggio di stile, serve a definire COME vediamo ciò che vediamo, quindi colori, posizioni, etc degli elementi"),(0,r.kt)("p",null,"JS è un linguaggio di programmazione, serve a rendere la pagina dinamica"),(0,r.kt)("hr",null),(0,r.kt)("h2",null,"Esempio di una struttura HTML"),(0,r.kt)(l,{mdxType:"ExampleStruttura"}),(0,r.kt)("hr",null),(0,r.kt)("h2",null,"Attributi"),(0,r.kt)("p",null,"I tag HTML possono avere attributi, del tipo ",(0,r.kt)("inlineCode",{parentName:"p"},'nome="valore"'),", ad esempio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="il-mio-id" class="la-mia-classe" nome="valore"></div>\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",null,"Alcuni tag importanti"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Base --\x3e\n<html>\n    <head>\n        <title>Questo è il titolo della scheda</title>\n        <meta charset="UTF-8">\n    </head>\n    <body>\n        <div>\n        </div>\n    </body>\n</html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- Tipografia --\x3e\n<h1>Titolo</h1>\n<h2>Titolo piccolo</h2>\n<h3>Titoletto</h3>\n<h4>Titolettino</h4>\n<h5>Titoluccio</h5>\n<h6>Titoluccino</h6>\n<p>Questo è un paragrafo</p>\n<br>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Inviare richieste --\x3e\n<form action="/endpoint/a/cui/mandare/i/dati" method="POST">\n  <input type="text" id="nome" name="nome">\n  <input type="password" id="password" name="password">\n  <input type="checkbox" id="ricordami" name="ricordami" value="ricordami">\n  <input type="submit" value="Invia form">\n</form> \n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Link, bottoni, immagini, iframe --\x3e\n<a href="https://google.it" target="_blank">Clicca qui per aprire google!</a>\n<button>Cliccami!</button>\n<img src="/immagine.jpg" />\n<iframe src="https://google.com"></iframe>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Caricare script (Javascript) e codice di stile (CSS) --\x3e\n<script src="/miofile.js"><\/script>\n<script>alert(1)<\/script>\n\n<link rel="stylesheet" href="/stile.css">\n<style>\n#test {\n    color: blue;\n}\n</style>\n\x3c!-- (# -> id, . -> class) --\x3e\n')))}k.isMDXComponent=!0},2765:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>r,backgrounds:()=>o,fragmentSteps:()=>p,fusumaProps:()=>s,default:()=>u});var a=n(7401),i=n(9332);n(108);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const r=[e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("h1",null,"Demo time!"))],o=[0],p=[0],s=[{}],c={};function u({components:e,...t}){return(0,i.kt)("wrapper",l({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Demo time!"))}u.isMDXComponent=!0},5516:(e,t,n)=>{"use strict";n.r(t)},3447:(e,t,n)=>{var a={"./0-intro-http.md":2591,"./1-methods-headers.mdx":7960,"./2-html.mdx":5519,"./3-js-e-console.mdx":2765};function i(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=l,e.exports=i,i.id=3447}},e=>{"use strict";e.O(0,[179],(()=>[465,921,626].map(e.E)),5);var t=t=>e(e.s=t);e.O(0,[736],(()=>(t(7751),t(6905),t(9969))));e.O()}]);