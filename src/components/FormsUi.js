import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React,{useRef,useState} from 'react'

const FormsUi = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [checkValue,setCheckValue] = useState(false);
    // const[inputs,setInputs] = useState({
    //     name:"",
    //     email:"",
    //     password:""
    // });

    const handleChange = (e) => {
    //    const {name,value} = e.target;
    //    setInputs({
    //     ...inputs,[name]:value
    //    });
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        console.log(formData);
        console.log("Checkbox is checked:", checkValue);
    };

  return (
    <div>
        <form onSubmit={handleChange}>
        <FormControl>
            <TextField variant='outlined' inputRef={nameRef} type="text" label="name" sx={{mt:5,mr:5}}/>
            <TextField variant='outlined' inputRef={emailRef} type="email" label="email" sx={{mt:5,mr:5}}/>
            <TextField variant='outlined' inputRef={passwordRef} type="password" label="password" sx={{mt:5,mr:5}}/>
            <br/>
            <FormGroup>
                <FormControlLabel label="I agree terms & conditions"
                    control={
                        <Checkbox onChange={(e) => setCheckValue(e.target.value)} />
                    }
                />
            </FormGroup>
            <br/>
            <FormControl>
                <InputLabel>Courses</InputLabel>
                <Select label="courses">
                    <MenuItem value={"react"}>React</MenuItem>
                    <MenuItem value={"redux"}>redux</MenuItem>
                    <MenuItem value={"mobx"}>mobx</MenuItem>
                </Select>
            </FormControl>
            <br/>
            <Button variant='outlined' sx={{mt:5}} type="submit">Submit</Button>
        </FormControl>
        </form>
    </div>
  )
}

export default FormsUi
