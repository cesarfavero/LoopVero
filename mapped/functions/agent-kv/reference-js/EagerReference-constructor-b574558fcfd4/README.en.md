# `EagerReference.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/reference.js` · [Module README](../../../../modules/agent-kv/reference-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616603-616608](../../../../../reference/runtime/host-main.cjs#L616603-L616608) | `method` | no | `serde, blobStore, value` |
| [evaluation:285143-285148](../../../../../reference/runtime/sand-eval-runner.cjs#L285143-L285148) | `method` | no | `serde, blobStore, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616603-616608](../../../../../reference/runtime/host-main.cjs#L616603-L616608) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:285143-285148](../../../../../reference/runtime/sand-eval-runner.cjs#L285143-L285148) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:616603

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.blobStore`, `this.lastWrittenValue`, `this.serde`, `this.value`.

SHA-256 of the source span: `30e2e0e96b7cecc2879e6c5d5b73035303de1c4663e55ffd066e9bb293282332`.

### evaluation:285143

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.blobStore`, `this.lastWrittenValue`, `this.serde`, `this.value`.

SHA-256 of the source span: `30e2e0e96b7cecc2879e6c5d5b73035303de1c4663e55ffd066e9bb293282332`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
