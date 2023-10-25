import * as model from "../models/activity.js";
import logger from "../utils/logger.js";
export default class ActivityDAO {

  save = async (activityData) => {
    try {
      const activity = await model
        .activityModel
        .create(activityData);
      return activity;
    } catch (error) {
      logger.error(error);
    }
  }
  getAll = async () => {
    try {
      const activity = await model
        .activityModel
        .find();
      return activity;
    } catch (error) {
      logger.error(error);
    }
  }
  getById = async (id) => {
    try {
      const activity = await model.activityModel.findOne({ _id: id });    
      return activity;
    } catch (error) {
      logger.error(error);
    }
  }
  update = async (data) => {
    try {

      const activity = await model
        .activityModel
        .findByIdAndUpdate(data.id, { ...data });
      return activity;
    } catch (error) {
      logger.error(error);
    }
  }
  delete = async (id) => {
    try {
      const activity = await model
        .activityModel
        .deleteOne({ _id: id });
      return activity;

    } catch (error) {
      logger.error(error);
    }
  }
  deleteAll = async () => {
    try {
      const activity = await model
        .activityModel
        .deleteMany();
      return activity;

    } catch (error) {
      logger.error(error);
    }
  }
}