# `isUrlLessBoxPlaywrightTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/tool-calls.ts` · [Module README](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539109-539111](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539109-L539111) | `FunctionDeclaration` | no | `toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539109-539111](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539109-L539111) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539109

Calls written directly in this body: `playwrightBoxMcpWindowIndex`, `toolName.lastIndexOf`, `toolName.slice`.

SHA-256 of the source span: `54f8da602ab15485403913e1d5482f1206c36a1f8ddfe073f9f3bd903192523a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
