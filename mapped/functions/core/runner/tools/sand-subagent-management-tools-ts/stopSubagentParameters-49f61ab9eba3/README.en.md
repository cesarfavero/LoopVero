# `stopSubagentParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780914-780923](../../../../../../../reference/runtime/host-main.cjs#L780914-L780923) | `ArrowFunctionExpression` | no | `toolName` |
| [evaluation:581261-581270](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581261-L581270) | `ArrowFunctionExpression` | no | `toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780914-780923](../../../../../../../reference/runtime/host-main.cjs#L780914-L780923) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:780914 uses an implicit arrow-function return.
| [evaluation:581261-581270](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581261-L581270) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581261 uses an implicit arrow-function return.

### host:780914

Calls written directly in this body: `.describe`, `.optional`, `.refine`, `.trim`, `external_exports2.boolean`, `external_exports2.object`, `external_exports2.string`.

SHA-256 of the source span: `3c1d5082934acbdd60cd50c794923faad82adfa169c379998c460015ee3c4acf`.

### evaluation:581261

Calls written directly in this body: `.describe`, `.optional`, `.refine`, `.trim`, `external_exports3.boolean`, `external_exports3.object`, `external_exports3.string`.

SHA-256 of the source span: `c7f0715dba35b8a2a818c7fd8ee7b6050f8caddd95287a60f64415ef2c0e1d23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
