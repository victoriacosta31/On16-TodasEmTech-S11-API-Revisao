const app = require('./src/app')

const PORT = 1313;

app.listen(PORT, () =>{
    console.log(`Seu servidor está na porta ${PORT}`);
})