//Take in name to use for image input and amount to collect 1)
//Search for images associated with name 2)
//Collect urls into temp txt file 3)
//Filter images found on url with ML model 4)
//Showcase images to download (Allow user to select which images not to download) 5)
//Use the pictures the user decided not to download as training data for ML model 6)
//Download filtered images into directed folder 7)


//1 & 2
function ImgSearch(search, amount){
   return null
}

//3
function urlCollect(){
   urls = []
   //for loop to iterate over every element and store the url in a Matrix ["url": image] -> [key: value]
   
   
   ImgSearch()
   return null
}

//4
function filter(urls){
   //Apply ML algorithm towards dataset and return leftovers
   filteredURLS = []
   return null
}

//5
function disply(urls, amount){
   //iterate over dataset to display value of filterdURLS on designated div on HTML page
   return null
}

//5 1/2 & 6
function removeIMG(filteredURLS){
//remove key and values that were selected on the front end from original set
// and add to a new set to display
   newURLS = []
   return null
}

//7
function download(location){
   //intall in designated folder
   return null
}







function imageDownload(search, amount){

   let searchCopy = "";
   //in order to have a proper google search, a "+" is needed in place of all spaces
   //within the search text string
   for (let s = 0; s < search.length(); s++){
      if(search[s] == " "){
         searchCopy[s] = "+";
      }else
         searchCopy[s] = search[s];
   }

 //use chrome api to get the current tab
 //if user is already on the tab that they want to download from,
 //allow them to simpy search without having to input tab url
    if (search != Null){
      let url = `google.com/search?tbm=isch&q=${searchCopy}`;
    }else{
      let url = gettab();
    }

 //use amount to specify how many downloads are to be done
 //create for loop to iterate
    
 //use chrome api to download image using the current url
 
    //chrome.downloads.download(
    //options : search
 //)
}

//use chrome api to get the current tab
async function getab(){
    let queryoptions = {active: true, currentWindow: true};
    let tabs = await chrome.tabs.query(queryOptions);
    return tabs[0].url
}

imageDownload(search, amount);

//possibly query every images url on the page and then iterate
//through each url


//Remover Search bar and display new download form
function formExpand(search){
   return
}