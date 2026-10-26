# `createChannelsSetupTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/channel/channel-setup-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/channel/channel-setup-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781365-781374](../../../../../../../../reference/runtime/host-main.cjs#L781365-L781374) | `FunctionDeclaration` | no | `channels, deps` |
| [evaluation:581712-581721](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581712-L581721) | `FunctionDeclaration` | no | `channels, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781365-781374](../../../../../../../../reference/runtime/host-main.cjs#L781365-L781374) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581712-581721](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581712-L581721) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781365

Calls written directly in this body: `channels.flatMap`.

SHA-256 of the source span: `1a9768c6def5922162afb636e3fa9bc2572bd32f656a7a192fe25c3af0c1779c`.

### evaluation:581712

Calls written directly in this body: `channels.flatMap`.

SHA-256 of the source span: `1a9768c6def5922162afb636e3fa9bc2572bd32f656a7a192fe25c3af0c1779c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
