# `stopDelegatedWorkSafely`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780976-780991](../../../../../../../reference/runtime/host-main.cjs#L780976-L780991) | `FunctionDeclaration` | yes | `controller, args` |
| [evaluation:581323-581338](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581323-L581338) | `FunctionDeclaration` | yes | `controller, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780976-780991](../../../../../../../reference/runtime/host-main.cjs#L780976-L780991) | 2 | 0 | 1 | 3 | 0 | 1 |
| [evaluation:581323-581338](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581323-L581338) | 2 | 0 | 1 | 3 | 0 | 1 |

### host:780976

Calls written directly in this body: `String`, `controller.stopDelegatedWork`.

SHA-256 of the source span: `5c48ba9ae33f8b03783426b1dd828668a66691e415ed6a234ab637460e11e9a2`.

### evaluation:581323

Calls written directly in this body: `String`, `controller.stopDelegatedWork`.

SHA-256 of the source span: `ef770b9bba554d091cc13ffef5913db296fd3f8e61cbac66c3c447f0fd62a553`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
