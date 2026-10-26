# `src/shared/node/cursor-backend/cursor-inference.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225183-225217](../../../../../../../reference/runtime/host-main.cjs#L225183-L225217) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225183-225217](../../../../../../../reference/runtime/host-main.cjs#L225183-L225217) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225183

Calls written directly in this body: `createContextKey`, `init_cursor_token`, `init_esm2`, `init_esm3`, `init_invariant`, `init_proto`, `init_protocol`, `init_protocol_connect`, `init_request`, `init_request_lineage`, `init_request_recovery`, `init_rpc_tracing`, `init_sand_agent_model`, `init_sand_client_metadata`, `new Set`.

Assignment or increment targets: `GITHUB_ACCESS_ERRORS`, `PRIVACY_MODE_CACHE_MAX_AGE_MS`, `PRIVACY_MODE_FALLBACK_CACHE_MAX_AGE_MS`, `PRIVACY_MODE_FETCH_TIMEOUT_MS`, `SAND_SENT_ACCOUNT_SCOPE`, `recoverInstalledRequests`.

SHA-256 of the source span: `2f9becc2b6f1703a7c878c9e14f0d3874773bf7ebb0dfa74e9665a8a1f4c6667`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
