import users from '../../data/users.js'

export default function handler(req, res) {


    if (req.method !== 'POST') {
        res.status(404).end();
        return;
    }

    try {
        const {user, password} = JSON.parse(req.body)

        console.log('User', user, password)
        const foundUser = users.find((details) => details.user === user && details.password === password)

        if (!foundUser) {
            res.status(403).end()
            return
        }

        res.status(200).json(foundUser)
        return

    } catch (e) {
        console.error(e)
        res.status(400).end()
    }
}
