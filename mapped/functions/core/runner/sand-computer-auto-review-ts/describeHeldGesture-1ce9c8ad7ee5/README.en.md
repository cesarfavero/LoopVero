# `describeHeldGesture`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699437-699440](../../../../../../reference/runtime/host-main.cjs#L699437-L699440) | `FunctionDeclaration` | no | `base, modifiers` |
| [evaluation:513193-513196](../../../../../../reference/runtime/sand-eval-runner.cjs#L513193-L513196) | `FunctionDeclaration` | no | `base, modifiers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699437-699440](../../../../../../reference/runtime/host-main.cjs#L699437-L699440) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513193-513196](../../../../../../reference/runtime/sand-eval-runner.cjs#L513193-L513196) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:699437

Calls written directly in this body: `.toUpperCase`, `gesture.charAt`, `gesture.slice`.

SHA-256 of the source span: `a9072a9c80cb53c97a0254965cd292f435366a85cf607ac8b85788bf4e71e520`.

### evaluation:513193

Calls written directly in this body: `.toUpperCase`, `gesture.charAt`, `gesture.slice`.

SHA-256 of the source span: `a9072a9c80cb53c97a0254965cd292f435366a85cf607ac8b85788bf4e71e520`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
