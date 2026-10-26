# `walk2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749707-749714](../../../../../../../../reference/runtime/host-main.cjs#L749707-L749714) | `FunctionDeclaration` | no | `fn, allowNavigation` |
| [evaluation:522558-522565](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522558-L522565) | `FunctionDeclaration` | no | `fn, allowNavigation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749707-749714](../../../../../../../../reference/runtime/host-main.cjs#L749707-L749714) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:522558-522565](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522558-L522565) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:749707

Calls written directly in this body: `.entry`, `new Walker`.

SHA-256 of the source span: `0646d2b514ae94d4eb30995fe0e4bc46683f2b9e7d2fa6738152849274e02838`.

### evaluation:522558

Calls written directly in this body: `.entry`, `new Walker`.

SHA-256 of the source span: `d0ad6ceef2128dcf4c2c4f6c8eac05e310ceaa4185249557a90644fc934dc252`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
