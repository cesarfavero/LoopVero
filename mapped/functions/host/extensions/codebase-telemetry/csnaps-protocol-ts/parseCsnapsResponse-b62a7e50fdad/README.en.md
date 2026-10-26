# `parseCsnapsResponse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541201-541222](../../../../../../../reference/runtime/host-main.cjs#L541201-L541222) | `FunctionDeclaration` | no | `payload` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541201-541222](../../../../../../../reference/runtime/host-main.cjs#L541201-L541222) | 4 | 0 | 0 | 2 | 4 | 1 |

### host:541201

Calls written directly in this body: `JSON.parse`, `Number.isSafeInteger`, `hasExactKeys`, `isCsnapsErrorCode`, `new CsnapsProtocolError`, `payload.toString`.

Assignment or increment targets: `value`.

Explicit throw targets: `CsnapsProtocolError`.

SHA-256 of the source span: `e8e4807cea33a547f4de2bd5ff4ba6d2948cf5b602321182d01c5f0ee8caf35f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
