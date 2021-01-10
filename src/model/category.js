const database = require('../config/databases')
const category = {}

category.all = () => {
    return new Promise ((resolve, reject) => {
        database.query("SELECT * FROM category")
        .then((res) => {
            resolve(res.rows)
        }).catch((err) => {
            reject(err)
        });
    })
}

category.add = (food_category, supplier) => {
    return new Promise ((resolve, reject) => {
        database.query(`INSERT INTO category (food_category, supplier) VALUES ('${food_category}', '${supplier}')`)
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

// category.add = () => {
//     database.query()
//     .then(res => {
//         console.log(res)
//         return res
//     }) .catch(err => {
//         return err
//     })
// }

category.Edit = (id, food_category, supplier) => {
    return new Promise ((resolve, reject) => {
        database.query(`UPDATE public.category SET food_category='${food_category}', supplier='${supplier}' WHERE id = ${id}`)
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

category.delete = (id) => {
    return new Promise ((resolve, reject) => {
        database.query(`DELETE FROM category WHERE id = ${id};`)
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}




module.exports = category