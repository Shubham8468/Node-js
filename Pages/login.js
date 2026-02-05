export default function login(){
    return `<form method='post' action='/submit'>
    <h1> User Login Form </h1>
    <br/>
     <br/>
     <input placeholder ='Enter Your Name ', type='text'  />
      <br/>
       <br/>
       <input placholder='Enter Your Password' , type ='password'/>
        <br/>
         <br/>
         <button> Login</button>
          <br/>
           <br/>
           <a href='/'>Go to home page</a>
    
    </form>`

}