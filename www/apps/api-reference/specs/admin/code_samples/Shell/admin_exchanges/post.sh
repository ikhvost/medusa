curl -X POST '{backend_url}/admin/exchanges' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "order_id": "{value}",
  "metadata": {}
}'