# `blockedReportForRawToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/failures/raw-tool-call-report.ts` · [Module README](../../../../../../modules/core/runner/failures/raw-tool-call-report-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590425-590436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590425-L590436) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590425-590436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590425-L590436) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:590425

Calls written directly in this body: `.join`, `.map`, `.replace`, `.trim`, `new Set`, `text3.matchAll`, `text3.search`, `text3.slice`, `tools.join`.

SHA-256 of the source span: `b6d256ae586022abde669325baf7799391a339026b95cc84cd901e1a0867f7c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
