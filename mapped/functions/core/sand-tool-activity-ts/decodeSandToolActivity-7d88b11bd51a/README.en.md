# `decodeSandToolActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/tools/README.en.md).

**Module:** `core/sand-tool-activity.ts` · [Module README](../../../../modules/core/sand-tool-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719675-719691](../../../../../reference/runtime/host-main.cjs#L719675-L719691) | `FunctionDeclaration` | no | `currentStep` |
| [evaluation:526023-526039](../../../../../reference/runtime/sand-eval-runner.cjs#L526023-L526039) | `FunctionDeclaration` | no | `currentStep` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719675-719691](../../../../../reference/runtime/host-main.cjs#L719675-L719691) | 5 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:526023-526039](../../../../../reference/runtime/sand-eval-runner.cjs#L526023-L526039) | 5 | 0 | 0 | 4 | 0 | 1 |

### host:719675

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `descriptor`, `isSandToolName`.

Assignment or increment targets: `payload`.

SHA-256 of the source span: `5c412edca4cedee19b01c1559c79dfade3400553df758abb746f9aa2459ba5f3`.

### evaluation:526023

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `descriptor`, `isSandToolName`.

Assignment or increment targets: `payload`.

SHA-256 of the source span: `5c412edca4cedee19b01c1559c79dfade3400553df758abb746f9aa2459ba5f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
