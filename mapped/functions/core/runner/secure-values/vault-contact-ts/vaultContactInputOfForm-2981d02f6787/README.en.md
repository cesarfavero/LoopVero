# `vaultContactInputOfForm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/vault-contact.ts` · [Module README](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724546-724558](../../../../../../../reference/runtime/host-main.cjs#L724546-L724558) | `FunctionDeclaration` | no | `values` |
| [evaluation:550025-550037](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550025-L550037) | `FunctionDeclaration` | no | `values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724546-724558](../../../../../../../reference/runtime/host-main.cjs#L724546-L724558) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:550025-550037](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550025-L550037) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:724546

Calls written directly in this body: `Object.entries`.

Assignment or increment targets: `address[computed]`.

SHA-256 of the source span: `bb69773d64dfda1d1d7c15258cbc15c73d059300fb602ffb61df4b33895e5ce9`.

### evaluation:550025

Calls written directly in this body: `Object.entries`.

Assignment or increment targets: `address[computed]`.

SHA-256 of the source span: `bb69773d64dfda1d1d7c15258cbc15c73d059300fb602ffb61df4b33895e5ce9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
