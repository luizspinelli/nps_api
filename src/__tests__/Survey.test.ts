import request from 'supertest'
import { app } from '../app'
import createConnection from '../database';

describe("Surveys", async ()=>{
  beforeAll(async ()=>{
    const connection = await createConnection();
    await connection.runMigrations();
  })

  it('should be able to create a new survey', async ()=> {

    const response =  await request(app).post('/surveys').send({
      title: "Survey Example",
      description: "Survey example"
    })

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");

  })

  it('should be able to get all surveys', async ()=> {

    await request(app).post('/surveys').send({
      title: "Survey Example2",
      description: "Survey example2"
    })

    const response = await request(app).get('/surveys');

    expect(response.body.length).toBe(2);

  })

})
