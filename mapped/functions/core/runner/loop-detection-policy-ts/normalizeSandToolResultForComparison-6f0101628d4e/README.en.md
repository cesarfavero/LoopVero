# `normalizeSandToolResultForComparison`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/loop-detection-policy.ts` · [Module README](../../../../../modules/core/runner/loop-detection-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483325-483333](../../../../../../reference/runtime/sand-eval-runner.cjs#L483325-L483333) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483325-483333](../../../../../../reference/runtime/sand-eval-runner.cjs#L483325-L483333) | 0 | 1 | 0 | 1 | 0 | 0 |

### evaluation:483325

Calls written directly in this body: `resultText.match`, `resultText.replace`, `text3.replace`.

Assignment or increment targets: `text3`.

SHA-256 of the source span: `7dbe8a2a11a0906995dd89ace863c9631acba61a3b70e33b2a6959bd6a75a96f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
