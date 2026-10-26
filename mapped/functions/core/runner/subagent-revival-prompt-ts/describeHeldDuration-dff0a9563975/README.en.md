# `describeHeldDuration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-revival-prompt.ts` · [Module README](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583878-583884](../../../../../../reference/runtime/sand-eval-runner.cjs#L583878-L583884) | `FunctionDeclaration` | no | `heldForMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583878-583884](../../../../../../reference/runtime/sand-eval-runner.cjs#L583878-L583884) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:583878

Calls written directly in this body: `Math.max`, `Math.round`.

SHA-256 of the source span: `9d0b732d6150aff41f527c87d8ef129d74794f2135d2c8a14f3457edb1bd1ccb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
