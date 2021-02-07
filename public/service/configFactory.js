app.factory("configFactory" , ['$http' , ($http)  => {
        const getconfig = () => {
            return new Promise ((resolve , reject) => {
                $http
                .get('/getInv')
                .then((data) => {
                    // console.log(data)
                    resolve(data)
                   
                })
                .catch((err) => console.log(err))

            })

                


        }


        return {
            getconfig
        }

}])