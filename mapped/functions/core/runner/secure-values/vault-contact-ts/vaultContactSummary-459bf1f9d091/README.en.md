# `vaultContactSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/vault-contact.ts` · [Module README](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724597-724600](../../../../../../../reference/runtime/host-main.cjs#L724597-L724600) | `FunctionDeclaration` | no | `contact` |
| [evaluation:550076-550079](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550076-L550079) | `FunctionDeclaration` | no | `contact` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724597-724600](../../../../../../../reference/runtime/host-main.cjs#L724597-L724600) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550076-550079](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550076-L550079) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724597

Calls written directly in this body: `.filter`, `.join`.

SHA-256 of the source span: `79208481c42975dd31e0a22cbd291afc7805827bb6f0bb3df31e6118e983f759`.

### evaluation:550076

Calls written directly in this body: `.filter`, `.join`.

SHA-256 of the source span: `79208481c42975dd31e0a22cbd291afc7805827bb6f0bb3df31e6118e983f759`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
