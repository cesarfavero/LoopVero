# `getAgentAssetsDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/attachment-paths.ts` · [Module README](../../../../modules/core/attachment-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494817-494819](../../../../../reference/runtime/host-main.cjs#L494817-L494819) | `FunctionDeclaration` | no | `agentDir` |
| [evaluation:530337-530339](../../../../../reference/runtime/sand-eval-runner.cjs#L530337-L530339) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494817-494819](../../../../../reference/runtime/host-main.cjs#L494817-L494819) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530337-530339](../../../../../reference/runtime/sand-eval-runner.cjs#L530337-L530339) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494817

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7bddfff931a50fe2cebce49254d7f595010a02aa121ac978e86303218a56f3ac`.

### evaluation:530337

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `b7d2658b3be9a355bd8802941b9629a0c3ae074ee397b78d2005a2d7af7f52b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
