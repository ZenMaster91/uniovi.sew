<!DOCTYPE html>
<html lang="es">
<head>
    <title>Insert</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="https://s3-eu-west-1.amazonaws.com/cssfonts/SF/sf-font.css" />
    <link href="Ejercicio2.css" rel="stylesheet" />
</head>

<body>

           <header>
     <form  action="crearDB.php">
        <input type="submit" value="Crear la base de datos: db">
     </form>

    <form  action="crearTabla.php">
         <input type="submit" value="Crear la tabla: alumnado">
    </form>

     <form action="Ejercicio2.html">
             <input type="submit" value="DATOS">
        </form>
    </header>

    <section>
        <?php

             $db = new mysqli('localhost', 'sa', 'sa', 'db');
            if($db->connect_error) {
                echo "<p>ERROR de conexión:".$db->connect_error."</p>";
                exit();
            } else {echo "<p>Conexión establecida.</p>";}

            $consultaPre = $db->prepare("INSERT INTO alumnado (nombre, apellios, dni,email) VALUES (?,?,?,?)");

            $consultaPre->bind_param('ssss',
                    $_POST["nombre"],$_POST["apellidos"], $_POST["dni"], $_POST["email"]);
            $consultaPre->execute();
            echo "<p>Filas agregadas: ".$consultaPre->affected_rows."</p>";
            $consultaPre->close();

            $db->close();

        ?>
    </section>

</body>
</html>
