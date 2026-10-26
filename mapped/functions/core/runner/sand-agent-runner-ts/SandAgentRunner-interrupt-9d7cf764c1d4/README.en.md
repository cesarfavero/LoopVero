# `_SandAgentRunner.interrupt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594055-594057](../../../../../../reference/runtime/sand-eval-runner.cjs#L594055-L594057) | `method` | no | `reason, supersede` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594055-594057](../../../../../../reference/runtime/sand-eval-runner.cjs#L594055-L594057) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:594055

Calls written directly in this body: `this.runShell.interrupt`.

SHA-256 of the source span: `7fa2598a3b0f662230b646e0ba95f71cbd5c441d1cfca27c90ab98e406a320fd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
