
const getBeer = async ( req, res ) => {
    return res.status(200).send([
        {
            "name":"Corona", 
            "type": "lager"
        },
        {
            "name":"Victoria", 
            "type": "lager"
        }

    ]).json();
}

const saveBeer = async ( req, res ) => {
    console.log(req.body);
    return res.status(201).send({
        message : 'created',
    }).json();
}

module.exports = { getBeer, saveBeer };