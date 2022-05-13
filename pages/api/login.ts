import users from '../../data/users.js'

export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(404);
        return;
    }

    try {
        const {user, password, name, picture} = JSON.parse(req.body)
        if (!users[user] || users[user] !== password) {
            res.status(403)
            return
        }

        res.status(200).json({
            user,
            name,
            picture
        })

    } catch (e) {
        console.error(e)
        res.status(400)
    }

}