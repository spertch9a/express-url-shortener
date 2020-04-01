const UrlModel = require('./models');

const database = {}; //corected variable name and turned into an object

const UrlShortenerController = {
  createShortUrl: (req, res) => {
    //hna min lien li nmedah ykoun jdid
// key  : value
//code : link
    const {fullUrl} = req.body ; // TODO get this from request body DONE
    if(fullUrl){  
     if(! database.hasOwnProperty(fullUrl)){
      const instance = new UrlModel(fullUrl);
      database[fullUrl] = instance.code;
      return res.status(201).send(instance);}
   res.status(409).json({Error : "Link already exists"}) //409 for conflict 
     }

      //in case we did not give the url
    res.status(400).json({Error: "Url not given" })
  },

  getUniqueShortUrl: (req, res) => {    
    // TODO return HTTP code 200 with the element
    // TODO return 404 if the element is not found
    return res.status(200).json({ data: database[id] });
  },

  redirectToOriginalUrl: (req, res) => {
  const id =   req.params.code ;
 var link = getKeyByValue(database, id);
 console.log("redirecting......")
  res.redirect(link);
  }
};

//this function is used to search for a key
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}




module.exports = UrlShortenerController;
