import fs from 'fs';
//WHAT IS PATH HERE? i.e. .. path.join.. what is path? an object?
import path from 'path';

//get filepath to data directory
const dataDir=path.join(process.cwd(),'data');
    // a filepath to your json file
    const filePath = path.join(dataDir,'persons.json');
    const filePath2= path.join(dataDir,'contact.json');
    // read file and save it in a string, jsonPersString
    const jsonPersString = fs.readFileSync(filePath,'utf8');
    const jsonContString = 
fs.readFileSync(filePath2,'utf8');
    //convert string data (using json parse method).jsonObj now has the entire object value in it
    const jsonObj = JSON.parse(jsonPersString);
    const jsonObj2= JSON.parse(jsonContString);
    //returned from this function is an array structured with a params object value. Now we have each object ided -- routes must always be strings

//FUNCTION ONE*****
//function returns ids for all json objects in array
export function getAllIds()
  {
    return jsonObj.map(item=> {
      return{
        params:{
          id: item.id.toString()
        }
      }
      
    });
  }


//NEXT FUNCTION *******
//sends back an array of object values with ids and names in them, sorted alphabetically
export function getSortedList()
  {

  jsonObj.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });
    
  }
//NEXT FUNCTION *******
//function returns names and ids for all json objects in array, sorted by name property
//async function that gets complete data for just one person
//THIS IS THE FUNCTION USED BY GETSTATICPROPS() IN [ID].JS
export async function getData(iDRequested)
  {

//Find obj value in array with matching id. RETURNS AN ARRAY WITH ONE ELEMENT IN IT
    //****HERE do  a filter to find the other people associated****
    
    const objMatch = jsonObj.filter(
      obj => {
        return obj.id.toString() === iDRequested;
      }
    );

        
    const objMatch2 = jsonObj2.filter(
      obj => {
        return obj.id.toString() === iDRequested;
      }
    );

    //extract obj value in array if any exist
    let objReturned;
    if (objMatch.length > 0)
    {
      objReturned = objMatch[0];
    }
    else
    {
      objRetured = {};
    }

        //extract obj value in array if any exist
    let objReturned2;
    if (objMatch2.length > 0)
    {
      objReturned2 = objMatch2[0];
    }
    else
    {
      objRetured2 = {};
    }

    return [objReturned,objReturned2];
  }
  