# `summarizeLastRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/prompt-sections/automations-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/automations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528378-528386](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528378-L528386) | `FunctionDeclaration` | no | `runs, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528378-528386](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528378-L528386) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:528378

Calls written directly in this body: `formatTimestamp2`.

SHA-256 of the source span: `3c196f6dd705f25d700e3c2370116ee48ce997140f1565516b43e5a554ca6a50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
