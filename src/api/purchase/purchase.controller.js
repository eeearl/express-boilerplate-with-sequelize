import models from './../';

export const fetchAll = (req, res) => {
    const jsonBody = req.body;
    const purchases = jsonBody.purchaseArray;

    let result = true;

    purchases.forEach(element => {
        models.Purchase.build({
            id: null,
            receipt_id: element.receipt_id,
            quantity: element.quantity,
            item_name: element.item_name,
            reg_date: element.reg_date,
            price: element.price,
            delete_flag: false
        })
        .save()
        .then(savedObject => {
            
        })
        .catch(error => {
            result = false;
            res.sendStatus(400, error);
        });    
    });

    res.sendStatus(200);
    
};

export const fetchOne = (req, res) => {
    const id = req.parameter.id;
    

    res.sendStatus(200);
    
};

export const create = (req, res) => {
    const jsonBody = req.body;
    const purchases = jsonBody.purchaseArray;

    let result = true;

    purchases.forEach(element => {
        models.Purchase.build({
            id: null,
            receipt_id: element.receipt_id,
            quantity: element.quantity,
            item_name: element.item_name,
            reg_date: element.reg_date,
            price: element.price,
            delete_flag: false
        })
        .save()
        .then(savedObject => {
            
        })
        .catch(error => {
            result = false;
            res.sendStatus(400, error);
        });    
    });

    res.sendStatus(200);
    
};


export const destroy = (req, res) => {
    
    
};
