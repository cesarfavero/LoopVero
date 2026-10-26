# `loadTeachQueueKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/extension.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729621-729637](../../../../../../../reference/runtime/host-main.cjs#L729621-L729637) | `FunctionDeclaration` | yes | `keyPath, log5, write4 = writeFileAtomic` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729621-729637](../../../../../../../reference/runtime/host-main.cjs#L729621-L729637) | 2 | 0 | 2 | 2 | 1 | 1 |

### host:729621

Calls written directly in this body: `JSON.stringify`, `hostNoFollowRoot`, `key.toString`, `logTeachQueueKeyRefusal`, `parseTeachQueueKey`, `readTeachQueueKeyFile`, `write4`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `fda746a446696cb5faf8d8f3a4c4a17704b9ce45f63f4b9c15eeb38d3e05cc89`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
