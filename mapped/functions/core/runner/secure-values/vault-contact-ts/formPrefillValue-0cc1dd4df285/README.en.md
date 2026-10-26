# `formPrefillValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/vault-contact.ts` · [Module README](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724531-724539](../../../../../../../reference/runtime/host-main.cjs#L724531-L724539) | `FunctionDeclaration` | no | `id, raw` |
| [evaluation:550010-550018](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550010-L550018) | `FunctionDeclaration` | no | `id, raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724531-724539](../../../../../../../reference/runtime/host-main.cjs#L724531-L724539) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:550010-550018](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550010-L550018) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:724531

Calls written directly in this body: `.slice`, `canonicalVaultCountryCode`, `isVaultCountryCode`, `raw.trim`.

SHA-256 of the source span: `909e407d360adbea206446fa657200a3538c5785866e8da842d56d3ca7b31e7b`.

### evaluation:550010

Calls written directly in this body: `.slice`, `canonicalVaultCountryCode`, `isVaultCountryCode`, `raw.trim`.

SHA-256 of the source span: `909e407d360adbea206446fa657200a3538c5785866e8da842d56d3ca7b31e7b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
