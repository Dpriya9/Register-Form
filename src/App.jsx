import { useState } from 'react';
import './App.css';
import { TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [radioButtonsGroup, setRadioButtonsGroup] = useState('');
  const [date, setDate] = useState('');
  const [state, setState] = useState('');
  const [dis, setDis] = useState('');

  const [course, setCourse] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validate = (inputTag) => {
    const { name, value } = inputTag;
    if (name === "firstName") {
      setFirstName(value);
      setIsFirstNameValid(!/^[a-zA-Z\s]+$/.test(value));
    } else if (name === "email") {
      setEmail(value);
      setIsEmailValid(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value));
    }
  };

  const handleSubmission = () => {
    if (firstName && address && email && radioButtonsGroup && date && course && state && dis) {
      alert(`Registered Successfully\nName: ${firstName}\nAddress: ${address}\nE-mail: ${email}\nGender: ${radioButtonsGroup}\nDate of Birth: ${date}\nCourse: ${course}`);
    } else {
      alert("Fill the form completely");
    }
  };

  const handleReset = () => {
    setFirstName('');
    setAddress('');
    setEmail('');
    setRadioButtonsGroup('');
    setDate('');
    setCourse('');
    setIsFirstNameValid(false);
    setIsEmailValid(false);
  };

  return (
    <div className='container-fluid bg-success'>
      <div className='row '>
        <div className="col-lg-3"></div>
        <div className='border rounded col-lg-6 mt-4 bg-white'>
          <h1 className='text-center mt-4'>Student Registration Form</h1>
          <p className="fs-5 text-center fw-bold">For Higher Secondary Admisson</p>
          <form action="" className='p-3'>
            {/* 1st name */}
            <div>
              <TextField
                onChange={e => validate(e.target)}
                name='firstName'
                value={firstName}
                className='w-100'
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </div>
            {isFirstNameValid && <div className="text-danger mt-1">*Enter Valid Input</div>}

            {/* Address */}
            <div className="mt-3">
              <TextField
                onChange={e => setAddress(e.target.value)}
                name='address'
                value={address}
                className='w-100'
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
            </div>
            {/* state */}
            <div className=" row mt-3">
              <div className="col-lg-6">
              <TextField
                onChange={e => setDis(e.target.value)}
                name='dis'
                value={dis}
                className='w-100'
                id="outlined-basic"
                label="District"
                variant="outlined"
              />
              </div>
              <div className="col-lg-6">
              <TextField
                onChange={e => setState(e.target.value)}
                name='state'
                value={state}
                className='w-100'
                id="outlined-basic"
                label="State"
                variant="outlined"
              />
              </div>
             
            </div>

            {/* Email */}
            <div className="mt-3">
              <TextField
                onChange={e => validate(e.target)}
                name='email'
                value={email}
                className='w-100'
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
            {isEmailValid && <div className="text-danger mt-1">*Invalid E-mail ID</div>}

            {/* Gender */}
            <div className='mt-3'>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                row
                   aria-labelledby="demo-row-radio-buttons-group-label"
                  className='mt-2'
                  name="row-radio-buttons-group"
                  value={radioButtonsGroup}
                  onChange={e => setRadioButtonsGroup(e.target.value)}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </div>

            {/* DOB */}
            <div className="mt-3">
              <p className='ms-1'>Date of Birth:</p>
              <TextField
                onChange={e => setDate(e.target.value)}
                name='date'
                type='date'
                value={date}
                className='w-100'
                id="outlined-basic"
                variant="outlined"
                InputLabelProps={{ shrink: true }} // To display the label when a date is selected
              />
            </div>

            {/* Course */}
            <div className="mt-3">
              <select
                onChange={e => setCourse(e.target.value)}
                name="course"
                value={course}
                className='w-100 p-3'
              >
                <option value="" hidden disabled>Courses</option>
                <option value="biology">Science : 	Physics, Chemistry, Biology,Mathematics</option>
                <option value="computer-science"> Science : 	Physics, Chemistry, Mathematics, Computer Science</option>
                <option value="commerce">Commerce : Business Studies, Accountancy, Economics, Mathematics </option>
                <option value="commerce">Commerce : Business Studies, Accountancy, Economics,Computer Applications </option>

                <option value="humanities">Humanities : 	History, Economics, Political Science, Sociology</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="mt-3">
              <Stack direction={"row"} spacing={2}>
                <Button
                  onClick={handleSubmission}
                  className='w-50 p-3 '
                  variant="outlined"
                >
                  Register
                </Button>
                <Button
                  onClick={handleReset}
                  className='w-50 p-3'
                  variant="outlined"
                >
                  Reset
                </Button>
              </Stack>
            </div>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}

export default App;