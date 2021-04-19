<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST["username"] == "admin" && $_POST["password"] == "nuovapasswordsegreta") {
            setcookie("utente", "admin");
            echo "<h1>Benvenuto admin!</h1>";
            die();
        }
        else if ($_POST["username"] == "guest" && $_POST["password"] == "guest") {
            setcookie("utente", "guest");
            echo "<h1>Benvenuto guest!</h1>";
            die();
        } else {
            echo '<p style="color: red">Credenziali errate!</p>';
        }
    }
?>
<?php
    if (isset($_COOKIE["utente"])) {
        echo "<h1>Benvenuto " . $_COOKIE["utente"] . "!</h1>";
        die();
    }
?>

<p>Le tue credenziali da utente sono guest:guest</p>

<form action="" method="POST">
    <input type="text" name="username" id="username" placeholder="Username">
    <input type="password" name="password" id="password" placeholder="Password">
    <input type="submit" value="Login">
</form>
