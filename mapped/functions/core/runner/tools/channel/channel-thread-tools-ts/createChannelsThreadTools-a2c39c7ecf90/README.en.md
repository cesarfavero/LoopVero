# `createChannelsThreadTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/channel/channel-thread-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/channel/channel-thread-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768412-768414](../../../../../../../../reference/runtime/host-main.cjs#L768412-L768414) | `FunctionDeclaration` | no | `channels` |
| [evaluation:563928-563930](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563928-L563930) | `FunctionDeclaration` | no | `channels` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768412-768414](../../../../../../../../reference/runtime/host-main.cjs#L768412-L768414) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563928-563930](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563928-L563930) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768412

Calls written directly in this body: `channels.flatMap`.

SHA-256 of the source span: `3f28696c8f5b2da1e6e4cf0d080c6667e5d1bc6472344b8828a01b8098589f35`.

### evaluation:563928

Calls written directly in this body: `channels.flatMap`.

SHA-256 of the source span: `3f28696c8f5b2da1e6e4cf0d080c6667e5d1bc6472344b8828a01b8098589f35`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
