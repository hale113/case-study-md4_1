"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
const category_service_1 = require("../service/category-service");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            let categories = await this.categoryService.findAll(req, res);
            res.render('product/list', {
                listProduct: products,
                listCategory: categories
            });
        };
        this.showFindName = async (req, res) => {
            let products = await this.productService.findByName(req, res);
            res.render('product/list', {
                listProduct: products
            });
        };
        this.showFormCreate = async (req, res) => {
            let categories = await this.categoryService.findAll(req, res);
            res.render('product/create', {
                listCategory: categories
            });
        };
        this.createProduct = async (req, res) => {
            await this.productService.saveProduct(req, res);
        };
        this.showFormEdit = async (req, res) => {
            if ((+req.params.id) != null) {
                let product = await this.productService.findById(req, res);
                res.render('product/edit', { product: product });
            }
        };
        this.editP = async (req, res) => {
            await this.productService.editProduct(req, res);
        };
        this.showFromDelete = async (req, res) => {
            res.render('product/delete');
        };
        this.deleteP = async (req, res) => {
            await this.productService.deleteProduct(req, res);
        };
        this.productService = new product_service_1.ProductService();
        this.categoryService = new category_service_1.CategoryService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map