<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $passport = trim($_POST["passport"]);
    $country = trim($_POST["country"]);

    if (empty($name) || empty($passport) || empty($country)) {
        echo "<p class='message'>All fields are required!</p>";
        exit;
    }

    if (strlen($passport) < 8 || strlen($passport) > 10) {
        echo "<p class='message'>Invalid passport number!</p>";
        exit;
    }

    echo "<p style='text-align: center; color: green;'>Visa application submitted successfully!</p>";
}
?>
