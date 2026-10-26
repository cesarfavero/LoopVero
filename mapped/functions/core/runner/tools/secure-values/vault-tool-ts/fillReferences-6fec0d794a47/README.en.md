# `fillReferences`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767898-767900](../../../../../../../../reference/runtime/host-main.cjs#L767898-L767900) | `FunctionDeclaration` | no | `names3` |
| [evaluation:563414-563416](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563414-L563416) | `FunctionDeclaration` | no | `names3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767898-767900](../../../../../../../../reference/runtime/host-main.cjs#L767898-L767900) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563414-563416](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563414-L563416) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:767898

Calls written directly in this body: `names3.join`.

SHA-256 of the source span: `11f67ff820e8c067b318ccb4b9ba40e7271463770964192a8fd1ab949f21839e`.

### evaluation:563414

Calls written directly in this body: `names3.join`.

SHA-256 of the source span: `11f67ff820e8c067b318ccb4b9ba40e7271463770964192a8fd1ab949f21839e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
