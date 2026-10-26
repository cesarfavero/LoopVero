# `CsnapsResponseDecoder.assertComplete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541121-541125](../../../../../../../reference/runtime/host-main.cjs#L541121-L541125) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541121-541125](../../../../../../../reference/runtime/host-main.cjs#L541121-L541125) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:541121

Calls written directly in this body: `new CsnapsProtocolError`.

Explicit throw targets: `CsnapsProtocolError`.

SHA-256 of the source span: `781c3d29dcc5822cd39322e8fbe08597ab65d52c69532d6a9c97ca0dd17056b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
