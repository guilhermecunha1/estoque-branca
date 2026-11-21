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

async function findAll(req, res, next) {
  try {
    const fabrics = await getAllFabrics();
    res.status(200).json(fabrics);
  } catch (err) {
    next(err)
  }
}

async function getById(req, res, next) {
  const id = req.params.id;
  try {
    const fabric = await getFabricById(id);

    if (!fabric) {
      return res.status(404).json({ message: "Erro ao encontrar tecido" });
    }
    res.status(200).json(fabric);
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  const id = req.params.id;
  const data = req.body;
  try {
    const fabric = await updateFabric(id, data);

    if (!fabric) {
      return res.status(404).json({ message: "Tecido nao encontrado" });
    }
    res.status(200).json(fabric);
  } catch (err) {
    next(err)
  }
}

async function exclude(req, res, next) {
  const id = req.params.id;
  try {
    const fabric = await deleteFabric(id);

    if (!fabric) {
      return res.status(404).json({ message: "Tecido nao encontrado." });
    }
    res.status(200).json(fabric);
  } catch (err) {
    next(err)
  }
}

export { create, findAll, getById, update, exclude };
