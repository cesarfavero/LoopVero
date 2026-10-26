# `resolveSandChannelPorts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/channels/runner-channel-ports.ts` · [Module README](../../../../../../modules/core/runner/channels/runner-channel-ports-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534857-534860](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534857-L534860) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534857-534860](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534857-L534860) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534857

Calls written directly in this body: `channels.map`, `foldLegacySlackPorts`.

SHA-256 of the source span: `139ecfbf42194555a089e1d1a34d26c2980e10e001bb697385a87c7609206288`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
