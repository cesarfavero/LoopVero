# `messageSubagentParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780906-780913](../../../../../../../reference/runtime/host-main.cjs#L780906-L780913) | `ArrowFunctionExpression` | no | `toolName` |
| [evaluation:581253-581260](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581253-L581260) | `ArrowFunctionExpression` | no | `toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780906-780913](../../../../../../../reference/runtime/host-main.cjs#L780906-L780913) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:780906 uses an implicit arrow-function return.
| [evaluation:581253-581260](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581253-L581260) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581253 uses an implicit arrow-function return.

### host:780906

Calls written directly in this body: `.describe`, `.min`, `.trim`, `external_exports2.object`, `external_exports2.string`.

SHA-256 of the source span: `e9311cd8c9a029ff1ce8993c9f00fe9c0d8c89d87f7cb84f38a3b5dbc5361096`.

### evaluation:581253

Calls written directly in this body: `.describe`, `.min`, `.trim`, `external_exports3.object`, `external_exports3.string`.

SHA-256 of the source span: `79b682bb2ad2fb331489f61534fab570d672859ef463c18402111bdd86215ed2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
