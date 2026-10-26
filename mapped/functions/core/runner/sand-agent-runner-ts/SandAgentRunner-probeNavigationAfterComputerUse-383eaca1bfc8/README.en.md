# `_SandAgentRunner.probeNavigationAfterComputerUse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594022-594024](../../../../../../reference/runtime/sand-eval-runner.cjs#L594022-L594024) | `method` | no | `turnCtx, connection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594022-594024](../../../../../../reference/runtime/sand-eval-runner.cjs#L594022-L594024) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:594022

Calls written directly in this body: `.probe`, `this.computerUse.getOrCreateNavigationProbe`, `turnCtx.withDetached`.

SHA-256 of the source span: `1db6f1a1ccfecb3f7f881911eeb933bd718c84377060879c94a8a8eef362f40e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
