# `cardHiddenFromChannelForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756066-756068](../../../../../../../reference/runtime/host-main.cjs#L756066-L756068) | `FunctionDeclaration` | no | `host` |
| [evaluation:541967-541969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541967-L541969) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756066-756068](../../../../../../../reference/runtime/host-main.cjs#L756066-L756068) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541967-541969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541967-L541969) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756066

Calls written directly in this body: `host.activeTurnRequestSource`, `host.gates.channelCardVisibilityNote`.

SHA-256 of the source span: `aa7ea333881eab34e4ab022fa9c401abc2454916074b916f8be7aa48e138c4d3`.

### evaluation:541967

Calls written directly in this body: `host.activeTurnRequestSource`, `host.gates.channelCardVisibilityNote`.

SHA-256 of the source span: `aa7ea333881eab34e4ab022fa9c401abc2454916074b916f8be7aa48e138c4d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
