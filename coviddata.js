var covidData = [
  {
    "state": "Andhra Pradesh",
    "TCC" : 3,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[15.9129, 79.7400]
  },
  {
    "state": "Chhattisgarh",
    "TCC" : 1,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[21.2787, 81.8661]
  },
  {
    "state": "Delhi",
    "TCC" : 25,
    "TCCFN": 1,
    "cu_dc_mig":5,
    "death":1,
    "coordinates":[28.7041, 77.1025]
  },
  {
    "state": "Gujarat",
    "TCC" : 7,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[22.2587, 71.1924]
  },
  {
    "state": "Haryana",
    "TCC" : 3,
    "TCCFN": 14,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[29.0588, 76.0856]
  },
  {
    "state": "Himachal Pradesh",
    "TCC" : 2,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[31.1048, 77.1734]
  },
  {
    "state": "Karnataka",
    "TCC" : 15,
    "TCCFN": 0,
    "cu_dc_mig":1,
    "death":1,
    "coordinates":[15.3173, 75.7139]
  },
  {
    "state": "Kerala",
    "TCC" : 33,
    "TCCFN": 7,
    "cu_dc_mig":3,
    "death":0,
    "coordinates":[10.8505, 76.2711]
  },
  {
    "state": "Madhya Pradesh",
    "TCC" : 4,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[22.9734, 78.6569]
  },
  {
    "state": "Maharashtra",
    "TCC" : 49,
    "TCCFN": 3,
    "cu_dc_mig":0,
    "death":1,
    "coordinates":[19.7515, 75.7139]
  },
  {
    "state": "Odisha",
    "TCC" : 2,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[20.9517, 85.0985]
  },
  {
    "state": "Puducherry",
    "TCC" : 1,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[11.9416, 79.8083]
  },
  {
    "state": "Punjab",
    "TCC" : 2,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":1,
    "coordinates":[31.1417, 75.3412]
  },
  {
    "state": "Rajasthan",
    "TCC" : 15,
    "TCCFN": 2,
    "cu_dc_mig":3,
    "death":0,
    "coordinates":[27.0238, 74.2179]
  },
  {
    "state": "Tamil Nadu",
    "TCC" : 3,
    "TCCFN": 0,
    "cu_dc_mig":1,
    "death":0,
    "coordinates":[11.1271, 78.6569]
  },
  {
    "state": "Telengana",
    "TCC" : 8,
    "TCCFN": 11,
    "cu_dc_mig":1,
    "death":0,
    "coordinates":[18.1124, 79.0193]
  },
  {
    "state": "Chandigarh",
    "TCC" : 1,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[30.7333, 76.7794]
  },
  {
    "state": "Jammu and Kashmir",
    "TCC" : 4,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[33.7782, 76.5762]
  },
  {
    "state": "Ladakh",
    "TCC" : 13,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[34.1526, 77.5770]
  },
  {
    "state": "	Uttar Pradesh",
    "TCC" : 23,
    "TCCFN": 1,
    "cu_dc_mig":9,
    "death":0,
    "coordinates":[26.8467, 80.9462]
  },
  {
    "state": "Uttarakhand",
    "TCC" : 3,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[30.0668, 79.0193]
  },
  {
    "state": "West Bengal",
    "TCC" : 2,
    "TCCFN": 0,
    "cu_dc_mig":0,
    "death":0,
    "coordinates":[22.9868, 87.8550]
  }
];
var totalCovidData = {
  "TCC":0,
  "TCCFN":0,
  "cu_dc_mig":0,
  "death":0
};
covidData.forEach((item, i) => {
  totalCovidData.TCC += item.TCC;
  totalCovidData.TCCFN += item.TCCFN;
  totalCovidData.cu_dc_mig += item.cu_dc_mig;
  totalCovidData.death += item.death;
});
var totalInfected = totalCovidData.TCC + totalCovidData.TCCFN;
var states = covidData.map(item => item.state);
