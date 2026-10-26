# `encodeFrame`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541172-541182](../../../../../../../reference/runtime/host-main.cjs#L541172-L541182) | `FunctionDeclaration` | no | `payload` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541172-541182](../../../../../../../reference/runtime/host-main.cjs#L541172-L541182) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:541172

Calls written directly in this body: `Buffer.allocUnsafe`, `frame.writeUInt32BE`, `new CsnapsProtocolError`, `payload.copy`.

Explicit throw targets: `CsnapsProtocolError`.

SHA-256 of the source span: `f3b93c75a789cc23c309ec5c0f6845ab4fca3b7225c0bb4a3221f32ec7a70b21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
