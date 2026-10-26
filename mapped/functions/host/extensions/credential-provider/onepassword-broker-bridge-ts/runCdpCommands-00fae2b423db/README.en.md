# `runCdpCommands`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549370-549430](../../../../../../../reference/runtime/host-main.cjs#L549370-L549430) | `FunctionDeclaration` | yes | `webSocketDebuggerUrl, commands, timeoutMs, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549370-549430](../../../../../../../reference/runtime/host-main.cjs#L549370-L549430) | 0 | 0 | 2 | 1 | 0 | 1 |

### host:549370

Calls written directly in this body: `command.run`, `createDeadlinePolicy`, `errorLogTag`, `open13.run`, `options2.log`, `socket.close`.

SHA-256 of the source span: `da60872d534d7da759357695b9cae71c1d40821229dd3c642809992b1661a991`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
