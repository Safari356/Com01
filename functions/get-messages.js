exports.handler = async (event, context) => {
    // Ici, tu peux récupérer les messages depuis une base de données ou un fichier JSON
    const messages = ["Message 1", "Message 2"]; // Exemple de données
    return {
        statusCode: 200,
        body: JSON.stringify(messages),
    };
};
