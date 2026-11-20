import {
  createFabric,
  getAllFabrics,
  getFabricById,
  updateFabric,
  deleteFabric,
} from "../services/fabricServices.js";

async function create(req, res, next) {
  const data = req.body;

  try {
    const fabric = await createFabric(data);
    res.status(201).json(fabric);

  } catch (err) {
    next(err)
  }
}

async function findAll(req, res) {
  try {
    const fabrics = await getAllFabrics();
    res.status(200).json(fabrics);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
}

async function getById(req, res) {
  const id = req.params.id;
  try {
    const fabric = await getFabricById(id);

    if (!fabric) {
      return res.status(404).json({ message: "Erro ao encontrar tecido" });
    }
    res.status(200).json(fabric);
  } catch (err) {
    res.status(500).json({ message: "Erro interno do servidor." });
  }
}

async function update(req, res) {
  const id = req.params.id;
  const data = req.body;
  try {
    const fabric = await updateFabric(id, data);

    if (!fabric) {
      return res.status(404).json({ message: "Tecido nao encontrado" });
    }
    res.status(200).json(fabric);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
}

async function exclude(req, res) {
  const id = req.params.id;
  try {
    const fabric = await deleteFabric(id);

    if (!fabric) {
      return res.status(404).json({ message: "Tecido nao encontrado." });
    }
    res.status(200).json(fabric);
  } catch (err) {
    res.status(500).json({ message: "Erro interno do servidor." });
  }
}

export { create, findAll, getById, update, exclude };
