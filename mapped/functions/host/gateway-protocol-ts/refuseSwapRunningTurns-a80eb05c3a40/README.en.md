# `refuseSwapRunningTurns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-protocol.ts` · [Module README](../../../../modules/host/gateway-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490032-490034](../../../../../reference/runtime/host-main.cjs#L490032-L490034) | `FunctionDeclaration` | no | `runningTurns` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490032-490034](../../../../../reference/runtime/host-main.cjs#L490032-L490034) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490032

Calls written directly in this body: `Math.max`.

SHA-256 of the source span: `088f0f8f977774d395a41219776201b0bb4b90f62fd4ae71a991f18cab0daed1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
