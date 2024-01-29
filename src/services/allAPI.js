import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";

//upload new student profile
export const uploadNewStudProfileAPI=async(studProfile)=>{
    return await commonAPI("POST",`${SERVER_URL}/allStudents`,studProfile)
}

//get all student profiles

export const getAllStudProfileAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allStudents`,"")
    //console.log(res);
    
}

//get single student profile details

export const viewStudProfileAPI=async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allStudents/${id}`,"")
}

//delet student profile
export const deleterStudProfileAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allStudents/${id}`,{})
}

//delet student profile
export const updateStudProfileAPI=async(id,studProfile)=>{
    return await commonAPI("PUT",`${SERVER_URL}/allStudents/${id}`,{...studProfile,course:studProfile.course,joinDate:studProfile.joinDate})
}

// export const addCategoryAPI=
