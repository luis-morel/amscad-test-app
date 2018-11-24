import React from "react";

const NewUserForm = ({

  handleInputChange,
  handleNewUser,
  name,
  title,
  userImageUrl,
  email,
  password

}) => {

  return (

    <div className="genFormSettings">

      <form onSubmit={handleNewUser}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input name="name" className="form-control" placeholder="Name..." onChange={handleInputChange} value={name} type="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input name="title" className="form-control" placeholder="Title..." onChange={handleInputChange} value={title} type="title" required />
        </div>
        <div className="form-group">
          <label htmlFor="userImageUrl">Profile Image Url</label>
          <input name="userImageUrl" className="form-control" placeholder="Profile Image Url..." onChange={handleInputChange} value={userImageUrl} type="userImageUrl" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input name="email" className="form-control" placeholder="Email..." onChange={handleInputChange} value={email} type="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" className="form-control" placeholder="Password..." onChange={handleInputChange} value={password} type="password" required />
        </div>
        <div className="newUserFormBtnWrapper">
          <button className="genAppBtn" type="submit">ADD NEW USER</button>
        </div>
      </form>

    </div>

  ); // End of return()

}; // End of functional component

export default NewUserForm;