import"./Input.css"
function Input() {
    return(
       <>
        <div className="input__box">
        <h4>Contact details</h4>
        <p>Please fill your information so we can get in touch with you.</p>
        <hr />

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' id='name' placeholder='your name'/>

          <label htmlFor="phone">Phone Number</label>
          <input type="number" name='phone' id='phone' placeholder='(123) 456 - 7890' />

          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' placeholder='Your Mail ID'/>

          <label htmlFor="date">Date</label>
          <input type="date" name='date' id='date' />
        </form>
        <button className='btn'>Next</button>
      </div>
       </>
    )
}

export default Input