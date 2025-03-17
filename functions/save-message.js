exports.handler = async (event, context) => {
    const { message } = JSON.parse(event.body);
    // Ici, tu peux stocker le message dans une base de données ou un fichier JSON
    return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
    };
};
