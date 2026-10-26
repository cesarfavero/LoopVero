# `_SandAgentRunner.steer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594100-594102](../../../../../../reference/runtime/sand-eval-runner.cjs#L594100-L594102) | `method` | no | `prompt, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594100-594102](../../../../../../reference/runtime/sand-eval-runner.cjs#L594100-L594102) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:594100

Calls written directly in this body: `this.runShell.steer`.

SHA-256 of the source span: `c464f66348787513f5219b29b788cbd950d38892a39626c01e22d8615d71edce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
