import axios from "axios";

const api = axios.create({
  baseURL: "https://pwabrd.labsystec.net/api",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsIklkVXN1YXJpbyI6IjEiLCJpc3MiOiJodHRwczovL3B3YWJyZC5sYWJzeXN0ZWMuY29tLyIsImF1ZCI6WyJjb20ucHdhLmJyZCIsImNvbS5wd2EuYnJkIl0sIm5iZiI6MTczMTAzNTY2OCwiZXhwIjoxNzMxMDM4NjY4fQ.Cfl5pvNjWnWEytjNiYWZd6T9kBZEltY_kroN3zsNKd8",
  },
});

export default api;
