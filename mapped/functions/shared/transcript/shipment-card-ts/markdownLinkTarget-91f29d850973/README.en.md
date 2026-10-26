# `markdownLinkTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707200-707205](../../../../../../reference/runtime/host-main.cjs#L707200-L707205) | `FunctionDeclaration` | no | `url2` |
| [evaluation:481323-481328](../../../../../../reference/runtime/sand-eval-runner.cjs#L481323-L481328) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707200-707205](../../../../../../reference/runtime/host-main.cjs#L707200-L707205) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481323-481328](../../../../../../reference/runtime/sand-eval-runner.cjs#L481323-L481328) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707200

Calls written directly in this body: `url2.replace`.

SHA-256 of the source span: `0b81ebe1e1068d3d88d2ec4aded0380611224a4f7c3e0072ba8681b8778a5897`.

### evaluation:481323

Calls written directly in this body: `url2.replace`.

SHA-256 of the source span: `0b81ebe1e1068d3d88d2ec4aded0380611224a4f7c3e0072ba8681b8778a5897`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
