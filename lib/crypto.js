import bcrypt from 'bcrypt'

function hash(password) {
    return bcrypt.hash(password, 10)
}

function compareHashes(password, hash) {
    return bcrypt.compare(password, hash)
}

export { hash, compareHashes }