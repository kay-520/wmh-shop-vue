import Cookies from 'js-cookie'

const TokenKey = 'access_token';
const contractNo = 'contractNo';

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function getContractNo() {
  return Cookies.get(contractNo)
}
