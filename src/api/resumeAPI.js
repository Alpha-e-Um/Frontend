import { axiosWithAuth } from "./axios";

export const resumeAPI = {
  getResume() {
    return axiosWithAuth.get("/resume");
  },
  getResumeId(id) {
    return axiosWithAuth.get(`/resume/${id}`);
  },
  postResume(data) {
    return axiosWithAuth.post("/resume", data);
  },
  removeResume(id) {
    return axiosWithAuth.delete(`/resume/${id}`);
  },
};
