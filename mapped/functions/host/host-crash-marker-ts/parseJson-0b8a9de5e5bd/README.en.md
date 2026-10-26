# `parseJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-crash-marker.ts` · [Module README](../../../../modules/host/host-crash-marker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471434-471440](../../../../../reference/runtime/host-main.cjs#L471434-L471440) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471434-471440](../../../../../reference/runtime/host-main.cjs#L471434-L471440) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:471434

Calls written directly in this body: `JSON.parse`.

SHA-256 of the source span: `fdf272071d18b8d664baf2f44d7b8e23db5079eb007c83c586ccef2d23293e5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
