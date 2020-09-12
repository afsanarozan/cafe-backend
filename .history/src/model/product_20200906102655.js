const database = require('../config/databases')
const product = {}


product.GetAll = () => {
    return new Promise((resolve, reject) => {
        database.query('SELECT * FROM product ORDER BY id ASC')
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

product.Lupdate = () => {
    return new Promise ((resolve, reject) => {
        database.query ('SELECT * FROM public.product INNER JOIN category ON category.id = product.id ORDER BY product.id DESC')
        .then(res => {
            resolve(res.rows)
        }) .catch(err => {
            reject(err)
        })
    })
}

product.Name = () => {
    return new Promise ((resolve, reject) => {
        database.query ('SELECT * FROM public.product INNER JOIN category ON category.id = product.id ORDER BY name ASC')
        .then(res => {
            resolve(res.rows)
        }) .catch(err => {
            reject(err)
        })
    })
}

product.Category = () => {
    return new Promise ((resolve, reject) => {
        database.query ('SELECT * FROM public.product INNER JOIN category ON category.id = product.id ORDER BY food_category ASC')
        .then(res => {
            resolve(res.rows)
        }) .catch(err => {
            reject(err)
        })
    })
}

product.Price = () => {
    return new Promise ((resolve, reject) => {
        database.query ('SELECT * FROM public.product INNER JOIN category ON category.id = product.id ORDER BY price DESC')
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


product.Add = (name, price, date,  images,) => {
    return new Promise((resolve, reject) => {
    database.query(`INSERT INTO product (name, price, date, images) VALUES ('${name}', '${price}', 'now()' , '${images}')`)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
    
}


product.Edit = (id, name, images, price, date) => {
    database
    .query(`UPDATE product SET name='${name}', images= ${images}', price='${price}', date='now()' WHERE id = ${id} `)
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