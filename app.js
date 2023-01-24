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