<?php


include "dbConnect.php";

    
    $email = $_POST['email'];
    $password = $_POST['password'];
    $encPassword=md5($password);

    $sql = "select * from registration where email='$email'";
    $result=mysqli_query($con,$sql);
    $row=mysqli_fetch_assoc($result);
    
    if($row['email']==$email && $row['password']==$encPassword){
        print '0';

    }else{
        print '1';
    }





?>