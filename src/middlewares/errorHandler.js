function erroHandler(err, req, res, next){

    console.log(err)

    res.status(500).json({message: 'Erro interno do servidor'})
}

export default erroHandler