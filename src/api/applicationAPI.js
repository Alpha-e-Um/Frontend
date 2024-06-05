import { axiosWithAuth } from "./axios";

export const applicationAPI = {
  applyTeamAnnouncement(announcementId, resumeId) {
    return axiosWithAuth.post(
      `/application/${announcementId}?resume_id=${resumeId}`,
    );
  },
  postNewTeamAnnouncement(data, teamId) {
    return axiosWithAuth.post("/team-announcement", data);
  },
  getMyApplications(page, state) {
    return axiosWithAuth.get(`/application?page=${page}&state=${state}`);
  },
};
