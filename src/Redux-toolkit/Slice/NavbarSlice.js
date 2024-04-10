import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getAboutUs,
  getAcademicData,
  getAddmission,
  getAcademicSingleData,
  getAboutUsSingleData,
  getFacilities,
  getSingleFacility,
  getMedicalFacility,
  getSingleMedicalFacility,
  getDepartments,
  getSingleDepartment,
  getAllCourses,

} from "../../Componanats/api/api_base";

// const headers = {
//     Authorization: Bearer ${token},
// };
// about us
export const getaboutusapi = createAsyncThunk(
  "getaboutusapi/navbar",
  async () => {
    try {
      const response = await axios.get(
        `${getAboutUs}`
        // , { headers }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
// get single about us
export const getaboutussingleapi = createAsyncThunk(
  "getaboutussingleapi/navbar",
  async (id) => {
    try {
      const response = await axios.get(
        `${getAboutUsSingleData}/${id}`
        // , { headers }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
// academic
export const getAcademicDataapi = createAsyncThunk(
  "getAcademicDataapi/navbar",
  async () => {
    try {
      const response = await axios.get(
        `${getAcademicData}`
        // , { headers }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Single academic
export const getAcademicSingleApi = createAsyncThunk(
    "getAcademicSingleApi/navbar",
    async (id) => {
      try {
        const response = await axios.get(
          `${getAcademicSingleData}/${id}`
          // , { headers }
        );
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  );

// admission
export const getAddmissionapi = createAsyncThunk(
    "getAddmissionapi/navbar",
    async () => {
      try {
        const response = await axios.get(
          `${getAddmission}`
          // , { headers }
        );
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  );

  // facilities
export const getFacilitiesApi = createAsyncThunk(
    "getFacilitiesApi/navbar",
    async () => {
      try {
        const response = await axios.get(
          `${getFacilities}`
          // , { headers }
        );
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  );

  // get single facilities
export const getsinglefacilityapi = createAsyncThunk(
    "getsinglefacilityapi/navbar",
    async (id) => {
      try {
        const response = await axios.get(
          `${getSingleFacility}/${id}`   
          // , { headers }
        );
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  );

    // Medical facilities
export const getMedicalFacilitiesApi = createAsyncThunk(
    "getMedicalFacilitiesApi/navbar",
    async () => {
      try {
        const response = await axios.get(
          `${getMedicalFacility}`
          // , { headers }
        );
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  );

   // get single Medical facilities
export const getsingleMedicalfacilityapi = createAsyncThunk(
    "getsingleMedicalfacilityapi/navbar",
    async (id) => {
      try {
        const response = await axios.get(
          `${getSingleMedicalFacility}/${id}`   
          // , { headers }
        );
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  );

    // Departments
    export const getDepartmentsApi = createAsyncThunk(
        "getDepartmentsApi/navbar",
        async () => {
        try {
            const response = await axios.get(
            `${getDepartments}`
            // , { headers }
            );
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
        }
    );

           // get single Department
    export const getSingleDepartmentApi = createAsyncThunk(
        "getSingleDepartmentApi/navbar",
        async (id) => {
        try {
            const response = await axios.get(
            `${getSingleDepartment}/${id}`   
            // , { headers }
            );
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
        }
    );
    
           // get Courses
           export const getAllCoursesApi = createAsyncThunk(
            "getAllCoursesApi/navbar",
            async (id) => {
            try {
                const response = await axios.get(
                `${getAllCourses}`   
                // , { headers }
                );
                return response.data;
            } catch (error) {
                throw new Error(error.message);
            }
            } 
        );


const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    aboutus: [],
    academics: [],
    singleacademics: {},
    Addmissions: [],
    aboutussingle: {},
    Facilities: [],
    singleFacility: {},
    MedicalFacility: [],
    SingleMedicalFacility: {},
    Departments: [],
    SingleDepartments: {},
    Courses: [],
    
    status: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get about us
      .addCase(getaboutusapi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getaboutusapi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.aboutus = action.payload;
      })
      .addCase(getaboutusapi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // get about us single
      .addCase(getaboutussingleapi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getaboutussingleapi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.aboutussingle = action.payload;
      })
      .addCase(getaboutussingleapi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      //   acedamic
      .addCase(getAcademicDataapi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAcademicDataapi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.academics = action.payload;
      })
      .addCase(getAcademicDataapi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      //   Single acedamic
      .addCase(getAcademicSingleApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAcademicSingleApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleacademics = action.payload;
      })
      .addCase(getAcademicSingleApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

       //   acedamic
       .addCase(getAddmissionapi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAddmissionapi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.Addmissions = action.payload;
      })
      .addCase(getAddmissionapi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

       //   Facilities
       .addCase(getFacilitiesApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFacilitiesApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.Facilities = action.payload;
      })
      .addCase(getFacilitiesApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Single Facilities
      .addCase(getsinglefacilityapi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getsinglefacilityapi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleFacility = action.payload;
      })
      .addCase(getsinglefacilityapi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

       // Medical Facilities
       .addCase(getMedicalFacilitiesApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMedicalFacilitiesApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.MedicalFacility = action.payload;
      })
      .addCase(getMedicalFacilitiesApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

        // Single Medical Facilities
        .addCase(getsingleMedicalfacilityapi.pending, (state) => {
        state.status = "loading";
        })
        .addCase(getsingleMedicalfacilityapi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.SingleMedicalFacility = action.payload;
        })
        .addCase(getsingleMedicalfacilityapi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        })

      // Departments
      .addCase(getDepartmentsApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDepartmentsApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.Departments = action.payload;
      })
      .addCase(getDepartmentsApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Single Departments
      .addCase(getSingleDepartmentApi.pending, (state) => {
        state.status = "loading";
        })
        .addCase(getSingleDepartmentApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.SingleDepartments = action.payload;
        })
        .addCase(getSingleDepartmentApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        })

         // Courses
      .addCase(getAllCoursesApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCoursesApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.Courses = action.payload;
      })
      .addCase(getAllCoursesApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

  },
});

export default navbarSlice.reducer;
