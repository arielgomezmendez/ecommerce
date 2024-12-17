export const getFakeApiData = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    if(response){
      const data = await response.json();
      return data;
    }
  }
  catch(error) {
    console.log('Ocurrió un error: ', error);
    throw error;
   }

  
}