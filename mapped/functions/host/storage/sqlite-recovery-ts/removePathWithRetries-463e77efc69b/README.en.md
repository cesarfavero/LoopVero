# `removePathWithRetries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-recovery.ts` · [Module README](../../../../../modules/host/storage/sqlite-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717349-717366](../../../../../../reference/runtime/host-main.cjs#L717349-L717366) | `FunctionDeclaration` | no | `options2` |
| [state-worker:757-774](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L757-L774) | `FunctionDeclaration` | no | `options` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717349-717366](../../../../../../reference/runtime/host-main.cjs#L717349-L717366) | 3 | 1 | 0 | 0 | 1 | 1 |
| [state-worker:757-774](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L757-L774) | 3 | 1 | 0 | 0 | 1 | 1 |

### host:717349

Calls written directly in this body: `Atomics.wait`, `Math.max`, `new Int32Array`, `new SharedArrayBuffer`, `removeSandDataFileSync`, `removeSandDataTreeSync`.

Assignment or increment targets: `attempt`, `removeError`.

Explicit throw targets: `removeError`.

SHA-256 of the source span: `0ca95ddf7c1ab0c51fe1ed9e54d2b354b243cb22735bf0f671a4a9e904796f6a`.

### state-worker:757

Calls written directly in this body: `Atomics.wait`, `Math.max`, `new Int32Array`, `new SharedArrayBuffer`, `removeSandDataFileSync`, `removeSandDataTreeSync`.

Assignment or increment targets: `attempt`, `removeError`.

Explicit throw targets: `removeError`.

SHA-256 of the source span: `816986afdc3a2dcaef63aa7e858b11af109c76590c59b8f0c57ce525bc029ee8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
