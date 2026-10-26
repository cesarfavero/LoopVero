# `WebSocketCdpConnection.receive`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-cdp.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-cdp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543105-543127](../../../../../../../reference/runtime/host-main.cjs#L543105-L543127) | `method` | no | `data2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543105-543127](../../../../../../../reference/runtime/host-main.cjs#L543105-L543127) | 4 | 0 | 0 | 5 | 0 | 1 |

### host:543105

Calls written directly in this body: `JSON.parse`, `cdpResponseSchema.safeParse`, `errorLogTag`, `new Error`, `pending.reject`, `pending.resolve`, `this.pending.delete`, `this.pending.get`, `this.reportFailure`.

Assignment or increment targets: `decoded`.

SHA-256 of the source span: `641a62123696addb3dd3f3621bb90b634992bae751fd0d1ff7900659cc2de11a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
