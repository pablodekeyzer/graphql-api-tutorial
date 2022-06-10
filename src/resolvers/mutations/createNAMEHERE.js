const { ApolloError } = require("apollo-server");

module.exports = async (_, { input }, { models }) => {

  try {
    const NAMEHERE = await models.NAMEHERE.create(input);
    return NAMEHERE
  }
  catch (e) {
    throw new ApolloError(e)
  }

};
