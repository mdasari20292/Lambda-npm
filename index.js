const {v4 : uuidv4 } =require('uuid');
uuidv4();
exports.handler = async (event) => {
    const uuid = uuidv4();;
    return 'uuid: '+uuid;
    
};