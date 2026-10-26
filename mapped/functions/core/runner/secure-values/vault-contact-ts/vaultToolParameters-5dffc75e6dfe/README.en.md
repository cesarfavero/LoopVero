# `vaultToolParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/vault-contact.ts` · [Module README](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724637-724646](../../../../../../../reference/runtime/host-main.cjs#L724637-L724646) | `FunctionDeclaration` | no | `cards` |
| [evaluation:550116-550125](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550116-L550125) | `FunctionDeclaration` | no | `cards` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724637-724646](../../../../../../../reference/runtime/host-main.cjs#L724637-L724646) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550116-550125](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550116-L550125) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:724637

Calls written directly in this body: `.describe`, `.min`, `.optional`, `.strict`, `.trim`, `contactParameter.optional`, `external_exports2.enum`, `external_exports2.object`, `external_exports2.string`.

SHA-256 of the source span: `86adf04e008403941ea4b2b9f25eecd497ae874655793fab3d04676bb3e0f55f`.

### evaluation:550116

Calls written directly in this body: `.describe`, `.min`, `.optional`, `.strict`, `.trim`, `contactParameter.optional`, `external_exports3.enum`, `external_exports3.object`, `external_exports3.string`.

SHA-256 of the source span: `39ba163e25ebba4002b2c401b525378d6f465dd323fe011db3779dc2f112c2cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
