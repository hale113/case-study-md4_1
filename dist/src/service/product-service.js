"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const data_source_1 = require("../data-source");
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.findAll = async (req, res) => {
            return await this.productRepository.query(`select * from products join category on idCategory = category.idC`);
        };
        this.findByName = async (req, res) => {
            let nameFind = req.body.name;
            let products = await this.productRepository.query(`select *
                                                           from products
                                                           where products.name like '%${nameFind}%'`);
            return products;
        };
        this.saveProduct = async (req, res) => {
            let files = req.files;
            if (files != null) {
                let product = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.save(product);
                res.redirect(301, '/products');
            }
        };
        this.findById = async (req, res) => {
            let id = +req.params.id;
            return await this.productRepository.findOneBy({ id: id });
        };
        this.editProduct = async (req, res) => {
            let files = req.files;
            let id = +req.params.id;
            if (files != null) {
                let product = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.update({ id: id }, product);
                res.redirect(301, '/products');
            }
        };
        this.deleteProduct = async (req, res) => {
            let id = +req.params.id;
            await this.productRepository.delete(id);
            res.redirect(301, '/products');
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connect Database Success!');
            this.productRepository = connection.getRepository(product_1.Product);
        });
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.ProductService = ProductService;
exports.default = new ProductService();
//# sourceMappingURL=product-service.js.map