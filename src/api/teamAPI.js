import { axiosWithAuth } from "./axios";

export const teamAPI = {
  postNewTeam(data) {
    return axiosWithAuth.post("/team", data);
  },
  getTeamById(id) {
    return axiosWithAuth.get(`/team/${id}`);
  },
  postNewTeamAnnouncement(data, teamId) {
    return axiosWithAuth.post(`/team/${teamId}/announcement`, data);
  },
  inviteTeamMember(data) {
    return axiosWithAuth.post("/team/invite", data);
  },
  getMyTeams() {
    return axiosWithAuth.get("/user/me/teams");
  },
};
