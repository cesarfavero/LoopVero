# `routeCommand`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [host-main.cjs:493530–493579](../../../reference/runtime/host-main.cjs#L493530-L493579).

**Component:** [gateway](../../components/gateway/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Responsibility

Dispatch an HTTP method already recognized by the router to the gateway API, validate its name, record tracing, and return JSON.

## Contract

Accepts the API, `method`, body, HTTP response/request, and telemetry callbacks. A name outside the catalog returns 404 with `GATEWAY_UNKNOWN_METHOD_FAILURE_CODE`. For a valid name, it computes avatar preference, request ID, and trace, then delegates to `runGatewayCommand`.

The helper `runGatewayCommand`, at [host-main.cjs:489960–489966](../../../reference/runtime/host-main.cjs#L489960-L489966), calls `parseGatewayCommandBody` before calling the handler. It may wrap the API with avatar compaction when the client requests that format.

## Steps

1. Validate the method name.
2. Create a span and measure the start time.
3. Execute the handler with validated arguments.
4. End the span in `finally`, including on error.
5. Report classified server errors, preserving the original error if telemetry itself fails.
6. Report completion and return JSON with a specific gzip policy.

## Limits

Authentication, origin rejection, and route selection occur in `handleRequest`, before this function. `routeCommand` must not be treated in isolation as a complete authorization boundary. The called method may be the remote wrapper and therefore make an RPC to another service.
