# `SandSubagentHostAdapter.createOrResumeSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582968-582978](../../../../../../reference/runtime/sand-eval-runner.cjs#L582968-L582978) | `method` | yes | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582968-582978](../../../../../../reference/runtime/sand-eval-runner.cjs#L582968-L582978) | 0 | 0 | 1 | 1 | 0 | 1 |

### evaluation:582968

Calls written directly in this body: `__callDispose`, `__using`, `createSpan`, `ctx.withName`, `this.createOrResume`.

SHA-256 of the source span: `8312bddcb80ada8fb4a6384e2005730d87280863aeb2b88a2581f6ee9029cf23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
