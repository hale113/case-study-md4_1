import express from 'express';
import {router} from "./src/router/router";
import fileUpload from "express-fileupload";
const app = express();
app.set('view engine','ejs');
app.set("views","./src/views");
app.use(express.static('public'));
app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}));
app.use('',router);
const POST = 3000;

app.listen(POST,()=>{
    console.log('server is running');
});
