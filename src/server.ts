import express from 'express'

const app = express()

app.get('/', (request, response)=>{
  return response.json({"message": "Hello World"})
})

app.post('/', (request, response)=>{
  return response.json({"message": "Dados salvos com sucesso"})
})

app.listen(3333, ()=>{
  console.log('Server started on port 3333')
})