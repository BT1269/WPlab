<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Visa Application</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #e0eafc, #cfdef3);
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .container {
      background-color: #fff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      width: 90%;
      max-width: 400px;
    }
    h2 {
      text-align: center;
      color: #333;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #555;
      font-weight: bold;
    }
    input[type="text"],
    select {
      width: 100%;
      padding: 0.75rem;
      margin-bottom: 1.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      transition: border 0.3s ease;
    }
    input[type="text"]:focus,
    select:focus {
      border-color: #0066cc;
      outline: none;
    }
    button {
      width: 100%;
      padding: 0.75rem;
      background-color:rgb(204, 61, 0);
      border: none;
      color: #fff;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color:rgb(153, 38, 0);
    }
    .message {
      text-align: center;
      color: red;
      margin-bottom: 1rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Visa Application Form</h2>
    <form action="display.php" method="POST">
      <label for="name">Full Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="passport">Passport Number:</label>
      <input type="text" id="passport" name="passport" minlength="8" maxlength="10" required>

      <label for="country">Select Country:</label>
      <select id="country" name="country" required>
        <option value="">--Select Country--</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
      </select>

      <button type="submit">Apply for Visa</button>
    </form>
  </div>
</body>
</html>
