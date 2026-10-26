# `decodeFramePayloads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541183-541200](../../../../../../../reference/runtime/host-main.cjs#L541183-L541200) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541183-541200](../../../../../../../reference/runtime/host-main.cjs#L541183-L541200) | 2 | 1 | 0 | 1 | 1 | 0 |

### host:541183

Calls written directly in this body: `input2.readUInt32BE`, `input2.subarray`, `new CsnapsProtocolError`, `payloads.push`.

Assignment or increment targets: `offset2`.

Explicit throw targets: `CsnapsProtocolError`.

SHA-256 of the source span: `52be9f015e1fe99bff744bf7cc0bc5b647b7743a6f9bb49f78e51194cc1b6e6d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
