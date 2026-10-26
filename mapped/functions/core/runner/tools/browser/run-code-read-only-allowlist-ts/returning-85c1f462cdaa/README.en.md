# `returning`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only-allowlist.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-allowlist-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749264-749266](../../../../../../../../reference/runtime/host-main.cjs#L749264-L749266) | `FunctionDeclaration` | no | `names3, kind` |
| [evaluation:522115-522117](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522115-L522117) | `FunctionDeclaration` | no | `names3, kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749264-749266](../../../../../../../../reference/runtime/host-main.cjs#L749264-L749266) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522115-522117](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522115-L522117) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:749264

Calls written directly in this body: `Object.fromEntries`, `names3.map`.

SHA-256 of the source span: `af2d17c6491ad8e77d5c8e8235c5b189478b65773b87b12583d62b54ea7b7f6b`.

### evaluation:522115

Calls written directly in this body: `Object.fromEntries`, `names3.map`.

SHA-256 of the source span: `af2d17c6491ad8e77d5c8e8235c5b189478b65773b87b12583d62b54ea7b7f6b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
