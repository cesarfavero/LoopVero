# `resolveTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762668-762688](../../../../../../../reference/runtime/host-main.cjs#L762668-L762688) | `FunctionDeclaration` | no | `args, need, fallback3` |
| [evaluation:555278-555298](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555278-L555298) | `FunctionDeclaration` | no | `args, need, fallback2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762668-762688](../../../../../../../reference/runtime/host-main.cjs#L762668-L762688) | 6 | 0 | 0 | 4 | 3 | 0 |
| [evaluation:555278-555298](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555278-L555298) | 6 | 0 | 0 | 4 | 3 | 0 |

### host:762668

Calls written directly in this body: `cronTrigger`, `findUnboundedRepoListener`, `isTriggerParseFailure`, `need`, `new SandToolInputError`, `parseStoredTrigger`, `renderTriggerParseFailure`, `renderUnboundedRepoListenerRefusal`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `1de1cb9e4ab3c944c03db0692829ebd3c7f95ff76e7fc51a91b200fdc4ca4ba9`.

### evaluation:555278

Calls written directly in this body: `cronTrigger`, `findUnboundedRepoListener`, `isTriggerParseFailure`, `need`, `new SandToolInputError`, `parseStoredTrigger`, `renderTriggerParseFailure`, `renderUnboundedRepoListenerRefusal`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `3a9772b19127b05b4a698e82e757508689bfc69c0578e7f3931f85bb063b505a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
