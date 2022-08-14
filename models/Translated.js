import mongoose from 'mongoose'

const { Schema, model } = mongoose


const searchedHistory = new Schema({
    listedSentence: { type: String},
    preTranslatedSentence: {type: String}
})

const ListedSentence = model("listedSentence", searchedHistory)

export default ListedSentence