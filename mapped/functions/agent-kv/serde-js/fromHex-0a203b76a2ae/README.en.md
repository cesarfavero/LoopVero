# `fromHex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/serde.js` · [Module README](../../../../modules/agent-kv/serde-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615918-615932](../../../../../reference/runtime/host-main.cjs#L615918-L615932) | `FunctionDeclaration` | no | `hex3` |
| [evaluation:284703-284717](../../../../../reference/runtime/sand-eval-runner.cjs#L284703-L284717) | `FunctionDeclaration` | no | `hex3` |
| [state-worker:21712-21726](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21712-L21726) | `FunctionDeclaration` | no | `hex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615918-615932](../../../../../reference/runtime/host-main.cjs#L615918-L615932) | 3 | 1 | 0 | 2 | 1 | 0 |
| [evaluation:284703-284717](../../../../../reference/runtime/sand-eval-runner.cjs#L284703-L284717) | 3 | 1 | 0 | 2 | 1 | 0 |
| [state-worker:21712-21726](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21712-L21726) | 3 | 1 | 0 | 2 | 1 | 0 |

### host:615918

Calls written directly in this body: `.toLowerCase`, `clean.slice`, `fromHexNative`, `hex3.trim`, `new Error`, `new Uint8Array`, `parseInt`.

Assignment or increment targets: `i`, `out[computed]`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `aa61e65c5975bc5e365874ba94d24cf57cba0eca8f6b44e01975e76e47f453e2`.

### evaluation:284703

Calls written directly in this body: `.toLowerCase`, `clean.slice`, `fromHexNative`, `hex3.trim`, `new Error`, `new Uint8Array`, `parseInt`.

Assignment or increment targets: `i`, `out[computed]`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `aa61e65c5975bc5e365874ba94d24cf57cba0eca8f6b44e01975e76e47f453e2`.

### state-worker:21712

Calls written directly in this body: `.toLowerCase`, `clean.slice`, `fromHexNative`, `hex.trim`, `new Error`, `new Uint8Array`, `parseInt`.

Assignment or increment targets: `i`, `out[computed]`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `037898c040337917f40849a91d458a6c727cffce957cb774fdf184531f70b7a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
