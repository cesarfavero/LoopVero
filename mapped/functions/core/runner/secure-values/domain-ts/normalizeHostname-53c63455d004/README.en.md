# `normalizeHostname`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/domain.ts` · [Module README](../../../../../../modules/core/runner/secure-values/domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758036-758038](../../../../../../../reference/runtime/host-main.cjs#L758036-L758038) | `FunctionDeclaration` | no | `hostname4` |
| [evaluation:546227-546229](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546227-L546229) | `FunctionDeclaration` | no | `hostname3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758036-758038](../../../../../../../reference/runtime/host-main.cjs#L758036-L758038) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546227-546229](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546227-L546229) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:758036

Calls written directly in this body: `.replace`, `hostname4.toLowerCase`.

SHA-256 of the source span: `9aa4d6ea170d631384d06befc3f0e677c22d2ff1ee3c3e50a24b6f3351bf9bec`.

### evaluation:546227

Calls written directly in this body: `.replace`, `hostname3.toLowerCase`.

SHA-256 of the source span: `595857b6b5e3a6a86f9658211dca29cc65a1c8844e82c3f5a96a3d77ad27ee6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
