export default class ExpressRouterAdapter {
    static adapt(router: any) {
        return async (request: any, response: any) => {

            const httpRequest = {
                body: request.body
            }
            try {
                const httpResponse = await router.route(httpRequest)

                return response
                    .status(httpResponse.statusCode)
                    .json(httpResponse.body)
            } catch ( error ) {
                console.error("An error occours", error)
                return response
                    .status(500)
                    .json({ error: 'an error occours' })
            }


        }
    }
}
