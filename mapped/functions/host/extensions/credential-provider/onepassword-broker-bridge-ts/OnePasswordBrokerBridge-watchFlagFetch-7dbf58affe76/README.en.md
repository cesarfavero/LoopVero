# `OnePasswordBrokerBridge.watchFlagFetch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549719-549882](../../../../../../../reference/runtime/host-main.cjs#L549719-L549882) | `method` | yes | `cdpPort` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549719-549882](../../../../../../../reference/runtime/host-main.cjs#L549719-L549882) | 3 | 0 | 3 | 5 | 0 | 2 |

### host:549719

Calls written directly in this body: `.run`, `.safeParse`, `Promise.withResolvers`, `browserUrl.pathname.startsWith`, `browserUrl.toString`, `close`, `createDeadlinePolicy`, `deadline.run`, `errorLogTag`, `listedDebuggerUrl`, `new Set`, `object`, `socket.addEventListener`, `string2`, `this.options.log`, `this.readExtensionId`.

Assignment or increment targets: `browserUrl`.

SHA-256 of the source span: `05a630353cb27e3b3dbd37e13179e283b99d5841f77f009034d1eef4a9032cab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
