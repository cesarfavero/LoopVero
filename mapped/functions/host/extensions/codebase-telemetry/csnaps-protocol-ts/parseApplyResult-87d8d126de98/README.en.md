# `parseApplyResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541241-541249](../../../../../../../reference/runtime/host-main.cjs#L541241-L541249) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541241-541249](../../../../../../../reference/runtime/host-main.cjs#L541241-L541249) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:541241

Calls written directly in this body: `Array.isArray`, `hasExactKeys`, `new CsnapsProtocolError`, `parseServiceState`, `value.rejected.map`.

Explicit throw targets: `CsnapsProtocolError`.

SHA-256 of the source span: `8f8fd9d53fdd2a1d31af8c72b092694cecf532f2591835d745cedd306573c205`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
