type Hotel = {
  address: string,
  phone:  number   // дополнительно задание pipe для форматирования
  weather: {
     title: string,
     water: number,
     temperatur: number
  },
  social_info:{ 
     title: string,
     followers: number,
     following: number
  }, 
  id: number
};