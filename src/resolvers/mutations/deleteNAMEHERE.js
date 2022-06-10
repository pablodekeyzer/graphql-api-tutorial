const { ApolloError } = require("apollo-server");

module.exports = async (_, { id }, { models }) => {

  const deleteNAMEHERE = await models.NAMEHERE.deleteOne({ _id: id })

  if (deleteNAMEHERE.deletedCount) return { id: id }

  else throw new ApolloError(`Failed to delete address.`);

};