# `OnePasswordBrokerBridge.listServiceWorker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549960-549995](../../../../../../../reference/runtime/host-main.cjs#L549960-L549995) | `method` | yes | `cdpPort` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549960-549995](../../../../../../../reference/runtime/host-main.cjs#L549960-L549995) | 6 | 0 | 2 | 6 | 0 | 1 |

### host:549960

Calls written directly in this body: `.filter`, `.map`, `Array.isArray`, `createDeadlinePolicy`, `deadline.run`, `errorLogTag`, `findSystemErrno`, `listedDebuggerUrl`, `payload.map`, `this.options.log`, `this.readExtensionId`, `workerUrl.toString`.

Assignment or increment targets: `payload`.

SHA-256 of the source span: `21709c092036d331ae94f38ef8c2c14e51596cfa5b0210bcd61c7a54569a319c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
