# `rewriteMcpSuccessText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/large-output-spill.ts` · [Module README](../../../../../modules/core/runner/large-output-spill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742933-742935](../../../../../../reference/runtime/host-main.cjs#L742933-L742935) | `FunctionDeclaration` | no | `success2, rewrite` |
| [evaluation:515705-515707](../../../../../../reference/runtime/sand-eval-runner.cjs#L515705-L515707) | `FunctionDeclaration` | no | `success2, rewrite` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742933-742935](../../../../../../reference/runtime/host-main.cjs#L742933-L742935) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515705-515707](../../../../../../reference/runtime/sand-eval-runner.cjs#L515705-L515707) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:742933

Calls written directly in this body: `rewriteMcpText`.

SHA-256 of the source span: `31d04c0e01cfc41d56a4d647327d67734a3f7f705acd40f18476e3375e37a3d5`.

### evaluation:515705

Calls written directly in this body: `rewriteMcpText`.

SHA-256 of the source span: `31d04c0e01cfc41d56a4d647327d67734a3f7f705acd40f18476e3375e37a3d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
