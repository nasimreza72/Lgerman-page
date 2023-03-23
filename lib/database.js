import mongoose from "mongoose"

export function connect() {

   //  const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
    const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
   // const connStr = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
    const connStr = `mongodb+srv://nasim:Nasim_1993@cluster0.wlorexc.mongodb.net/?retryWrites=true&w=majority`


    // Mongoose connection events
    const { connection } = mongoose
    connection.on("connecting",      () => console.log("[DB] connecting"))
    connection.on("connected",       () => console.log("[DB] connected"))
    connection.on("disconnecting",   () => console.log("[DB] disconnecting"))
    connection.on("disconnected",    () => console.log("[DB] disconnected"))
    connection.on("reconnected",     () => console.log("[DB] reconnected"))
    connection.on("error",           error => console.log("[DB] error", error))

    // Mongoose - start to connect
    mongoose.connect(connStr)
}