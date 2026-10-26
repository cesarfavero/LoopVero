# `startRunCodeReadOnlyReview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only-review.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750295-750335](../../../../../../../../reference/runtime/host-main.cjs#L750295-L750335) | `FunctionDeclaration` | no | `args` |
| [evaluation:523146-523186](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523146-L523186) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750295-750335](../../../../../../../../reference/runtime/host-main.cjs#L750295-L750335) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523146-523186](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523146-L523186) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:750295

Calls written directly in this body: `args.skipGate`, `classifyPlaywrightRunCode`.

SHA-256 of the source span: `e43740c3cc2460f493cd1bbed1341f70de0f73d75a61297d91e4ca85666df1fe`.

### evaluation:523146

Calls written directly in this body: `args.skipGate`, `classifyPlaywrightRunCode`.

SHA-256 of the source span: `1dd779faae869e61eeef5d23110491504c3f4935e0f41224d44ace16f19c695c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
