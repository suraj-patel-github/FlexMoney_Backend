
const payment = async(req, res) => {
    try{
        const query = `select * from users where id = $1`;
    }
    catch(err){
        return res.status(500).json({message: "Server Error"});
    }
}
