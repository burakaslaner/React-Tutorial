import React from 'react'

export const users = [
    {
        username: "burak",
        password: "1"
    },
    {
        username: "eliza",
        password: "2"
    }
]

function Login() {
    //Fragment <> -> </>
    return (

        <div>
            <div>
                <p>Kullanıcı Adınız:</p>
                <input type="text" />
            </div>

            <div>
                <p>Şifreniz:</p>
                <input type="text" />
            </div>


            <button>Giriş Yap</button>
        </div>



    )
}

export default Login