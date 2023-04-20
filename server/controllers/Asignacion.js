import db from '../services/DBConnection.js'

const getAsignaciones = (req, res) => {
  const query = `select usuario "Usuario", u.nombre "Nombre", i.nombre "Institucion", fecha_entrada "Fecha de entrada", fecha_salida "Fecha de salida"
	from asignacion asi
	inner join usuario u on asi.usuario = u.username
	inner join institucion i on asi.institucion = i.institucion_id;`
  db.query(query, (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).send({ ok: false, error: `Error del servidor: ${err}` })
      return
    }

    res.send({ ok: true, result: result.rows })
  })
}

export {
  getAsignaciones
}