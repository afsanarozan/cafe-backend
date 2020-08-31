const database = require('../config/databases')
const product = {}


product.GetAll = () => {
    return new Promise((resolve, reject) => {
        database.query('SELECT * FROM product')
        .then(res => {
            resolve(res.rows)
            if (res.rows == []){
                console.log('data tidak ada')
            }
        })
        .catch(err => {
            reject(err)
        })
    })
}

product.Get= (name) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM public.product WHERE name = '${name}'`)
        .then(res => {
            resolve(res.rows)
        }) 
        .catch(err => {
            reject(err)

        })
    })
}

product.Add=(name, stock, price, date) => {
    database.query(`INSERT INTO product (name, stock, price, date) VALUES ('${name}', ${stock}, '${price}', 'now()')`)
    .then(res => {
        return "data Berhasil Ditambahkan"
    })
    .catch(err => {
        return err
    })
} 

product.Edit = (id, name, stock, price, date) => {
    database
    .query(`UPDATE product SET name='${name}', stock= ${stock}, price='${price}', date='${date}' WHERE id = ${id} `)
    .then(res => {
        return res.rowCount
    })
    .catch(err => {
        console.log(err)
        return err
    })
} 

product.Delete = (id) => {
    database.query(`DELETE FROM product WHERE id = ${id};`)
    .then(res => {
        console.log(res)
        return res
    }) 
    .catch(err => {
        console.log(err)
        return err
    })
}


module.exports = product