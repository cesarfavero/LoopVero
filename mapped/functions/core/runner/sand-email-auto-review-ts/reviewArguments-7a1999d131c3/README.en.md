# `reviewArguments`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764510-764539](../../../../../../reference/runtime/host-main.cjs#L764510-L764539) | `FunctionDeclaration` | no | `target` |
| [evaluation:557878-557907](../../../../../../reference/runtime/sand-eval-runner.cjs#L557878-L557907) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764510-764539](../../../../../../reference/runtime/host-main.cjs#L764510-L764539) | 7 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557878-557907](../../../../../../reference/runtime/sand-eval-runner.cjs#L557878-L557907) | 7 | 0 | 0 | 1 | 0 | 0 |

### host:764510

Calls written directly in this body: `target.attachments.map`, `target.replyTo.map`.

SHA-256 of the source span: `7e96408f9c166432b4405ba08ea4401fc5ddf0210dd1b2204841d1765ffffa76`.

### evaluation:557878

Calls written directly in this body: `target.attachments.map`, `target.replyTo.map`.

SHA-256 of the source span: `7e96408f9c166432b4405ba08ea4401fc5ddf0210dd1b2204841d1765ffffa76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
