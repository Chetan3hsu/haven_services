import React from 'react' ; 
const Slast = () => {   
    return (
        <div className="bg-emerald-900 text-white rounded-3xl mx-auto" style={{height: '27rem',width: '70rem' , alignSelf: 'center'}}>
     <div style={{alignSelf:'Left',marginLeft:'2rem'}}>
     <img src="https://havenservicing.com/static/1f5fc7f55cfccd2034730839c0277b6b/integrate-doorway.svg" className="w-50 h-70 float-right" style={{alignSelf: 'self-end'}}/>
    <p className="font-semibold text-left p-3
           "> Integration</p>
           
            <pre className="font-semibold text-left  text-4xl m-3">
         { `Haven integrates into
your existing servicing
experience`}
                </pre>

            <pre className=" text-lg"
            >{`  Whether you service in-house or use a subservicer,
  launch deeper engagement with your borrowers in
  weeks (not months) with a platform that integrates into
  your existing servicing stack.`}
                  </pre>

                  </div>
        <p className="hover:bg-blue-400 inline-block text-white text-center p-3 m-3 rounded-3xl w-auto">
         See how it works {`>`}</p>
        
   
        </div>
    )
}
export default Slast    ;