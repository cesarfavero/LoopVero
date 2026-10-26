# `assertDeclaredDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699529-699537](../../../../../../reference/runtime/host-main.cjs#L699529-L699537) | `FunctionDeclaration` | no | `args, actions2` |
| [evaluation:513285-513293](../../../../../../reference/runtime/sand-eval-runner.cjs#L513285-L513293) | `FunctionDeclaration` | no | `args, actions2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699529-699537](../../../../../../reference/runtime/host-main.cjs#L699529-L699537) | 3 | 0 | 0 | 3 | 1 | 0 |
| [evaluation:513285-513293](../../../../../../reference/runtime/sand-eval-runner.cjs#L513285-L513293) | 3 | 0 | 0 | 3 | 1 | 0 |

### host:699529

Calls written directly in this body: `actions2.some`, `new SandComputerAutoReviewBlockedError`, `normalizeSandComputerDescription`.

Explicit throw targets: `SandComputerAutoReviewBlockedError`.

SHA-256 of the source span: `924102a26bc7c1627502970b9afef65412c25a41a8206cd6ade1ff416b8b78bc`.

### evaluation:513285

Calls written directly in this body: `actions2.some`, `new SandComputerAutoReviewBlockedError`, `normalizeSandComputerDescription`.

Explicit throw targets: `SandComputerAutoReviewBlockedError`.

SHA-256 of the source span: `924102a26bc7c1627502970b9afef65412c25a41a8206cd6ade1ff416b8b78bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
