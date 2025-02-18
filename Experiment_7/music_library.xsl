<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/music_library">
        <html>
            <head>
                <title>Top Hit Songs</title>
                <style>
                    body { font-family: Arial, sans-serif; }
                    h2 { color: #333; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f4f4f4; }
                </style>
            </head>
            <body>
                <h1>Top Hit Songs</h1>
                <xsl:for-each select="music_library/language">
                    <h2><xsl:value-of select="@name"/></h2>
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Movie</th>
                            <th>Actor</th>
                            <th>Actress</th>
                            <th>Singer</th>
                            <th>Lyricist</th>
                            <th>Year</th>
                            <th>Rating</th>
                        </tr>
                        <xsl:for-each select="song">
                            <tr>
                                <td><xsl:value-of select="title"/></td>
                                <td><xsl:value-of select="movie"/></td>
                                <td><xsl:value-of select="actor"/></td>
                                <td><xsl:value-of select="actress"/></td>
                                <td><xsl:value-of select="singer"/></td>
                                <td><xsl:value-of select="lyricist"/></td>
                                <td><xsl:value-of select="year"/></td>
                                <td><xsl:value-of select="rating"/></td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
