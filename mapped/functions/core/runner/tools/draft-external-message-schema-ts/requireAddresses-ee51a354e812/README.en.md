# `requireAddresses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755065-755073](../../../../../../../reference/runtime/host-main.cjs#L755065-L755073) | `FunctionDeclaration` | no | `ctx, field, values` |
| [evaluation:539690-539698](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539690-L539698) | `FunctionDeclaration` | no | `ctx, field, values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755065-755073](../../../../../../../reference/runtime/host-main.cjs#L755065-L755073) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539690-539698](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539690-L539698) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755065

Calls written directly in this body: `ctx.addIssue`, `invalid2.join`, `values.filter`.

SHA-256 of the source span: `047f48f02eae31079e9291fbe7fedb5e4ac33f4715f2595f84e73e28d125d2a4`.

### evaluation:539690

Calls written directly in this body: `ctx.addIssue`, `invalid2.join`, `values.filter`.

SHA-256 of the source span: `2f8cf4e6cebb89a5203d5bf9a8c069de4e47de3d37062988d1ca714f20643b9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
