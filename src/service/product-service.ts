import {AppDataSource} from "../data-source";
import {Product} from "../model/product";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload";

export class ProductService {
    private productRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connect Database Success!')
            this.productRepository = connection.getRepository(Product);
        })
        this.productRepository = AppDataSource.getRepository(Product);
    }
    findAll = async (req: Request, res: Response) => {
        return await this.productRepository.query(`select * from products join category on idCategory = category.idC`)
    }
    findByName = async (req: Request, res: Response) => {
        let nameFind = req.body.name;
        let products = await this.productRepository.query(`select *from products join category on idCategory = idC  where products.name like '%${nameFind}%'`);
        return products;
    }
    findByCategory = async (req: Request, res: Response) => {
        let idFind = req.params.id;
        let products =  await this.productRepository.query(`select * from products join category on idCategory = idC where idCategory = ${idFind}`);
        return products

    }
    saveProduct = async (req: Request, res: Response) => {
        let files = req.files;
        if (files != null) {
            let product = req.body;
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            product.image = 'storage/' + image.name;
            await this.productRepository.save(product);
            res.redirect(301, '/products');
        }
    }
    findById = async (req: Request, res: Response) => {
        let id = +req.params.id;
        let product = await this.productRepository.query(`select * from products join category on  idCategory = idC where products.id = ${id}`);
        return product
    }
    editProduct = async (req: Request, res: Response) => {
        let files = req.files;
        let id = +req.params.id;
        if (files != null) {
            let product = req.body;
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            product.image = 'storage/' + image.name;
            await this.productRepository.update({id: id}, product);
            res.redirect(301, '/products');
        }
    }
    deleteProduct = async (req: Request, res: Response) => {
        let id = +req.params.id;
        await this.productRepository.delete(id);
        res.redirect(301, '/products');

    }

}

export default new ProductService();