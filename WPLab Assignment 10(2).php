<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Submission - GET Method</title>
    <style>
        body, html {
            height: 100%;
            margin: 0;
            display: flex;
            flex-direction: column; 
            align-items: center;
            justify-content: flex-start; 
            background-color: #2c3e50;
            font-family: 'Arial', sans-serif;
        }

        h2 {
            color: #fff;
            margin-top: 20px;
            margin-bottom: 30px; 
        }

        .container {
            background: linear-gradient(135deg, #f0e68c, #ff6347);
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
            padding: 30px;
            width: 350px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
        }

        .form-input {
            padding: 10px;
            width: 100%;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            outline: none;
            transition: border-color 0.3s ease-in-out;
        }

        .form-input:focus {
            border-color: #ff6347;
        }

        button {
            background-color: #ff6347;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #e55347;
        }

        label {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
            display: inline-block;
        }

        select {
            padding: 10px;
            width: 100%;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            background-color: #fff;
            transition: border-color 0.3s ease-in-out;
        }

        select:focus {
            border-color: #ff6347;
        }
    </style>
</head>
<body>
    <h2>Form Submission Using GET Method</h2>
    <div class="container">
        <form action="get_display.php" method="get">
            <label>Select Your Country</label><br>
            <div class="form-section">
                <select class="form-input" name="country">
                    <option value="America" selected>America</option>
                    <option value="Canada">Canada</option>
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                    <option value="Austrailia">Austrailia</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>
