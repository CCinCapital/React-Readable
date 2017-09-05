export function uuid () {
	return Date.now()+((Math.random()*0x10000000)|0).toString(16)
}