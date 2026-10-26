# `boxBrowserWindowDeps/onPossibleNavigation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751484-751488](../../../../../../../../reference/runtime/host-main.cjs#L751484-L751488) | `ArrowFunctionExpression` | no | `ctx` |
| [evaluation:524335-524339](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524335-L524339) | `ArrowFunctionExpression` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751484-751488](../../../../../../../../reference/runtime/host-main.cjs#L751484-L751488) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524335-524339](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524335-L524339) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:751484

Calls written directly in this body: `.probe`, `boxAgentWindowIndex`, `ctx.withDetached`, `host.getOrCreateNavigationProbe`, `host.resolveBoxId`.

SHA-256 of the source span: `54088d963b76f5419d9bebb931468bc9ae8c094bdcbf483b04b6878d6b09a445`.

### evaluation:524335

Calls written directly in this body: `.probe`, `boxAgentWindowIndex`, `ctx.withDetached`, `host.getOrCreateNavigationProbe`, `host.resolveBoxId`.

SHA-256 of the source span: `54088d963b76f5419d9bebb931468bc9ae8c094bdcbf483b04b6878d6b09a445`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
