# `selectUserDeliveryTail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/delivery-tail.js` · [Module README](../../../../modules/agent-summarization/delivery-tail-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621893-621934](../../../../../reference/runtime/host-main.cjs#L621893-L621934) | `FunctionDeclaration` | no | `messages2, options2` |
| [evaluation:306247-306288](../../../../../reference/runtime/sand-eval-runner.cjs#L306247-L306288) | `FunctionDeclaration` | no | `messages, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621893-621934](../../../../../reference/runtime/host-main.cjs#L621893-L621934) | 6 | 3 | 0 | 2 | 0 | 0 |
| [evaluation:306247-306288](../../../../../reference/runtime/sand-eval-runner.cjs#L306247-L306288) | 6 | 3 | 0 | 2 | 0 | 0 |

### host:621893

Calls written directly in this body: `Array.isArray`, `answeredDeliveryCalls.slice`, `keptCalls.map`, `message.content.filter`, `new Map`, `results.map`, `resultsByCallId.has`, `resultsByCallId.set`, `selected.unshift`.

Assignment or increment targets: `i`, `remaining`.

SHA-256 of the source span: `b29ce67f4b0ed9b1c9837e75f06f23bcaeb718a4a2cc44cbdd6425e69c4ec004`.

### evaluation:306247

Calls written directly in this body: `Array.isArray`, `answeredDeliveryCalls.slice`, `keptCalls.map`, `message.content.filter`, `new Map`, `results.map`, `resultsByCallId.has`, `resultsByCallId.set`, `selected.unshift`.

Assignment or increment targets: `i`, `remaining`.

SHA-256 of the source span: `dc0ee2c439c5f4e827452095503dd1b8d4352eca43b649da7340bfc0328694db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
