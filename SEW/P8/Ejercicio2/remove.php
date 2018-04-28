<!DOCTYPE html>
<html lang="es">
<head>
    <title>Remove</title>
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

            $consultaPre = $db->prepare("SELECT * FROM alumnado WHERE dni = ?");

            $consultaPre->bind_param('s', $_GET["dni"]);
            $consultaPre->execute();
            $resultado = $consultaPre->get_result();
            if ($resultado) {

                echo "<h2>Los datos del alumnado borrado son:</h2> ";
                while($row = $resultado->fetch_assoc()) {
                    $id = $row['id'];
                    echo "<ul><li>Nombre: ". $row['nombre']."</li>";
                    echo "<li>Apeliidos: ". $row['apellidos'] ."</li>";
                    echo "<li>email: ". $row['email'] ."</li></ul>";
                }

            } else {
                echo "Sin resultados";
            }
            $consultaPre = $db->prepare("DELETE FROM alumnado WHERE id = ?");

            $consultaPre->bind_param('i', $id);
            $consultaPre->execute();

            $consultaPre->close();

            $db->close();

        ?>
    </section>

</body>
</html>
