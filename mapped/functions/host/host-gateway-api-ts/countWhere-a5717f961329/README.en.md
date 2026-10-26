# `countWhere`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491866-491870](../../../../../reference/runtime/host-main.cjs#L491866-L491870) | `FunctionDeclaration` | no | `entries, keep` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491866-491870](../../../../../reference/runtime/host-main.cjs#L491866-L491870) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:491866

Calls written directly in this body: `keep`.

Assignment or increment targets: `count2`.

SHA-256 of the source span: `36c2bf0eb16cc39181efb1ad9228abad0fc5c9053ad36910d8ab415e26cbd634`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
