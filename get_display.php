<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GET Method - Data Display</title>
</head>
<body>
    <h2>Data Received (GET Method)</h2>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $country = $_GET['country'] ?? 'N/A';
        
        echo "<p><strong>Country:</strong> " . htmlspecialchars($country) . "</p>";

        if ($country == "America") {
            echo "<p><strong>Visa Requirement:</strong>Visa required for most applicants.</p>";
        } elseif ($country == "Canada") {
            echo "<p><strong>Visa Requirement:</strong>Visa required unless you have an eTA.</p>";
        } elseif ($country == "India") {
            echo "<p><strong>Visa Requirement:</strong>Visa required before travel.</p>";
        }elseif ($country == "UK") {
            echo "<p><strong>Visa Requirement:</strong>Visa depends on the duration of stay.</p>";
        }elseif ($country == "Austrailia") {
            echo "<p><strong>Visa Requirement:</strong>eVisa available for eligible travelers.</p>";
        }elseif ($country == "") {
            echo "<p><strong>Visa Requirement:</strong>Invalid country selection.</p>";
        }
    }
    ?>
</body>
</html>
