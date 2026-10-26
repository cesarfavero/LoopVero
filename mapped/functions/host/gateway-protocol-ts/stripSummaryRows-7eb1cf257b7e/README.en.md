# `stripSummaryRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-protocol.ts` · [Module README](../../../../modules/host/gateway-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489972-489980](../../../../../reference/runtime/host-main.cjs#L489972-L489980) | `FunctionDeclaration` | no | `rows` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489972-489980](../../../../../reference/runtime/host-main.cjs#L489972-L489980) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:489972

Calls written directly in this body: `rows.map`.

SHA-256 of the source span: `810a624ee689baab3a9a01ac2b3205cd40d78cf1eeb6245b2b55aa46ecd96a04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
