<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            color: #333;
            margin: 0;
            padding: 40px;
            background-color: #f9f9f9;
          }
          #content {
            max-width: 1000px;
            margin: 0 auto;
            background: #fff;
            padding: 20px 40px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          }
          h1 {
            color: #222;
          }
          p {
            font-size: 14px;
            color: #666;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 14px;
          }
          th {
            text-align: left;
            border-bottom: 2px solid #ddd;
            padding: 10px 8px;
            background-color: #f4f4f4;
            color: #555;
            font-weight: 600;
          }
          td {
            padding: 10px 8px;
            border-bottom: 1px solid #eee;
          }
          tr:hover td {
            background-color: #fcfcfc;
          }
          a {
            color: #10b981; /* Verde de la marca */
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 2px 6px;
            font-size: 12px;
            border-radius: 4px;
            background: #e5e7eb;
            color: #374151;
          }
        </style>
      </head>
      <body>
        <div id="content">
          <h1>XML Sitemap</h1>
          <p>Este es el Sitemap del sitio, utilizado por motores de búsqueda como Google y Bing.</p>
          <p>Se han encontrado <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.</p>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Prioridad</th>
                <th>Frecuencia de Cambio</th>
                <th>Última Modificación</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td>
                    <xsl:if test="sitemap:priority">
                      <span class="badge"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:if>
                  </td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
