import Constants from "expo-constants";
const baseUrl =
  Platform.OS === "android" ? "http://10.0.2.2:8000" : "http://localhost:8000";

// apiUrl: "http://146.59.157.199:8000",
const settings = {
  dev: {
    apiUrl: baseUrl,
  },
  staging: {
    apiUrl: baseUrl,
  },
  prod: {
    apiUrl: baseUrl,
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
