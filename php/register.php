<?php


include "dbConnect.php";

    $name = $_POST['name'];
    $email = $_POST['email'];
    $dob = $_POST['dob'];
    $password = $_POST['password'];
    $encPassword=md5($password);

    $sql = "insert into registration(name,email,dob,password) values('$name','$email','$dob','$encPassword')";
    $result = mysqli_query($con, $sql);
    
    

    if ($result) {
        // echo "Data inserted successfully";
        print '0';
        
    } else {
        print '1';
        die(mysqli_error($con));

    }





?>