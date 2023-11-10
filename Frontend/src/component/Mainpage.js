import './Mainpage.css';
import { useState } from "react"; 
import { Configuration, OpenAIApi } from "openai";
// import Navbars from './Navbars'
function Mainpage() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const [placeholder, setPlaceholder] = useState(
      "Search for a lion with Paint Brushes painting the mona lisa painting..."
    );

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
  
    const openai = new OpenAIApi(configuration);
  
    const generateImage = async () => {
      setPlaceholder(`Search ${prompt}..`);
      setLoading(true);

      try {
        const res = await openai.createImage({
          prompt: prompt,
          n: 1,
          size: "512x512",
        });

        setLoading(false);
        setResult(res.data.data[0].url);
      } catch (error) {
        setLoading(false);
        console.error(`Error generating image: ${error.response.data.error.message}`);
      }
    };
    return (
      <>
      {/* <Navbars /> */}
        <div className="main-page-container">
          { loading ? (
          <>
            <h3>Generating image... Please Wait...</h3>
          </>
          ) : (
          <>
            <h2>UɳιƙPιx Gҽɳҽɾαƚσɾ</h2>
  
            <input
              className="app-input"
              placeholder={placeholder}
              onChange={(e) => setPrompt(e.target.value)}
              // rows="10"
              // cols="100"
            />
  
            <button onClick={generateImage}>Generate an Image</button>
  
            { result.length > 0 ? (
              <img className="result-image" src={result} alt="result" />
            ) : (
              <>
              </>
            )}
          </>
          )}
        </div>
        </>
      )
  }
  
  export default Mainpage;