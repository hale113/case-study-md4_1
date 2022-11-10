import { Request, Response } from "express";
export declare class ProductController {
    private categoryService;
    private productService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    showFindName: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    editP: (req: Request, res: Response) => Promise<void>;
    showFromDelete: (req: Request, res: Response) => Promise<void>;
    deleteP: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
