# `savedContact`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768023-768038](../../../../../../../../reference/runtime/host-main.cjs#L768023-L768038) | `FunctionDeclaration` | yes | `deps, id` |
| [evaluation:563539-563554](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563539-L563554) | `FunctionDeclaration` | yes | `deps, id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768023-768038](../../../../../../../../reference/runtime/host-main.cjs#L768023-L768038) | 3 | 0 | 2 | 1 | 3 | 0 |
| [evaluation:563539-563554](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563539-L563554) | 3 | 0 | 2 | 1 | 3 | 0 |

### host:768023

Calls written directly in this body: `.includes`, `JSON.stringify`, `all.find`, `chatValueNames`, `deps.secureValues.listSavedContacts`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `a040a0be7beffafb7bc7d6f672dfc17799501ddfa6d1f536929f62e1d0899962`.

### evaluation:563539

Calls written directly in this body: `.includes`, `JSON.stringify`, `all.find`, `chatValueNames`, `deps.secureValues.listSavedContacts`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `a040a0be7beffafb7bc7d6f672dfc17799501ddfa6d1f536929f62e1d0899962`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
