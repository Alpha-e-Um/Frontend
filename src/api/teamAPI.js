import { axiosWithAuth } from "./axios";

export const teamAPI = {
  postNewTeam(data) {
    return axiosWithAuth.post("/team", data);
  },
  getTeamById(id) {
    return axiosWithAuth.get(`/team/${id}`);
  },
};
