# `isContextOverflowDeadEnd`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736286-736288](../../../../../../reference/runtime/host-main.cjs#L736286-L736288) | `FunctionDeclaration` | no | `error64` |
| [evaluation:589978-589980](../../../../../../reference/runtime/sand-eval-runner.cjs#L589978-L589980) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736286-736288](../../../../../../reference/runtime/host-main.cjs#L736286-L736288) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589978-589980](../../../../../../reference/runtime/sand-eval-runner.cjs#L589978-L589980) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736286

Calls written directly in this body: `hasContextOverflowDeadEndSignal`, `new Set`.

SHA-256 of the source span: `032c4f983c13224d9af5434bfff86966faddc949662e3374b2940410875683ed`.

### evaluation:589978

Calls written directly in this body: `hasContextOverflowDeadEndSignal`, `new Set`.

SHA-256 of the source span: `f5c4ec73cbe9161213f5d993f6a07be6cb52bc45339c037ad6617e10803e4041`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
