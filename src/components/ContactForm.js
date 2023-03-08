import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const ContactForm = () => {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state1: '',
        state2: '',
        zip: '',
        editItem: false
    })
    // const InputRef = useRef(null);

    // useEffect(() => {
    //     InputRef.current.focus();
    // }, [student.name])

    const [newEntry, setnewEntry] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        if (student.name && student.email && student.phone && student.state1 && student.state2 && student.adate && student.text) {
            const newData = { student }
            setnewEntry([...newEntry, newData])
            alert("form submited")
            setStudent({
                name: '',
                email: '',
                phone: '',
                state1: '',
                state2: '',
                adate: '',
                text: '',
                editItem: false
            })
        } else {
            alert("please fill up the all fields value...")
        }
    }
    // const deleteHandler = (id) => {
    //     const freshData = newEntry.filter((data, i) => i !== id)
    //     setnewEntry(freshData);
    // }
    // const editHandler = (id) => {
    //     const freshData = newEntry.filter((data, i) => i !== id)
    //     setnewEntry(freshData);
    //     const selectedItem = newEntry.find((value, i) => i === id)
    //     setStudent({
    //         name: selectedItem.student.name,
    //         email: selectedItem.student.email,
    //         password: selectedItem.student.password,
    //         address: selectedItem.student.address,
    //         city: selectedItem.student.city,
    //         state: selectedItem.student.state,
    //         zip: selectedItem.student.zip,
    //     })
    // }

    return (
        <div className="container bg-dark text-light">
            <div className="row">
                <div className="col-md-8 col-sm-12 text-start">
                    <h3 className='text-secondary text-start my-4'>Book a Room</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 m-auto text-start">
                    <form className='my-from' onSubmit={submitHandler}>
                        <div className="form-group col-md-12 col-sm-12 mb-2">
                            <div className="row">
                                <div className="col-md-4 py-2"><label>Your Name:</label></div>
                                <div className="col-md-8"><input type="text" className="form-control" id="inputEmail4" placeholder="Enter Your Name" name='name' value={student.name} onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} /></div>
                            </div>
                        </div>
                        <div className="form-group col-md-12 col-sm-12 mb-2">
                            <div className="row">
                                <div className="col-md-4 py-2"><label>E-Mail Address:</label></div>
                                <div className="col-md-8"><input type="email" className="form-control" id="inputEmail5" placeholder="xxxx@example.com" name='email' value={student.email} onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} /></div>
                            </div>
                        </div>
                        <div className="form-group col-md-12 col-sm-12 mb-2">
                            <div className="row">
                                <div className="col-md-4 py-2"><label>Home Phone:</label></div>
                                <div className="col-md-8"><input type="number" className="form-control" id="inputEmail5" placeholder="Home Phone Number" name='phone' value={student.phone} onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} /></div>
                            </div>
                        </div>
                        <div className="form-group col-md-12 col-sm-12 col-xs-12 mb-2">
                            <div className="row">
                                <div className="col-md-4 py-2"> <label>Length of Stay:</label></div>
                                <div className="col-md-8"><select id="inputState" className="form-control" value={student.state1} name='state1' onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} >
                                    <option>Choose...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-12 col-sm-12 col-xs-12 mb-2">
                            <div className="row">
                                <div className="col-md-4 col-sm-12 col-xs-12 py-2"> <label>Party Number:</label></div>
                                <div className="col-md-8 col-sm-12 col-xs-12"><select id="inputState" className="form-control" value={student.state2} name='state2' onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} >
                                    <option>Choose...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-12 mb-2">
                            <div className="row">
                                <div className="col-md-4 col-sm-12 col-xs-12 py-2"><label>Arival Date:</label></div>
                                <div className="col-md-8 col-sm-12 col-xs-12"><input type="date" className="form-control" id="inputEmail5" placeholder="Arival Date" name='adate' value={student.adate} onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} /></div>
                            </div>
                        </div>
                        <div className="form-group col-md-12 col-sm-12 col-xs-12 mb-2">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12 py-2"><label>Additional Comments:</label></div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12"><textarea type="text" className="form-control" rows={3} id="inputEmail5" placeholder="Additional Comments" name='text' value={student.text} onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} /></div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end my-2">
                            <button className="btn btn-dark mx-4 btn-outline-light">Clear</button>
                            <button  className="btn btn-dark btn-outline-light">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-md-12 col-sm-7 col-xs-12 m-auto">
                    <table className="table bg-dark text-light">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Address</th>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Zip</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-secondary'>
                            {
                                newEntry.map((value, index) => (
                                    <tr key={index + 1}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{value.student.name}</td>
                                        <td>{value.student.email}</td>
                                        <td>{value.student.password}</td>
                                        <td>{value.student.address}</td>
                                        <td>{value.student.city}</td>
                                        <td>{value.student.state}</td>
                                        <td>{value.student.zip}</td>
                                        <td><button onClick={(e) => deleteHandler(index)} className='btn btn-danger mx-2'><FaDoorClosed /></button>
                                        <button onClick={(e) => editHandler(index)} className='btn btn-success text-light'><FaEdit /></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>
    )
}

export default ContactForm