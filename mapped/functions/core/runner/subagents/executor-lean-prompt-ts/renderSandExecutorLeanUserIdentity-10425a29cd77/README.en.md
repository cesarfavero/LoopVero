# `renderSandExecutorLeanUserIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/executor-lean-prompt.ts` · [Module README](../../../../../../modules/core/runner/subagents/executor-lean-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552565-552569](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552565-L552569) | `FunctionDeclaration` | no | `fullName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552565-552569](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552565-L552569) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:552565

Calls written directly in this body: `normalizeSandUserFullName`.

SHA-256 of the source span: `6aebf3314f7e65c2c6d9bd9fde77239d3b02b8712831d89fd468a00777e2fd13`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
