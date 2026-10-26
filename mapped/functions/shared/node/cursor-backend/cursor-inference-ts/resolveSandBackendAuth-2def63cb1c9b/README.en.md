# `resolveSandBackendAuth`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225005-225024](../../../../../../../reference/runtime/host-main.cjs#L225005-L225024) | `FunctionDeclaration` | yes | `options2, backendUrl` |
| [evaluation:512068-512087](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512068-L512087) | `FunctionDeclaration` | yes | `options2, backendUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225005-225024](../../../../../../../reference/runtime/host-main.cjs#L225005-L225024) | 3 | 0 | 4 | 4 | 0 | 0 |
| [evaluation:512068-512087](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512068-L512087) | 3 | 0 | 4 | 4 | 0 | 0 |

### host:225005

Calls written directly in this body: `options2.getAccessToken`, `resolveSandBackendAuthContext`.

SHA-256 of the source span: `a3f3ab5ffb48c786eb8ab4f8d26adf806e49109bf22bf11e77e17c5be6abc642`.

### evaluation:512068

Calls written directly in this body: `options2.getAccessToken`, `resolveSandBackendAuthContext`.

SHA-256 of the source span: `a3f3ab5ffb48c786eb8ab4f8d26adf806e49109bf22bf11e77e17c5be6abc642`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
