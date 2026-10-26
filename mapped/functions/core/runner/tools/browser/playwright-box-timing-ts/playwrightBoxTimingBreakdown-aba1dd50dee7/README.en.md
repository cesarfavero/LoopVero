# `playwrightBoxTimingBreakdown`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-box-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743139-743163](../../../../../../../../reference/runtime/host-main.cjs#L743139-L743163) | `FunctionDeclaration` | no | `timing, { sentAtMs, returnedAtMs }` |
| [evaluation:515990-516014](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515990-L516014) | `FunctionDeclaration` | no | `timing, { sentAtMs, returnedAtMs }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743139-743163](../../../../../../../../reference/runtime/host-main.cjs#L743139-L743163) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:515990-516014](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515990-L516014) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:743139

Calls written directly in this body: `Math.max`.

Assignment or increment targets: `stepMs.serialize`, `stepMs.settle`, `stepMs[computed]`.

SHA-256 of the source span: `35ff35a814fa0cb49ad9bcd35cdaabb2d839390a1c2cc64d2cae4ef7eab1171d`.

### evaluation:515990

Calls written directly in this body: `Math.max`.

Assignment or increment targets: `stepMs.serialize`, `stepMs.settle`, `stepMs[computed]`.

SHA-256 of the source span: `35ff35a814fa0cb49ad9bcd35cdaabb2d839390a1c2cc64d2cae4ef7eab1171d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
