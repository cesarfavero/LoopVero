# `encodeCsnapsRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541127-541132](../../../../../../../reference/runtime/host-main.cjs#L541127-L541132) | `FunctionDeclaration` | no | `id, operation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541127-541132](../../../../../../../reference/runtime/host-main.cjs#L541127-L541132) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:541127

Calls written directly in this body: `Buffer.from`, `JSON.stringify`, `Number.isSafeInteger`, `createCsnapsRequest`, `encodeFrame`, `new CsnapsProtocolError`.

Explicit throw targets: `CsnapsProtocolError`.

SHA-256 of the source span: `bc2847b3e17ef4a7e18a2b377cd70fc028e913fe8f75df4276a537dc7500742d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
