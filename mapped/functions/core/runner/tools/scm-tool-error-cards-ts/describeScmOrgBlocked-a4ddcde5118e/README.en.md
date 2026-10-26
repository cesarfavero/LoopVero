# `describeScmOrgBlocked`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-tool-error-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-tool-error-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585857-585863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585857-L585863) | `FunctionDeclaration` | no | `error63, provider, blockedAction` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585857-585863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585857-L585863) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585857

Calls written directly in this body: `error63.repo.split`, `scmProviderDisplayName`.

SHA-256 of the source span: `4fd6de48aadbdda15553b0727ea5da506328702d38a5577bccb7dcd78208058c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
