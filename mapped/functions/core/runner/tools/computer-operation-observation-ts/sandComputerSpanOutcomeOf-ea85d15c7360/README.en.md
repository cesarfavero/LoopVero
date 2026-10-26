# `sandComputerSpanOutcomeOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-operation-observation.ts` · [Module README](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776188-776190](../../../../../../../reference/runtime/host-main.cjs#L776188-L776190) | `FunctionDeclaration` | no | `code` |
| [evaluation:575842-575844](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575842-L575844) | `FunctionDeclaration` | no | `code` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776188-776190](../../../../../../../reference/runtime/host-main.cjs#L776188-L776190) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575842-575844](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575842-L575844) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776188

Calls written directly in this body: `computerOperationOutcomeOf`.

SHA-256 of the source span: `961189780496ce42bc37c7ec06ae88102ec4a61f77dd704ffc5e8cc344a33041`.

### evaluation:575842

Calls written directly in this body: `computerOperationOutcomeOf`.

SHA-256 of the source span: `961189780496ce42bc37c7ec06ae88102ec4a61f77dd704ffc5e8cc344a33041`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
