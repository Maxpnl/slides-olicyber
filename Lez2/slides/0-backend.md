<!-- classes: title -->

# Backend, databases ed injections
Mattia Furlani

Università di Pisa

---

## Come funziona il web (uno sguardo più dettagliato)


<!-- fragments-start -->

Il browser (client) invia richieste HTTP al server.

Il backend si occupa di gestire la logica del server, in modo da poterlo usare per scopi più sofisticati rispetto alla semplice condivisione di files. In base all'input dell'utente genera risposte dinamiche, diverse l'una tra l'altra nonostante magari il path del file richiesto rimane il medesimo (ad esempio andando su */profilo*, l'utente __pippo__ e l'utente __pluto__ vedranno pagine diverse)

Il database invece contiene i dati che possono essere immagazzinati e recuperati dal backend.

<!-- fragments-end -->
![web server](https://i.gyazo.com/bd70616794455fd6358726b15d34127d.png)


---

## Il backend

Può essere scritto usando qualsiasi linguaggio (PHP, python, javascript, ruby, java, C, ...)

Ci sono molte librerie disponibili per i vari linguaggi, che semplificano lo sviluppo di un sito web (Django, flask, Laravel, ruby on rails, expressjs, ...)

The sky is the limit!

---

## Cosa deve poter un backend?

<!-- fragments-start -->

Accedere alla richiesta inviata dal client (ad esempio i parametri GET o il body POST)

Inserire / modificare / recuperare dati dal database (non per forza)

Decidere cosa rispondere ad ogni singola richiesta in modo dinamico

<!-- fragments-end -->

---

## Un esempio con PHP (acronimo di *Python Ho Peccato*)

```
POST /test?query1=TEST1&query2=TEST2 HTTP/1.1
Host: foo.example
Cookie: cookie1=choco; cookie2=strawberry
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

username=pippo&password=baudo
```
```php
<?php
    echo "query1 = " . $_GET["query1"];
    echo "query2 = " . $_GET["query2"];
    echo "username = " . $_POST["username"];
    echo "password = " . $_POST["password"];
    echo "cookie1 = " . $_COOKIE["cookie1"];
    echo "cookie2 = " . $_COOKIE["cookie2"];
?>
```
```
query1 = TEST1
query2 = TEST2
username = pippo
password = baudo
cookie1 = choco
cookie2 = strawberry

```

Si può far partire un webserver di test col comando `php –S 127.0.0.1:5000` e si può esporlo su internet usando `ngrok http 5000`


---

## Url encoding

E se il nostro username fosse `ciccio&marica`?

Possiamo usare l'url encoding, che consiste nello scambiare i caratteri _"fastidiosi"_ con il loro valore ascii esadecimale, preceduto da un `%`

Ad esempio `ciccio&marica` diventa `ciccio%26marica`

Lo spazio può anche essere rappresentato con un `+`