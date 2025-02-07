/**
 * @schema StoreCurrencyListResponse
 * type: object
 * description: SUMMARY
 * x-schemaName: StoreCurrencyListResponse
 * required:
 *   - limit
 *   - offset
 *   - count
 *   - currencies
 * properties:
 *   limit:
 *     type: number
 *     title: limit
 *     description: The currency's limit.
 *   offset:
 *     type: number
 *     title: offset
 *     description: The currency's offset.
 *   count:
 *     type: number
 *     title: count
 *     description: The currency's count.
 *   currencies:
 *     type: array
 *     description: The currency's currencies.
 *     items:
 *       $ref: "#/components/schemas/StoreCurrency"
 * 
*/

