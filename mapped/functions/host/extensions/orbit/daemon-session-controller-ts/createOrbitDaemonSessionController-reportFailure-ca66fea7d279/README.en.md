# `createOrbitDaemonSessionController/reportFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706097-706101](../../../../../../../reference/runtime/host-main.cjs#L706097-L706101) | `FunctionDeclaration` | no | `stage, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706097-706101](../../../../../../../reference/runtime/host-main.cjs#L706097-L706101) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:706097

Calls written directly in this body: `ConnectError.from`, `deps.log`, `errorLogTag`.

SHA-256 of the source span: `c3b22c8d1048dd5473ab076e1397fceaa85102b92e86e07bf01d067412564833`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
