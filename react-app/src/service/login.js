/**
 * create by wangchunyan1 on 2022/1/5
 */

const LoginService = {
    login(userInfo){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(userInfo.name === 'wcy'){
                    resolve({id: 123, name: 'omg-wcy'})
                }else{
                    reject({err:{msg:'用户名密码错误'}})
                }
            }, 1000)
        })
    },
    // 获取更多信息
    getMoreUserInfo(userInfo) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userInfo.id === 123) {
                    resolve({...userInfo, score: "100"});
                } else {
                    reject({msg: "获取详细信息错误"});
                }
            }, 1000);
        });
    },
}

export default LoginService;
