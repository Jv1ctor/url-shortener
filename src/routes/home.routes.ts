import { Router } from "express";
import * as homeController from "../controllers/homeController"

const router = Router()

router.get('/', homeController.home)
router.post('/', homeController.shortUrlCreate)
router.get('/login', homeController.login)
router.get('/register', homeController.register)

router.get('/delete/:code', homeController.ShortUrlDelete)
router.get('/:code', homeController.urlRedirect)


export default router