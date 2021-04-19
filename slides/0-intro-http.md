<!-- classes: title -->

# Introduzione al web ed alla web security
Mattia Furlani

Università di Pisa

---

## Come funziona il web? (breve recap)


<!-- fragments-start -->

Il browser (client) ed il webserver si scambiano informazioni.

Il browser invia richieste al webserver, attende la risposta e la elabora, aggiornando eventualmente ciò che viene visualizzato sulla pagina.

Il webserver resta in ascolto su una determinata porta (tipicamente la 80 o la 443), attende che gli vengano inviate richieste, in base al contenuto della richiesta decide che risposta inviare al browser e chiude la connessione.

<!-- fragments-end -->
<!-- classes: sm-image -->
![web server](https://geobgu.xyz/web-mapping/images/web-server.png)


---

## Ok... ma come fanno a comunicare?

---

## Il protocollo HTTP

- Protocollo client server (stateless) basato su TCP

- Il client invia una richiesta al server ed attende di ricevere una risposta

- Il server resta in ascolto su una determinata porta (lo standard dice 80 per http e 443 per https) e, in base alla richiesta, esegue operazioni e/o risponde al client

<!-- fragments-start -->
```
GET /path/to/file/?query=value&query2=value HTTP/1.1
Host: www.google.com
```
```
HTTP/1.1 200 OK
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
Content-Length: 88
Content-Type: text/html

<html>
<body>
<h1>Hello, World!</h1>
</body>
</html>
```

<!-- fragments-end -->

---

## ... Ma il client come glieli manda i dati al server?