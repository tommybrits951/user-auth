const db = require('../data/db-config')



async function getByUsername(username) {
    return await db('users as u').leftJoin('roles as r', "u.role_id", "=", "r.role_id").where('u.username', username).select("u.*", "r.role").first()
}
function getById(id) {
    return db('users').where("user_id", id).first()
}
async function putUser(user) {
    const [id] = await db("users").insert(user)
    console.log(id)
    const newUser = getById(id)
    return newUser
}
module.exports = {
    getByUsername,
    getById,
    putUser
}