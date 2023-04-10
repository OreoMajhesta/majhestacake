<?php
if(isset($_POST['submit'])){
    $to = "webtestreo@gmail.com"; // email penerima
    $subject = $_POST['Subject']; // subjek email
    $name = $_POST['Name']; // nama pengirim
    $email = $_POST['Email']; // email pengirim
    $message = $_POST['Message']; // isi pesan

    $body = "Nama: $name\nEmail: $email\n\nPesan:\n$message"; // menggabungkan informasi pengirim dan pesan

    // mengatur header email
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // mengirim email menggunakan fungsi mail() bawaan PHP
    if(mail($to, $subject, $body, $headers)){
        echo "Pesan berhasil dikirim.";
    } else{
        echo "Pesan gagal dikirim. Silakan coba lagi.";
    }
}
?>
