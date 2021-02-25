import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import SurveysRepository from "../repositories/SurveysRepository";

class SurveyController {

  async create (request: Request, response: Response){
    const data = request.body

    const surveysRepository = getCustomRepository(SurveysRepository);

    const surveyAlreadyExists = await surveysRepository.findOne({title: data.title})

    if(surveyAlreadyExists){
      return response.status(400).json({"error": "Survey already exists"})
    }

    const survey = surveysRepository.create(data);

    await surveysRepository.save(survey)

    return response.json(survey)
  }

  async index (request: Request, response: Response){
    const surveysRepository = getCustomRepository(SurveysRepository);

    const allSurveys = await surveysRepository.find()

    return response.json(allSurveys)
  }
}

export default SurveyController;
