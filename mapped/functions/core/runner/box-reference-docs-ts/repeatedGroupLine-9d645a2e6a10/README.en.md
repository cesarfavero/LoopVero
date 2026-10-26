# `repeatedGroupLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558242-558250](../../../../../../reference/runtime/host-main.cjs#L558242-L558250) | `FunctionDeclaration` | no | `group, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558242-558250](../../../../../../reference/runtime/host-main.cjs#L558242-L558250) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:558242

Calls written directly in this body: `.join`, `annotationsFor`, `group.controls.map`, `joinClauses`, `presenceSentence`.

SHA-256 of the source span: `a2aa278f6cf40473c991961d53cc5392df628c545bd17835dab81ddeddbc71bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
