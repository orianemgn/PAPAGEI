import React from 'react'; 


const Filter = (props) => {
  return(
    <div  >
     <form className="form profile-top" onSubmit={this.handleSubmit}>
      <select name="location" id="location" form="carform" onChange={this.handleChange}>
          <option value='' selected> Choose your tandem location</option>
          <option value="">Show all location</option>
          <option value="berlin">Berlin</option>
          <option value="hambourg">Hamburg</option>
          <option value="paris">Paris</option>
          <option value="london">London</option>
          </select>
          <label htmlFor="learningLanguages" className="m-1"></label>
          <select name="learningLanguages" id="learningLanguages" form="carform" onChange={this.handleChange} multiple>
          <option value="" selected> I want to learn </option>
          <option value="">All</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          </select>
          <select name="nativeLanguages" id="nativeLanguages" form="carform" onChange={this.handleChange}>
          <option value="" selected> I speak </option>
          <option value="">All</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          </select>
          {/* <button  className="btn btn-primary m-2" type="submit"> 
          <h3> Filter </h3></button> */}
      </form>
  
    </div>
  )
}


export default Filter

/*    <button onClick={props.click}> delete</button> */