import Config from "../lib/config";
import axios from "axios";
import ServiceUtils from "../lib/ServiceUtils";

export default class UserService {
  static MODULE_PATH = Config.apiURL() + "/user";

  static async getAll() {
    try {
      const res = await axios.get(
        this.MODULE_PATH + "/",
        await ServiceUtils.getHeader()
      );
      return ServiceUtils.extractData(res);
    } catch (err) {
      throw ServiceUtils.handleError(err);
    }
  }

  static async getById(id) {
    try {
      const res = await axios.get(
        this.MODULE_PATH + "/" + id,
        await ServiceUtils.getHeader()
      );
      return ServiceUtils.extractData(res);
    } catch (err) {
      throw ServiceUtils.handleError(err);
    }
  }

  static async create(user) {
    try {
      const res = await axios.post(this.MODULE_PATH + "/", user);
      return ServiceUtils.extractData(res);
    } catch (err) {
      throw ServiceUtils.handleError(err);
    }
  }
}
