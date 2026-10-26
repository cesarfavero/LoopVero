# `src/shared/node/cursor-backend/rpc-tracing.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/rpc-tracing.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/rpc-tracing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224887-224900](../../../../../../../reference/runtime/host-main.cjs#L224887-L224900) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224887-224900](../../../../../../../reference/runtime/host-main.cjs#L224887-L224900) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:224887

Calls written directly in this body: `__toESM`, `createExpiryPolicy`, `init_esm2`, `init_esm4`, `init_scheduling`, `new Set`, `new import_sdk_trace_node.AlwaysOnSampler`, `require_src5`.

Assignment or increment targets: `RPC_ROOT_SAMPLER`, `SAND_RPC_TRACE_WINDOW_DURATION_MS`, `UNTRACED_SERVICE_TYPE_NAMES`, `import_sdk_trace_node`, `traceWindowExpiry`.

SHA-256 of the source span: `39b124a2b3d9c22ca6afd58940078103107c6570c6a515d97ab7da591e7e5d8b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
