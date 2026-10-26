# `memoryImportance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702654-702658](../../../../../../reference/runtime/host-main.cjs#L702654-L702658) | `FunctionDeclaration` | no | `content` |
| [evaluation:536156-536160](../../../../../../reference/runtime/sand-eval-runner.cjs#L536156-L536160) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702654-702658](../../../../../../reference/runtime/host-main.cjs#L702654-L702658) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:536156-536160](../../../../../../reference/runtime/sand-eval-runner.cjs#L536156-L536160) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:702654

Calls written directly in this body: `content.startsWith`.

SHA-256 of the source span: `d819462a29e12c3e94cda6049350614a1a5254d39513d9c84dd017e4b60c6130`.

### evaluation:536156

Calls written directly in this body: `content.startsWith`.

SHA-256 of the source span: `d819462a29e12c3e94cda6049350614a1a5254d39513d9c84dd017e4b60c6130`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
