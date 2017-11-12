<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html&gt;</xsl:text>
    <html>
      <head>
        <title>P4. Ejercicio1 - Tarea4</title>
      </head>
      <body>
        <h1>Ejercicio1 - Tarea4</h1>
        <h2>Artículos entre el 2012 y el 2015</h2>

        <xsl:for-each select="articulos/articulo">

          <xsl:sort select="year" order="descending"/>

          <xsl:if test="((year &gt;= 2012) and (year &lt;= 2015))">
            <h3><xsl:value-of select="titulo"/></h3>
            <h4><xsl:value-of select="autores"/></h4>
            <p><xsl:value-of select="resumen"/></p>
            <p>Keywords:

              <xsl:value-of select="keywords"/></p>
            <p>Revista:

              <xsl:value-of select="revista"/></p>
            <p>Pag. Inicio:

              <xsl:value-of select="pag-inicio"/></p>
            <p>Pag. Fin:

              <xsl:value-of select="pag-fin"/></p>
            <p>Año de Publicación:

              <xsl:value-of select="year"/></p>
          </xsl:if>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
