import axios from 'axios'

let domain = 'https://dindon-bath-team3.appspot.com';

export function userSignUpRequest(userData) {
    return dispatch => {

        return axios( {
            method: 'post',
            url: `${domain}/api/users`,
            data: userData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

}
export function isUserExists(identifier) {
    return dispatch => {
        return axios.get(`${domain}/api/users/${identifier}`)
    }
}