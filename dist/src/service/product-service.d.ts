import { Request, Response } from "express";
export declare class ProductService {
    private productRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
    findByName: (req: Request, res: Response) => Promise<any>;
    findByCategory: (req: Request, res: Response) => Promise<any>;
    saveProduct: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<any>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductService;
export default _default;
