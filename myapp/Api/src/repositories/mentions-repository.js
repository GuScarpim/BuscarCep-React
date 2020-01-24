const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

// Função get
exports.listMentions = async () => {
    // Remove o _id e o _v
    const res = await Mentions.find({}, 'friend mention');
    return res;
};

// Função Post
exports.createMention = async data => {
    const mention = new Mentions(data);
    await mention.save();
};

// Função Update (findByIdAndUpdate busca algum valor no banco de dados pelo ID e passa uma atualização para este dado)
exports.updateMention = async (id, data) => {
    await Mentions.findByIdAndUpdate(id, {
        // diz ao banco o que deve ser atualizado
        $set: data
    });
};

// Função para deletar (findOneAndRemove que busca um dado e deleta ele.)
exports.deleteMention = async id => {
    await Mentions.findOneAndRemove(id);
};