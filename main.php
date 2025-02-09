<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $folderName = trim($_POST["folderName"]);
    
    if (!empty($folderName)) {
        $folderPath = __DIR__ . "/" . $folderName;

        if (!file_exists($folderPath)) {
            if (mkdir($folderPath, 0777, true)) {
                echo "Folder '$folderName' created successfully.";
            } else {
                echo "Error: Could not create folder.";
            }
        } else {
            echo "Error: Folder already exists.";
        }
    } else {
        echo "Error: Invalid folder name.";
    }
} else {
    echo "Error: Invalid request.";
}
?>
