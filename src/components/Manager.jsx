import React, { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';

const Manager = (id) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", site: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const clickPassword = () => {
    // alert("Show the password");
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      //agar password h toh
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  // const savePassword = () => {
  //   // if(form.password.length > 3){
  //     setPasswordArray([...passwordArray, {...form, id:uuidv4()}]);
  //   localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]));
  //   console.log([...passwordArray, form]);
  //   setForm({ username: "", site: "", password: "" });
  //   toast.success("Password saved!");
  //   }  
  // // }

  const savePassword = () => {
    // if (form.password.length > 3) {
      const newPassword = { ...form, id: uuidv4() };
  
      setPasswordArray((prevPasswordArray) => {
        const updatedPasswordArray = [...prevPasswordArray, newPassword];
        localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
        return updatedPasswordArray;
      });
  
      console.log([...passwordArray, newPassword]);
      setForm({ username: "", site: "", password: "" });
      // toast.success("Password saved!");
    //  }
  //  else {
      // toast.error("Password must be longer than 3 characters.");
  //   }
  };
  

  const editPassword = (id) => {
    console.log("Editing password with id: " + id);
    const passwordToEdit = passwordArray.find(i => i.id === id);
    if (passwordToEdit) {
      setForm(passwordToEdit);
      //  setPasswordArray(passwordToEdit);
    } else {
      console.error("Password with the specified id not found.");
    }
  };

  const deletePassword = (id) => {
    console.log("Deleting password with id: " + id);
    let c = confirm("Do you really want to delete this password");
    if (c) {
      const updatedPasswordArray = passwordArray.filter((item) => item.id !== id);
      setPasswordArray(updatedPasswordArray);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
      // toast("Password deleted successfully!");
    }
  };
  

  const handleCopy = (item) => {
    toast.success("🦄 Copy to clipboard" + " " + item);
    navigator.clipboard.writeText(item);
  };

  return (
    <> 
      {/* Same as */}
      <ToastContainer />
      <div className="bg-slate-300 max-w-screen-xl  md:max-w-screen-lg p-2 md:p-0 md:myContainer mt-16">
        <h1 className="text-4xl text-center font-bold">
          <span className="text-green-700">&lt;</span>
          Password
          <span className="text-green-700">Operator/&gt;</span>
        </h1>
        <p className="text-lg text-violet-500 text-center">
          Your Password Controller
        </p>
        <div className="flex flex-col  p-4 text-black gap-6 item-center">
          <input
            value={form.site}
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name="site"
            id="site"
            onChange={handleChange}
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              value={form.username}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
            />
            <div className="relative">
              <input
                value={form.password}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type={!showPassword ? "password" : "text"}
                name="password"
                id="password"
                onChange={handleChange}
              />
              <span
                className="absolute right-[10px] top-[8px] cursor-pointer"
                onClick={clickPassword}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-400
             hover:bg-green-500 rounded-full p-4 py-2 w-fit border-2 border-green-950"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save 
          </button>
        </div>

        <div className="password">
          <h2 className="font-bold py-3 text-2xl">Your Passowrds</h2>

          {passwordArray.length === 0 && (
            <div className="absolute right-[50%] text-blue-500 font-bold">
              No password to show
            </div>
          )}
          {passwordArray.length !== 0 && (
            <table className="table-fixed w-full overflow-hidden rounded-md mb-[13%]">
              <thead className="bg-green-400 text-blue-800">
                <tr key={id}>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th> 
                </tr>
              </thead>
              <tbody className=" bg-green-200">
                {passwordArray.map((item, id) => {
                  return (
                    <tr key={id}>
                      <td className=" w-full break-words border border-2 py-2 text-center ">
                        <a href={item.site}>{item.site}</a>
                        <div
                          className="size-7 cursor-pointer"
                          onClick={() => {
                            handleCopy(item.site);
                          }}
                        >
                          <lord-icon
                            style={{ width: "25px", height: "25px" }}
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                            colors="primary:#a39cf4"
                          ></lord-icon>
                        </div>
                      </td>
                      <td className="border border-2 py-2 text-center max-w-1">
                        {item.username}
                        <div
                          className="ml-10 "
                          onClick={() => {
                            handleCopy(item.username);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              cursor: "pointer",
                            }}
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                            colors="primary:#a39cf4"
                          ></lord-icon>
                        </div>
                      </td>
                      <td className="border border-2 py-2 text-center max-w-1">
                        {item.password}
                        <div
                          className=" ml-10"
                          onClick={() => {
                            handleCopy(item.password);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              cursor: "pointer",
                            }}
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                            colors="primary:#a39cf4"
                          ></lord-icon>
                        </div>
                      </td>

                      <td className="border border-2 py-2 text-center ">
                        <span className=" cursor-pointer mx-2"  onClick={() => (editPassword(item.id))}>
                          <lord-icon
                            src="https://cdn.lordicon.com/vzolctzz.json"
                            trigger="hover"
                            colors="primary:#a39cf4"
                            style={{"width": "25px", "height": "25px"}}
                          ></lord-icon>
                        </span>

                        <span className=" cursor-pointer mx-2"  onClick={() => (deletePassword(item.id))}>
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            colors="primary:#a39cf4"
                            style={{"width": "25px", "height": "25px"}}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
