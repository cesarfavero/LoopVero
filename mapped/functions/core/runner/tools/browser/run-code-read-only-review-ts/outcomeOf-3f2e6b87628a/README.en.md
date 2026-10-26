# `outcomeOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only-review.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750336-750346](../../../../../../../../reference/runtime/host-main.cjs#L750336-L750346) | `FunctionDeclaration` | no | `error64, asked, classifierFailed` |
| [evaluation:523187-523197](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523187-L523197) | `FunctionDeclaration` | no | `error63, asked, classifierFailed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750336-750346](../../../../../../../../reference/runtime/host-main.cjs#L750336-L750346) | 8 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:523187-523197](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523187-L523197) | 8 | 0 | 0 | 6 | 0 | 0 |

### host:750336

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `33774c1e8fd9f881e6625b10ccf2bd1b70e9d716a29a21e1268164ac2cbe3902`.

### evaluation:523187

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `cfab00b4a648761b77c4d4dee2d629a430ba7c57a0047a495afacb69e1e3eca2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
