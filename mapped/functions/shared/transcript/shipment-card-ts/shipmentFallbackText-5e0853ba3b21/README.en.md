# `shipmentFallbackText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707224-707237](../../../../../../reference/runtime/host-main.cjs#L707224-L707237) | `FunctionDeclaration` | no | `card` |
| [evaluation:481347-481360](../../../../../../reference/runtime/sand-eval-runner.cjs#L481347-L481360) | `FunctionDeclaration` | no | `card` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707224-707237](../../../../../../reference/runtime/host-main.cjs#L707224-L707237) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481347-481360](../../../../../../reference/runtime/sand-eval-runner.cjs#L481347-L481360) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:707224

Calls written directly in this body: `.join`, `.map`, `card.items.slice`, `deliveryText`, `escapeCardMarkdown`, `shown.join`, `trackingLink`.

SHA-256 of the source span: `7b0a832c3d198cb8ec0904cdd35be7056e5349c90c5e2fa1870dbd30452e32db`.

### evaluation:481347

Calls written directly in this body: `.join`, `.map`, `card.items.slice`, `deliveryText`, `escapeCardMarkdown`, `shown.join`, `trackingLink`.

SHA-256 of the source span: `7b0a832c3d198cb8ec0904cdd35be7056e5349c90c5e2fa1870dbd30452e32db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
