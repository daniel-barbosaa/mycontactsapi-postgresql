module.exports = (error, request, response, next) => {
  console.log("Capturado pelo middleware");
  console.log(error); // Log do erro
  response.status(500).json({
    message: "Ocorreu um erro interno no servidor",
    error: error.message || "Erro desconhecido",
  });
};
