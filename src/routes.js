import receipt from './api/receipt';
import purchase from './api/purchase';

export default (app) => {

    app.use('/api/receipt', receipt);
    app.use('/api/purchase', purchase);

    app.route('/*').get(({req, res}) => {
        console.log(app.get('appPath'));
        res.sendFile(app.get('appPath') + '/index.html');
    })
}