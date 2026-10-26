# `grantedItems`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/cookie-origin-approval-cards.ts` · [Module README](../../../../../modules/core/runner/cookie-origin-approval-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774985-774988](../../../../../../reference/runtime/host-main.cjs#L774985-L774988) | `FunctionDeclaration` | no | `items, grants` |
| [evaluation:574614-574617](../../../../../../reference/runtime/sand-eval-runner.cjs#L574614-L574617) | `FunctionDeclaration` | no | `items, grants` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774985-774988](../../../../../../reference/runtime/host-main.cjs#L774985-L774988) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574614-574617](../../../../../../reference/runtime/sand-eval-runner.cjs#L574614-L574617) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774985

Calls written directly in this body: `.filter`, `grants.map`, `new Set`.

SHA-256 of the source span: `9b51698fdc44aa77f12a633ca535322e1efd372872efcf6959ee387250275837`.

### evaluation:574614

Calls written directly in this body: `.filter`, `grants.map`, `new Set`.

SHA-256 of the source span: `9b51698fdc44aa77f12a633ca535322e1efd372872efcf6959ee387250275837`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
