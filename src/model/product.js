const database = require('../config/databases')
const product = {}


product.GetAll = () => {
    return new Promise((resolve, reject) => { 
        database.query(`SELECT * FROM product ORDER BY id ASC`)
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

product.filter = (orderBy) => {
    return new Promise((resolve, reject) => {
        let query;
        if (orderBy == "id") {
            query = `SELECT * FROM product ORDER BY id ASC`
        } else if (orderBy == "name") {
            query = `SELECT * FROM public.product ORDER BY name ASC`
        } else if (orderBy == "price") {
            query = `SELECT * FROM public.product ORDER BY price ASC`
        } else if (orderBy == "latest") {
            query = `SELECT * FROM public.product ORDER BY id DESC`
        } else {
            query = false
        }
        if (query != false) {
            database.query(query)
                .then(res => resolve(res.rows))
                .catch(err => reject(err))
        } else {
            resolve(false)
        }

    })
}

product.get = (id) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM public.product WHERE id=${id}`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

product.Lupdate = () => {
    return new Promise ((resolve, reject) => {
        database.query ('SELECT * FROM public.product ORDER BY id DESC')
        .then(res => {
            resolve(res.rows)
        }) .catch(err => {
            reject(err)
        })
    })
}

product.Name = () => {
    return new Promise ((resolve, reject) => {
        database.query ('SELECT * FROM public.product ORDER BY name ASC')
        .then(res => {
            resolve(res.rows)
        }) .catch(err => {
            reject(err)
        })
    })
}

product.Price = () => {
    return new Promise ((resolve, reject) => {
        database.query ('SELECT * FROM public.product ORDER BY price ASC')
        .then(res => {
            resolve(res.rows)
        }) .catch(err => {
            reject(err)
        })
    })
}

product.Search = (name, sensitive = "false") => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM public.product WHERE lower(name) LIKE lower('${name}%');`)
        if (sensitive == "false") {
            database.query(`SELECT * FROM product WHERE lower(name) LIKE lower('${name}%');`)
                .then(res => resolve(res))
                .catch(err => reject(err))
        } else {
            database.query(`SELECT * FROM product WHERE lower(name) LIKE lower('%${name}%');`)
                .then(res => resolve(res))
                .catch(err => reject(err))
        }
    })
}


product.Add = (data) => {
    return new Promise((resolve, reject) => {
    database.query(`INSERT INTO product (name, price, date, images) VALUES ('${data.name}', '${data.price}', 'now()' , '${data.image} ')`)
        .then(res => {
            resolve(res)
            console.log(res)
        })
        .catch(err => {
            reject(err)
        })
    })
    
}


product.Edit = (data) => {
    return new Promise((resolve, reject) => {
    database
    .query(`UPDATE product SET name='${data.name}', images='${data.image}', price='${data.price}', date='now()' WHERE id = ${data.id} RETURNING *`)
    .then(res => {
        resolve(res.rows)
    })
    .catch(err => {
        reject(err)
    })
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