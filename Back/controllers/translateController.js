const axios = require('axios');


//get Translate
const getTranslate = async (req, res) => {
    console.log('What\'s up');
   // res.send('Hello, GET request received!');
    res.status(200).json('hello')
  
  }

  const createTranslate=async(req,res)=>{
    try {
        const url = process.env.API_URL;
        const data = {
          file: 'https://reactionvids.s3.us-east-2.amazonaws.com/3b9d2585-4b6c-441a-aaab-7bbd2549cb14.mp4',
          language: 'es'
        };
    
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
    
        const response = await axios.post(url, data, config);
        res.status(200).json({ response: response.data });
        console.log('Translated vid->', response.data);
 
      } catch (error) {
        console.log("THIS IS THE ERROR");
        res.status(500).json({ error: error.message });
        console.error('Error:', error);
      }
  }



  module.exports={getTranslate,createTranslate}