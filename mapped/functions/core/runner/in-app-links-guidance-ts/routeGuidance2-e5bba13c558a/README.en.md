# `routeGuidance2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557725-557734](../../../../../../reference/runtime/host-main.cjs#L557725-L557734) | `FunctionDeclaration` | no | `taught, tabs` |
| [evaluation:546161-546170](../../../../../../reference/runtime/sand-eval-runner.cjs#L546161-L546170) | `FunctionDeclaration` | no | `taught, tabs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557725-557734](../../../../../../reference/runtime/host-main.cjs#L557725-L557734) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546161-546170](../../../../../../reference/runtime/sand-eval-runner.cjs#L546161-L546170) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557725

Calls written directly in this body: `routeTemplate2`, `tabs.join`, `taught.join`.

SHA-256 of the source span: `206beacb06462bd54d704c9ec24e4500af1cbf6fe27469631c379eede3588bbf`.

### evaluation:546161

Calls written directly in this body: `routeTemplate2`, `tabs.join`, `taught.join`.

SHA-256 of the source span: `206beacb06462bd54d704c9ec24e4500af1cbf6fe27469631c379eede3588bbf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
