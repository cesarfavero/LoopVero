# `start/findTranscriptMatches`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/extension.ts` · [Module README](../../../../../../modules/host/extensions/content-search/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542581-542581](../../../../../../../reference/runtime/host-main.cjs#L542581-L542581) | `ArrowFunctionExpression` | no | `entries, query2, limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542581-542581](../../../../../../../reference/runtime/host-main.cjs#L542581-L542581) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:542581 uses an implicit arrow-function return.

### host:542581

Calls written directly in this body: `findAgentContentMatches`.

SHA-256 of the source span: `fea1198d116b12fd417e4445601e54f83f103516060db5963ce2ed4d05298176`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
