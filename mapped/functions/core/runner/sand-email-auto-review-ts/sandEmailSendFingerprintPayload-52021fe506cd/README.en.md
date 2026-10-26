# `sandEmailSendFingerprintPayload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764591-764619](../../../../../../reference/runtime/host-main.cjs#L764591-L764619) | `FunctionDeclaration` | no | `target, provenance` |
| [evaluation:557959-557987](../../../../../../reference/runtime/sand-eval-runner.cjs#L557959-L557987) | `FunctionDeclaration` | no | `target, provenance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764591-764619](../../../../../../reference/runtime/host-main.cjs#L764591-L764619) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557959-557987](../../../../../../reference/runtime/sand-eval-runner.cjs#L557959-L557987) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:764591

Calls written directly in this body: `target.attachments.map`, `target.replyTo.map`.

SHA-256 of the source span: `8a1fe53493bd0c48ecd93f32f9c63e8bc5ce72bcc5eeef5e24390dc4229c86b6`.

### evaluation:557959

Calls written directly in this body: `target.attachments.map`, `target.replyTo.map`.

SHA-256 of the source span: `8a1fe53493bd0c48ecd93f32f9c63e8bc5ce72bcc5eeef5e24390dc4229c86b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
