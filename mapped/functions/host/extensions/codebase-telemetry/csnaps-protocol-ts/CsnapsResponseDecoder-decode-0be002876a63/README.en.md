# `CsnapsResponseDecoder.decode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541114-541120](../../../../../../../reference/runtime/host-main.cjs#L541114-L541120) | `method` | no | `chunk` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541114-541120](../../../../../../../reference/runtime/host-main.cjs#L541114-L541120) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:541114

Calls written directly in this body: `Buffer.concat`, `Buffer.from`, `decodeFramePayloads`, `decoded.payloads.map`.

Assignment or increment targets: `this.buffer`.

SHA-256 of the source span: `f9eb71582209d62889fe257ca0e8543480b3fe26c889831e76b573167cc1c478`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
