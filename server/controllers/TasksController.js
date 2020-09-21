import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { taskService } from '../services/TaskService'
import { dbContext } from "../db/DbContext";
import Task from "../models/Task";

export class TasksController extends BaseController {
  constructor() {
    super("api/tasks")
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await taskService.getAll(req.userInfo.email)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await taskService.getById(req.params.id, req.userInfo.email)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await taskService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await taskService.edit(req.params.id, req.userInfo.email, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await taskService.delete(req.params.id, req.userInfo.email)
      return res.send('Successfully did the thing')
    } catch (error) {
      next(error)
    }
  }
}


