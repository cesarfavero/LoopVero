# `sandAppActionsReferenceDoc`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/actions.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558028-558062](../../../../../../../reference/runtime/host-main.cjs#L558028-L558062) | `FunctionDeclaration` | no | `facts = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558028-558062](../../../../../../../reference/runtime/host-main.cjs#L558028-L558062) | 3 | 2 | 0 | 1 | 0 | 0 |

### host:558028

Calls written directly in this body: `.join`, `lines2.join`, `lines2.push`, `new Set`, `riskSentence`, `targetSentence`, `taught.filter`, `taughtActions`, `unclassified.map`, `valueSentence`.

SHA-256 of the source span: `93cf30dd60549c3f83126ac254dbdcd7f2c6fddd03be823a4fd91c1f091e4891`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
