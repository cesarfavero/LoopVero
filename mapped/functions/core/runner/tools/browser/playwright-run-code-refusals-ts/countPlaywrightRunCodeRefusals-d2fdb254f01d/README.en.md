# `countPlaywrightRunCodeRefusals`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-run-code-refusals.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-run-code-refusals-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776151-776165](../../../../../../../../reference/runtime/host-main.cjs#L776151-L776165) | `FunctionDeclaration` | no | `tool, host` |
| [evaluation:575807-575821](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575807-L575821) | `FunctionDeclaration` | no | `tool, host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776151-776165](../../../../../../../../reference/runtime/host-main.cjs#L776151-L776165) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:575807-575821](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575807-L575821) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:776151

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `b78197d9ceb59bde64370c37a7a6b541fc08731b1a77d2de56e2a345c31ae7d2`.

### evaluation:575807

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `c483a354200b1841f87b6093e0aab991342e32170b9edd453d019faaa27872f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
