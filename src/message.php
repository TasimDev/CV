<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$message = $_POST['message'];

if (!empty($email) && !empty($message)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $receiver = "ttasimer6@gmail.com";
        $subject = "From: $fname <$email>";
        $body = "Name: $fname $lname \nEmail: $email \n\nMessage: $message";
        $sender = "From: $email";
        if (mail($receiver, $subject, $body, $sender)) {
            echo "Message sent!";
        } else {
            echo "Sorry failled to send your message";
        }
    } else {
        echo "Enter a valid email address";
    }
} else {
    echo "Email and Message field is required";
}
?>