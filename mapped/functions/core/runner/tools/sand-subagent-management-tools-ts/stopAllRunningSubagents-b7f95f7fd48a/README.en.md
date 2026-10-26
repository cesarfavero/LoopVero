# `stopAllRunningSubagents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780933-780975](../../../../../../../reference/runtime/host-main.cjs#L780933-L780975) | `FunctionDeclaration` | yes | `controller, args` |
| [evaluation:581280-581322](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581280-L581322) | `FunctionDeclaration` | yes | `controller, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780933-780975](../../../../../../../reference/runtime/host-main.cjs#L780933-L780975) | 4 | 1 | 2 | 1 | 0 | 0 |
| [evaluation:581280-581322](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581280-L581322) | 4 | 1 | 2 | 1 | 0 | 0 |

### host:780933

Calls written directly in this body: `Promise.all`, `alreadyFinished.push`, `controller.listRunningSubagents`, `failed2.push`, `running.map`, `stopDelegatedWorkSafely`, `stopped2.push`, `stoppedSubagentOf`.

SHA-256 of the source span: `fd6ecc192e7094d1ae1f1f5b480c083855e59a671ff061bd89575779c7c61979`.

### evaluation:581280

Calls written directly in this body: `Promise.all`, `alreadyFinished.push`, `controller.listRunningSubagents`, `failed.push`, `running.map`, `stopDelegatedWorkSafely`, `stopped.push`, `stoppedSubagentOf`.

SHA-256 of the source span: `e2406b22c01f28d6d7f85ea44b0df16d5d47831b9e73fb733c265a5a8c6d9667`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
