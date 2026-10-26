# `settingsTabsLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558273-558288](../../../../../../reference/runtime/host-main.cjs#L558273-L558288) | `FunctionDeclaration` | no | `facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558273-558288](../../../../../../reference/runtime/host-main.cjs#L558273-L558288) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:558273

Calls written directly in this body: `.join`, `MAP.settings.sections.filter`, `conditional.map`, `joinClauses`, `linkableRowsByTab2`, `shown.filter`, `shown.map`.

SHA-256 of the source span: `d315416575bb54f60cb68f2c70af5777d576b55bc575a544491ebad0b3626622`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
