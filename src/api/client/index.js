import axios from 'axios';

const SAFE_HTTP_METHODS = ["get", "head", "options"];
const IDEMPOTENT_HTTP_METHODS = ["put", "delete"].concat(SAFE_HTTP_METHODS);
const RETRYABLE_CODES = [
    "ETIMEDOUT",
    "ESOCKETTIMEDOUT",
    "ECONNRESET",
    "ENOTFOUND",
    "ECONNREFUSED",
    "EHOSTUNREACH",
    "EPIPE",
    "EAI_AGAIN",
];
const isResRetryable = (response, error = false) => {
    if(error) {
        return (
            response.code &&
            RETRYABLE_CODES.includes(response.code) &&
            IDEMPOTENT_HTTP_METHODS.includes(response.config.method)
        );
    }
    return (
        response.status >= 500 && IDEMPOTENT_HTTP_METHODS.includes(response.config.method)
    );
};
const handleRetry = async (func, args, retrying = false) => {
    try {
        const response = await func(...args);
        if(isResRetryable(response) && !retrying) {
            return handleRetry(func, args, true);
        }
        return response;
    } catch (error) {
        if(isResRetryable(error, true) && !retrying) {
            return handleRetry(func, args, true);
        }
        return error;
    }
}

const axiosInstance = axios.create({
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
export default {
  get: async (...args) => handleRetry(axiosInstance.get, args),
  post: async (...args) => handleRetry(axiosInstance.post, args),
  delete: async (...args) => handleRetry(axiosInstance.delete, args),
  put: async (...args) => handleRetry(axiosInstance.put, args),
  response: (response) => {
      const { data = {} } = response;
      return data;
  }
};
