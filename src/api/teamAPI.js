import { axiosWithAuth } from "./axios";
import qs from "qs";

export const teamAPI = {
  postNewTeam(data) {
    const formData = new FormData();
    formData.append(
      "json",
      new Blob(
        [
          JSON.stringify({
            name: data.name,
            introduction: data.introduction,
            domain: data.domain,
            location: data.location,
            phoneNumber: data.phoneNumber,
            email: data.email,
          }),
        ],
        { type: "application/json" },
      ),
    );

    if (data.profileImage) {
      formData.append("file", data.profileImage);
    }

    return axiosWithAuth.post("/team", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
  getTeamAnnouncements(filter) {
    // occupationClassifications가 비어 있는지 확인
    const { occupationClassifications, ...rest } = filter;
    const params = {
      ...rest,
      occupationClassifications:
        occupationClassifications.length > 0 ? occupationClassifications : "",
    };

    return axiosWithAuth.get("/team-announcement", {
      params,
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    });
  },
};
