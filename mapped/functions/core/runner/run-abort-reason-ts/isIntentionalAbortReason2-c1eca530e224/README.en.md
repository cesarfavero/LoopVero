# `isIntentionalAbortReason2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/run-abort-reason.ts` · [Module README](../../../../../modules/core/runner/run-abort-reason-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761826-761828](../../../../../../reference/runtime/host-main.cjs#L761826-L761828) | `FunctionDeclaration` | no | `reason` |
| [evaluation:554092-554094](../../../../../../reference/runtime/sand-eval-runner.cjs#L554092-L554094) | `FunctionDeclaration` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761826-761828](../../../../../../reference/runtime/host-main.cjs#L761826-L761828) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554092-554094](../../../../../../reference/runtime/sand-eval-runner.cjs#L554092-L554094) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761826

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `433cc9b50241046a967956d446b537e08089d68959f6ff923df7a31f6bb64a81`.

### evaluation:554092

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `433cc9b50241046a967956d446b537e08089d68959f6ff923df7a31f6bb64a81`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
