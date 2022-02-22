const express = require('express'); //Import statement
const app =express();
const PORT = 8080;
app.use(express.json());

/* Here in DEV and PROD URL will change */
app.listen( PORT, ()=> console.log(`it's live on http://localhost:${PORT}`)
)

app.get('/getsubscribedUsers',(req,res) =>{
	res.status(200).send({
		userName:'Prem',
        userId:'100',
        indicator:'Y',
		coursesSubScribed:['Node.js', 'Java', 'PHP'],
        emailId:'prem@gmail.com', })    
}) ;

app.get('/getCountry',(req,res) => {
    res.status(200).send({
        
    })
})


app.post('/saveSubscriberData',(req,res) => {
    //const { id } =req.params;
    //const { userId } = req.body;
    const { userId,userName } =req.body;
if(!userId) {
	res.status(400).send ({message :'Provide id' })
}  res.send({
	object:`user id is ${userId} and userName ${userName}`
});
})