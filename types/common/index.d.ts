type Hotel = {
  address: string,
  phone:  string,   // дополнительно задание pipe для форматирования
  img: string
  weather: Weather,
  social_info: Social_info, 
  type: string
};

type Weather = {
  title: string,
  img: string,
  water: number,
  temperatur: number
};

type Social_info = { 
  title: string,
  img: string,
  followers: number,
  following: number
};