<?php
// api.php

$counter = 0;

// Handle API endpoints
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_SERVER['REQUEST_URI'] === '/counter') {
        // Return counter value
        echo json_encode(['counter' => $counter]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_SERVER['REQUEST_URI'] === '/counter/increment') {
        // Increment counter
        $counter++;
        http_response_code(200);
    } elseif ($_SERVER['REQUEST_URI'] === '/counter/decrement') {
        // Decrement counter
        $counter--;
        http_response_code(200);
    }
}
?>
