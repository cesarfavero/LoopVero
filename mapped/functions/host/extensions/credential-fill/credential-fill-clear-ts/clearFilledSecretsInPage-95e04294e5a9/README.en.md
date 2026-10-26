# `clearFilledSecretsInPage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-clear.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-clear-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543168-543247](../../../../../../../reference/runtime/host-main.cjs#L543168-L543247) | `FunctionDeclaration` | yes | `secrets, settle3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543168-543247](../../../../../../../reference/runtime/host-main.cjs#L543168-L543247) | 1 | 0 | 6 | 2 | 0 | 0 |

### host:543168

Calls written directly in this body: `Object.getOwnPropertyDescriptor`, `clearMatching`, `new Set`, `residue`, `settle3`.

SHA-256 of the source span: `cdead4c8a4d6daaf11a750061c805f56214dbc38c396cd314a2976252a96e94a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
