const { ApolloError } = require("apollo-server");

module.exports = async (_, { id }, { models }) => {

    try {

        let NAMEHERE = await models.NAMEHERE.findOne({ id: post.userid });
        return NAMEHERE
    }
    catch (e) {
        throw new ApolloError(e)
    }
};
