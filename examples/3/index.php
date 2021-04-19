<?php
function generate_id()
{
    return rand(0, 15);
}

if (!isset($_COOKIE["PHPSESSID"])){
    // Usa una funzione custom per generare l'id, in questo caso quella sopra
    session_id(generate_id()); 
}

/*
    Fa partire la sessione, se il client ha già un session_id lo recupera dai cookie inviati e prende i dati relativi a quell'id,
    altrimenti crea un nuovo id e lo salva su disco assieme ai dati salvati dentro $_SESSION
*/
session_start();
?>

<html>
    <body>

        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST"){
                if ($_POST["username"] == "admin" && $_POST["password"] == "nuovapasswordsegreta"){
                    $_SESSION["utente"] = "admin";
                }
                else if ($_POST["username"] == "guest" && $_POST["password"] == "guest"){
                    $_SESSION["utente"] = "guest";
                } else {
                    echo '<p style="color: red">Credenziali errate!</p>';
                }
            }
            if (isset($_SESSION["utente"])){
                echo "<h1>Benvenuto " . $_SESSION["utente"] . "!</h1>";
                die();
            }
        ?>

        <p>Le tue credenziali da utente sono guest:guest</p>

        <form action="" method="POST">
            <input type="text" name="username" id="username" placeholder="Username">
            <input type="password" name="password" id="password" placeholder="Password">
            <input type="submit" value="Login">
        </form>
    </body>
</html>