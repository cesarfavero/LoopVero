# `unquoteYamlSingleQuoted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767607-767609](../../../../../../../../reference/runtime/host-main.cjs#L767607-L767609) | `FunctionDeclaration` | no | `key` |
| [evaluation:563124-563126](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563124-L563126) | `FunctionDeclaration` | no | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767607-767609](../../../../../../../../reference/runtime/host-main.cjs#L767607-L767609) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563124-563126](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563124-L563126) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:767607

Calls written directly in this body: `key.replaceAll`.

SHA-256 of the source span: `c9385cd023852a5b1a723216cd88f4df3b851f13e6e66711f18d016bbe0f5d8c`.

### evaluation:563124

Calls written directly in this body: `key.replaceAll`.

SHA-256 of the source span: `c9385cd023852a5b1a723216cd88f4df3b851f13e6e66711f18d016bbe0f5d8c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
