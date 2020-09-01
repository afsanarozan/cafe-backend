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

product.Urut = () => {
    return new Promise ((resolve, reject) => {
        database.query ('SELECT * FROM public.product INNER JOIN category ON category.id = product.id ORDER BY food_category ASC')
        .then(res => {
            resolve(res.rows)
        }) .catch(err => {
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


product.add= (name, stock, price, date) => {
    return new Promise((resolve, reject) => {
        database.query(`INSERT INTO product (name, stock, price, date) VALUES ('${name}', ${stock}, '${price}', 'now()')`)
        .then(res => {
            resolve("data Ditamahkan")
        }) 
        .catch(err => {
            reject(err)

        })
    })
}

// product.add=(name, stock, price, date) => {
//     return New Promise ((resolve,reject) => {
//     database.query(`INSERT INTO product (name, stock, price, date) VALUES ('${name}', ${stock}, '${price}', 'now()')`)
//     })
// }

product.Add=(name, stock, price, date) => {
    database.query(`INSERT INTO product (name, stock, price, date) VALUES ('${name}', ${stock}, '${price}', 'now()')`)
    .then(res => {
        return res
    })
    .catch(err => {
        return err
    })
}



product.Edit = (id, name, stock, price, date) => {
    database
    .query(`UPDATE product SET name='${name}', stock= ${stock}, price='${price}', date='now()' WHERE id = ${id} `)
    .then(res => {
        return res
    })
    .catch(err => {
        console.log(err)
        return err
    })
} 


product.Delete = (id) => {
    database.query(`DELETE FROM product WHERE id = ${id};`)
    .then(res => {
        return res
    }) 
    .catch(err => {
        console.log(err)
        return err
    })
}


module.exports = product