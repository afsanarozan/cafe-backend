const database = require('../config/databases')
const history = {}

    history.GetAll = () => {
        return new Promise((resolve, reject) => {
            database.query("SELECT * FROM history")
            .then(res => {
                resolve(res.rows)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    history.Add = (cashier, date, orders, amount) => {
        database.query(`INSERT INTO history (cashier, date, orders,amount) VALUES ('${cashier}', now(), ${orders}, ${amount})`)
    .then(res => {
        return "data Berhasil Ditambahkan"
    })
    .catch (err => {
        return err
    })
    }

    history.Edit = (invoice, cashier, date, orders, amount) => {
        database.query(`UPDATE history SET cashier='${cashier}', date=now(), orders=${orders}, amount=${amount} WHERE invoice = ${invoice}`)
        .then(res => {
            return "data Berhasil Update"
        })
        .catch (err => {
            return err
        })
    }

    history.Delete = (invoice) => {
        database.query(`DELETE FROM public.history WHERE invoice = ${invoice}`)
        .then(res => {
            console.log("Data Deleted")
        })
        .catch (err => {
            return err
        })
    }

module.exports = history
