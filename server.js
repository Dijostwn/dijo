<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulir Pelamar Kerja</title>
    <style>
        /* (Style disingkat agar kode tidak terlalu panjang, Anda bisa tambahkan sendiri) */
        body { font-family: sans-serif; margin: 20px; }
        .container { max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
        label { display: block; margin: 10px 0 5px; font-weight: bold; }
        input { width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
        button { background-color: #007bff; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Formulir Pelamar Kerja 📝</h1>
        <form action="/submit" method="POST"> 
            
            <label for="nama">Nama Lengkap:</label>
            <input type="text" id="nama" name="nama" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="posisi">Posisi Dilamar:</label>
            <input type="text" id="posisi" name="posisi" required>

            <button type="submit">Kirim Lamaran</button>
        </form>
    </div>
</body>
</html>
