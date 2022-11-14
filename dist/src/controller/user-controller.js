"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user-service");
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            res.render('user/login');
        };
        this.login = async (req, res) => {
            let user = req.body;
            console.log(user);
            let users = await this.userService.findAll(req, res);
            for (let i = 0; i < users.length; i++) {
                if (user.nameUser === users[i].nameUser && user.password === users[i].password) {
                    res.redirect('/products');
                }
            }
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map