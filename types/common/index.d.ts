type Hotel = {
  address: string,
  phone:  string,   // дополнительно задание pipe для форматирования
  img: string
  weather: {
     title: string,
     water: number,
     temperatur: number
  },
  social_info:{ 
     title: string,
     img: string,
     followers: number,
     following: number
  }, 
  type: string
};