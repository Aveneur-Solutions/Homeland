import { IProfileUpdate } from "../models/user";

export const createUpdateProfileFormData = (data: IProfileUpdate) => {
    let formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName.toString());
    formData.append("nid", data.nid.toString());
    formData.append("address", data.address.toString());
    formData.append("email", data.email.toString());
    
    if (data.profileImage) {
      formData.append("profileImage", data.profileImage[0]);
    }
    console.log(data.profileImage);
    console.log(formData.get("profileImage"));
    return formData;
  };