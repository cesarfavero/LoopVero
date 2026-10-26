# `crossFieldProblem`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-repeat.ts` · [Module README](../../../../../modules/shared/meetings/meeting-repeat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763224-763252](../../../../../../reference/runtime/host-main.cjs#L763224-L763252) | `FunctionDeclaration` | no | `repeat` |
| [evaluation:556189-556217](../../../../../../reference/runtime/sand-eval-runner.cjs#L556189-L556217) | `FunctionDeclaration` | no | `repeat` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763224-763252](../../../../../../reference/runtime/host-main.cjs#L763224-L763252) | 14 | 0 | 0 | 10 | 0 | 0 |
| [evaluation:556189-556217](../../../../../../reference/runtime/sand-eval-runner.cjs#L556189-L556217) | 14 | 0 | 0 | 10 | 0 | 0 |

### host:763224

Calls written directly in this body: `daysInMonth`, `new Set`.

SHA-256 of the source span: `47f30ae3b7ceab87d6ebf076cd19804605e752d5c5472e53578789f4bf02eb4a`.

### evaluation:556189

Calls written directly in this body: `daysInMonth`, `new Set`.

SHA-256 of the source span: `47f30ae3b7ceab87d6ebf076cd19804605e752d5c5472e53578789f4bf02eb4a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
