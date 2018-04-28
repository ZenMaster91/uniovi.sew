<!DOCTYPE html>
<html lang="es">
<head>
    <title>Search</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="https://s3-eu-west-1.amazonaws.com/cssfonts/SF/sf-font.css" />
    <link href="Ejercicio2.css" rel="stylesheet" />
</head>

<body>
        <header>
     <form  action="crearDB.php">
        <input type="submit" value="Crear base de datos: db">
     </form>

    <form  action="crearTabla.php">
         <input type="submit" value="Crear tabla: alumnado">
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

            $consultaPre = $db->prepare("SELECT * FROM alumnado WHERE dni = ?");

            $consultaPre->bind_param('s', $_GET["dni"]);
            $consultaPre->execute();
            $resultado = $consultaPre->get_result();
            if ($resultado) {
                echo "<h2>Datos del alumnado con dni: ". $_GET["dni"] . "</h2>";
                while($row = $resultado->fetch_assoc()) {
                    echo "<ul><li>Nombre: ". $row['nombre']."</li>";
                    echo "<li>Apellidos: ". $row['apellidos'] ."</li>";
                    echo "<li>Email: ". $row['email'] ."</li></ul>";
                }

            } else {
                echo "Sin resultados";
            }

            $consultaPre->close();

            $db->close();


        ?>
    </section>

</body>
</html>
