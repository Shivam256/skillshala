import React from "react";
import CustomTextField from "../../../components/customInput/cutomTextField";
import CustomButton from "../../../components/customButtons/customButton.component";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

const CreateCourse = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-12">
      <h1 className="text-4xl font-medium mb-8">Create new course</h1>
      <div className="flex gap-5">
        <div className="w-1/4 flex flex-col gap-4">
          <div className="w-full h-48 border rounded-lg border-black grid place-items-center">
            <div>UPLOAD THUMBNAIL</div>
          </div>
          <div className="">
            <h1>Select type of course</h1>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="free"
                control={<Radio />}
                label="Free"
              />
              <FormControlLabel value="male" control={<Radio />} label="paid" />
            </RadioGroup>
          </div>
        </div>
        <form className="flex flex-col gap-5 w-3/4">
          <CustomTextField label="Course Name" />
          <CustomTextField
            label="Course Short Description"
            multiline
            rows={3}
          />
          <CustomTextField
            label="Course Detail Description"
            multiline
            rows={5}
          />

          <CustomTextField label="Course Requirements" multiline rows={3} />
        </form>
      </div>
      <div>
          <h1>Upload course material</h1>
          <CustomButton>CREATE SECTION</CustomButton>
      </div>
      
    </div>
  );
};

export default CreateCourse;
