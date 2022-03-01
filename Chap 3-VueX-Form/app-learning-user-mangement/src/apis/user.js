import axios from "axios"

//promise,callback function,async/await
export const getAllUserApi = async() => {
    //await ở đây có nghĩa là phải đợi nó load hết dữ liệu thì mới được gán vào trong res,muốn sử dụng được
    const res = await axios({
        method: 'GET', //GET,POST,PUT,DELETE 
        //GET : lấy dữ liệu về
        // POST : sử dụng khi để gửi dữ liệu lên server(add)
        //PUT : cập nhật lại dữ liệu
        // DELETE : xóa
        url: "https://621ddfe3849220b1fc87e492.mockapi.io/user"
    });
    return res.data
}