# `createDraftToolForTurn/resolveRouteVerification/verify/onRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756195-756198](../../../../../../../reference/runtime/host-main.cjs#L756195-L756198) | `ArrowFunctionExpression` | yes | `(none)` |
| [evaluation:542116-542119](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542116-L542119) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756195-756198](../../../../../../../reference/runtime/host-main.cjs#L756195-L756198) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:542116-542119](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542116-L542119) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756195

Calls written directly in this body: `ctx.signal.throwIfAborted`.

SHA-256 of the source span: `dbc28ff49244b94814bdcf65444ad8c972aaa756e06454c3d5807a62bd19188b`.

### evaluation:542116

Calls written directly in this body: `ctx.signal.throwIfAborted`.

SHA-256 of the source span: `dbc28ff49244b94814bdcf65444ad8c972aaa756e06454c3d5807a62bd19188b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
