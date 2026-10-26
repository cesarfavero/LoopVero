# `renderLinkItemLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741088-741094](../../../../../../../../reference/runtime/host-main.cjs#L741088-L741094) | `FunctionDeclaration` | no | `item` |
| [evaluation:482035-482041](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482035-L482041) | `FunctionDeclaration` | no | `item` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741088-741094](../../../../../../../../reference/runtime/host-main.cjs#L741088-L741094) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482035-482041](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482035-L482041) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:741088

Calls written directly in this body: `formatLinkItemPrice`, `item.title.replace`, `linkItemHref`.

SHA-256 of the source span: `53aa296bffff5d72607238a978a990aebf3f3744bf147c549fed3bc5af81fddb`.

### evaluation:482035

Calls written directly in this body: `formatLinkItemPrice`, `item.title.replace`, `linkItemHref`.

SHA-256 of the source span: `53aa296bffff5d72607238a978a990aebf3f3744bf147c549fed3bc5af81fddb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
