/**
 * @schema AdminUpdatePriceList
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminUpdatePriceList
 * properties:
 *   title:
 *     type: string
 *     title: title
 *     description: The price list's title.
 *   description:
 *     type: string
 *     title: description
 *     description: The price list's description.
 *   starts_at:
 *     type: string
 *     title: starts_at
 *     description: The price list's starts at.
 *   ends_at:
 *     type: string
 *     title: ends_at
 *     description: The price list's ends at.
 *   status:
 *     type: string
 *     description: The price list's status.
 *     enum:
 *       - active
 *       - draft
 *   type:
 *     type: string
 *     description: The price list's type.
 *     enum:
 *       - sale
 *       - override
 *   rules:
 *     type: object
 *     description: The price list's rules.
 * 
*/

