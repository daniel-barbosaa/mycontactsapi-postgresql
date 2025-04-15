const { Router } = require("express");
const ContactController = require("./app/controllers/ContactController");
const CategoryController = require("./app/controllers/CategoryController");

//Funciona como manipulador para funçoes/metodos assincrono, ela retorna um promisse com o erro para um middleware que o captura
var wrap = require("async-middleware").wrap;

const router = Router();

// Contacts
router.get(
  "/contacts",
  (request, response, next) => {
    request.meuId = "testeid";
    next();
  },
  ContactController.index
);
router.get("/contacts/:id", wrap(ContactController.show));
router.delete("/contacts/:id", wrap(ContactController.delete));
router.post("/contacts", wrap(ContactController.store));
router.put("/contacts/:id", wrap(ContactController.update));

//Categories
router.get("/categories", wrap(CategoryController.index));
router.delete("/categories/:id", wrap(CategoryController.delete));
router.post("/categories", wrap(CategoryController.store));
router.get("/categories/:id", wrap(CategoryController.show));
router.put("/categories/:id", wrap(CategoryController.update));

module.exports = router;

