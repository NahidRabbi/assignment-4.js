function password(obj) {
    if(!obj.name||!obj.birthYear|| !obj.siteName){
      return "Invalid";
    }
    else if(obj.birthYear.toString().length !== 4){
      return "Invalid";
    }
    
     const name= obj.name;
     const birthYear= obj.birthYear;
     const siteName= obj.siteName;
     let upperSiteName= siteName.charAt(0).toUpperCase()+ siteName.slice(1).toLowerCase();
     const pass = upperSiteName + "#" + name+ "@" + birthYear;
     return pass;
    }
    

    console.log(password({ name: 'maisha' , birthYear: 2002, siteName:"googlE" } ));