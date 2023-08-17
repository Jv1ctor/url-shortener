import { Router } from "express";
import * as homeController from "../controllers/homeController"

const router = Router()

router.get('/', homeController.home)
router.post('/', homeController.urlData)


router.get('/login', homeController.login)
router.get('/register', homeController.register)


export default router