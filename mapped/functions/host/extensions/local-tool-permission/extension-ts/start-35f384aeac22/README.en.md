# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `host/extensions/local-tool-permission/extension.ts` · [Module README](../../../../../../modules/host/extensions/local-tool-permission/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682226-682251](../../../../../../../reference/runtime/host-main.cjs#L682226-L682251) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682226-682251](../../../../../../../reference/runtime/host-main.cjs#L682226-L682251) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682226

Calls written directly in this body: `context2.host.events.on`, `context2.host.whenBackgroundWorkReady.then`, `context2.onStop`.

SHA-256 of the source span: `0fc55400054101798e90ade13c678333f2acd074e809cde6a9570ffeb7733df7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
