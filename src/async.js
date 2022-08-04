import axios from "axios";

const handleSuccess = data => {
  console.log("handleSuccess: ", data);

  return data;
};

const handleError = data => {
  console.log("handleError: ", data);

  return data;
};

export async function getLocation() {
  const position = navigator.geolocation.getCurrentPosition(
    handleSuccess,
    handleError
  );

  return position;
}

export async function getWeather({
  latitude = 42.287104,
  longitude = -88.0214016
}) {
  const data = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
  );

  console.log("getWeather => data: ", data);

  return data;
}

// export default init;
