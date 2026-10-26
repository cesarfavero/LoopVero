# `skillActivationSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/action-audit/skill-activation-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/skill-activation-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534906-534918](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534906-L534918) | `FunctionDeclaration` | no | `options2, catalog` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534906-534918](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534906-L534918) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:534906

Calls written directly in this body: `catalog.find`, `catalogSource`, `collapsedModelVisiblePath`, `import_node_path29.posix.isAbsolute`, `sourceFromDataRootTree`.

SHA-256 of the source span: `64ab802ee7f1556710db9ddee57298f63e841c62880e5d0e353f1cb9d17afe5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
