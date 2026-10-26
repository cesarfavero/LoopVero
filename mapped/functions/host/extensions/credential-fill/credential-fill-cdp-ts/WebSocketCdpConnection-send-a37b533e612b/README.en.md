# `WebSocketCdpConnection.send`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-cdp.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-cdp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543067-543096](../../../../../../../reference/runtime/host-main.cjs#L543067-L543096) | `method` | yes | `method, params = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543067-543096](../../../../../../../reference/runtime/host-main.cjs#L543067-L543096) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:543067

Calls written directly in this body: `CDP_COMMAND_DEADLINE.run`.

SHA-256 of the source span: `63a2f54fe9160032ff78ff30208bd8103282a5bcd182f14a276c8990fa997c33`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
