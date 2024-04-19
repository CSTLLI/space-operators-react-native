export default async function fetchApi(
	url: string,
	body?: object,
	params?: { [keyof: string]: string },
	method = 'POST'
) {
	const parameters = params ?
		new URLSearchParams(params)
		: ''
	const response = await fetch(`${process.env.API_URL}${url}${parameters}`, {
		method: method,
		...(body && {
			body: JSON.stringify(body)
		}),
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type' : 'application/json',
			// Authorization:  `Bearer ${localStorage.getItem('token')}`,
		})
	})

	return await response.json()
}
