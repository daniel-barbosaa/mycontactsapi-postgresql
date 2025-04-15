const ContactsRepository = require("../repositories/ContactsRepository");
const isValidUUID = require("../utils/isValidUUID");

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    //Listar todos os registro
    const contacts = await ContactsRepository.findAll(orderBy);

    response.json(contacts);
  }

  async show(request, response) {
    //Obter UM registro
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: "Invalid contact ID" });
    }

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "Contact not found" });
    }

    return response.json(contact);
  }

  async store(request, response) {
    // Criar novo registro
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is require" });
    }

    if (category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: "Invalid category ID" });
    }

    if (email) {
      const contactExists = await ContactsRepository.findByEmail(email);
      if (contactExists) {
        return response
          .status(400)
          .json({ error: "This e-mail is already in use" });
      }
    }

    const contact = await ContactsRepository.create({
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    return response.status(201).json(contact);
  }

  async update(request, response) {
    //Editar um registro
    const { id } = request.params;
    const { name, phone, email, category_id } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: "Invalid contact ID" });
    }

    if (category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: "Invalid category ID" });
    }
    if (!name) {
      return response.status(400).json({ error: "Name is require" });
    }

    const contactExists = await ContactsRepository.findById(id);
    if (!contactExists) {
      return response.status(404).json({ error: "Contact not found" });
    }

    if (email) {
      const contactByEmail = await ContactsRepository.findByEmail(email);
      if (contactByEmail && contactByEmail.id !== id) {
        return response
          .status(400)
          .json({ error: "This e-mail is already in use" });
      }
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    return response.json(contact);
  }

  async delete(request, response) {
    //Deletar um registro
    const { id } = request.params;

    await ContactsRepository.delete(id);

    return response.sendStatus(204);
  }
}

//Design system (Singleton)
module.exports = new ContactController();
