const express = require('express')
const mysql = require('mysql')

function expressServer(header, news, info, store, gallery, contact) {

  const PORT = process.env.PORT || 3000
  
  const server = express()
    .get('/data', (req, res) => res.json({ header: header, news: news, info: info, store: store, gallery: gallery, contact: contact }))
    .get('/redirect', (req, res) => res.sendFile('/html/redirect.html', { root: __dirname }))
    .use(express.static(__dirname), (req, res) => res.sendFile('/html/index.html', { root: __dirname }))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
}

function connectToDatabase() {
  const connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'bs_admin',
    password: 'uslhjuty65',
    database: 'bs_database'
  })

  connection.connect(function(err) {
    if (err) {
      return console.error(err.message)
    }
  
    console.log('Connected to the MySQL')

    connection.query("SELECT * FROM header", function (err, resultHeader, fields) {
      if (err) throw err
      console.log('Loaded \'header\' from the MySQL')

      connection.query("SELECT * FROM news", function (err, resultNews, fields) {
        if (err) throw err
        console.log('Loaded \'news\' from the MySQL')

        connection.query("SELECT * FROM info", function (err, resultInfo, fields) {
          if (err) throw err
          console.log('Loaded \'info\' from the MySQL')

          connection.query("SELECT * FROM store", function (err, resultStore, fields) {
            if (err) throw err
            console.log('Loaded \'store\' from the MySQL')

            connection.query("SELECT * FROM gallery", function (err, resultGallery, fields) {
              if (err) throw err
              console.log('Loaded \'gallery\' from the MySQL')

              connection.query("SELECT * FROM contact", function (err, resultContact, fields) {
                if (err) throw err
                console.log('Loaded \'contact\' from the MySQL')

                expressServer(resultHeader, resultNews, resultInfo, resultStore, resultGallery, resultContact)
              })
            })
          })
        })
      })
    })
  })
}

connectToDatabase()