<?php
  $name = htmlspecialchars($_POST['name']);
  $surname = htmlspecialchars($_POST['surname']);
  $email = htmlspecialchars($_POST['email']);
  $confirm = htmlspecialchars($_POST['confirm']);
  $subject = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);
  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "mohammedtiger123890@gmail.com"; 
      $subject = "From: $name <$email>";
      $body = "Name: $name\nSurname: $surname\nEmail: $email\nSubject: $subject\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Your message has been sent";
      }else{
         echo "Your message is sent!";
      }
    }
  }
?>