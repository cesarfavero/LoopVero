# `shipmentCardOfArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760842-760870](../../../../../../../reference/runtime/host-main.cjs#L760842-L760870) | `FunctionDeclaration` | no | `rawArgs, deps` |
| [evaluation:551657-551685](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551657-L551685) | `FunctionDeclaration` | no | `rawArgs, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760842-760870](../../../../../../../reference/runtime/host-main.cjs#L760842-L760870) | 6 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:551657-551685](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551657-L551685) | 6 | 0 | 0 | 2 | 2 | 0 |

### host:760842

Calls written directly in this body: `Date.now`, `deps.renderCards.shipmentOffered`, `new SandToolInputError`, `read2.errors.join`, `readShipmentCard`, `registrableDomainOf`, `shipmentFallbackText`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `7c0f0359ff82f4d966c85249fe0fb640d17fa526193ca9e0c942a63c15faef55`.

### evaluation:551657

Calls written directly in this body: `Date.now`, `deps.renderCards.shipmentOffered`, `new SandToolInputError`, `read2.errors.join`, `readShipmentCard`, `registrableDomainOf`, `shipmentFallbackText`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `7c0f0359ff82f4d966c85249fe0fb640d17fa526193ca9e0c942a63c15faef55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
