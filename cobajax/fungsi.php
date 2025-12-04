<?php

require "conn.php";

function papar($nilai = ""){
    global $conn;

    $sql = "SELECT * FROM pengguna WHERE nama_pengguna LIKE '%$nilai%'";
    $result = mysqli_query($conn,$sql);
    
    while ($row = mysqli_fetch_assoc($result)) {
        $id = $row["pengguna_id"];
        $nama = $row["nama_pengguna"];
        $pass = $row["password"];
        $email = $row["email"];

        echo "<tr>
                    <th>$id</th>
                    <th>$nama</th> 
                    <th>$pass</th> 
                    <th>$email</th>
                </tr>";
    }
    


}