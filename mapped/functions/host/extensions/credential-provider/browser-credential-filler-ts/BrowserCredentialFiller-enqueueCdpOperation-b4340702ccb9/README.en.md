# `BrowserCredentialFiller.enqueueCdpOperation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547790-547806](../../../../../../../reference/runtime/host-main.cjs#L547790-L547806) | `method` | yes | `target, operation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547790-547806](../../../../../../../reference/runtime/host-main.cjs#L547790-L547806) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:547790

Calls written directly in this body: `JSON.stringify`, `entry.queue.enqueue`, `new PromiseQueue`, `this.cdpOperations.delete`, `this.cdpOperations.get`, `this.cdpOperations.set`.

Assignment or increment targets: `entry`, `entry.pending`.

SHA-256 of the source span: `fe748783b5d59993addb7837f7065e471f36d924c9636ccaf6645c3cddf773a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
