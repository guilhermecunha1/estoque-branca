import Fabric from '../models/Fabric.js'

async function createFabric(data) {
    const fabric = await Fabric.create(data)

    return fabric
}

async function getAllFabrics() {
    const fabrics = await Fabric.find()

    return fabrics
}

async function getFabricById(id) {
    
    const fabric = await Fabric.findById(id)

    return fabric
}

async function updateFabric(id, data) {
    const fabric = await Fabric.findByIdAndUpdate(id, data, {new: true, runValidators: true})

    return fabric
}

async function deleteFabric(id) {
    const fabric = await Fabric.findByIdAndDelete(id)

    return fabric
}

export {
    createFabric,
    getAllFabrics,
    getFabricById,
    updateFabric,
    deleteFabric,

}