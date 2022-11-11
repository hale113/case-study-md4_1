import {ProductService} from "../service/product-service";
import {Request, Response} from "express";
import {CategoryService} from "../service/category-service";
export class ProductController{
    private categoryService: CategoryService
    private productService: ProductService
    constructor() {
        this.productService = new ProductService();
        this.categoryService = new CategoryService();
    }
    getAll = async (req: Request, res: Response)=>{
        let products = await this.productService.findAll(req,res);
        let categories = await this.categoryService.findAll(req,res);
        res.render('product/list', {
            listProduct: products,
            listCategory: categories
        });
    }
    showFindName = async (req: Request, res: Response)=>{
        let products = await this.productService.findByName(req,res);
        let categories = await this.categoryService.findAll(req,res);
        res.render('product/list', {
            listProduct: products,
            listCategory: categories
        });
    }
    showFindCategory = async (req: Request, res: Response)=>{
        let products = await this.productService.findByCategory(req,res);
        let categories = await this.categoryService.findAll(req,res);
        res.render('product/list', {
            listProduct: products,
            listCategory: categories
        });
    }
    showFormCreate = async (req: Request, res: Response)=> {
        let products = await this.productService.findAll(req,res);
        let categories = await this.categoryService.findAll(req,res);
        res.render('product/create',{
            listProduct: products,
            listCategory: categories
        });
    }
    createProduct = async (req: Request, res: Response)=> {
        await this.productService.saveProduct(req,res);

    }
    showFormEdit = async (req: Request, res: Response)=> {
        if ((+req.params.id) != null){
            let categories = await this.categoryService.findAll(req,res);
            let product = await this.productService.findById(req, res);
            res.render('product/edit',{
                product:product,
                listCategory: categories
            });
        }
    }
    editP = async (req: Request, res: Response)=> {
        await  this.productService.editProduct(req,res);
    }
    showFromDelete =  async (req:Request,res:Response)=>{

            res.render('product/delete')
    }
    deleteP = async (req: Request, res: Response)=> {
       await  this.productService.deleteProduct(req,res);

    }
}
export default new ProductController();