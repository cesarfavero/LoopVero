# `isSlimShapedMethod`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-protocol.ts` · [Module README](../../../../modules/host/gateway-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489999-490001](../../../../../reference/runtime/host-main.cjs#L489999-L490001) | `FunctionDeclaration` | no | `method` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489999-490001](../../../../../reference/runtime/host-main.cjs#L489999-L490001) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:489999

Calls written directly in this body: `SLIM_SHAPED_METHODS.some`.

SHA-256 of the source span: `139e436f172de567a7f0061085404e45c98dc8c77a4e1f248cb3d1ba74274a5d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
