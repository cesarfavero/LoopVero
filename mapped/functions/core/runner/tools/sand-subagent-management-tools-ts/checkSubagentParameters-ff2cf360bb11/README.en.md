# `checkSubagentParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780901-780905](../../../../../../../reference/runtime/host-main.cjs#L780901-L780905) | `ArrowFunctionExpression` | no | `toolName` |
| [evaluation:581248-581252](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581248-L581252) | `ArrowFunctionExpression` | no | `toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780901-780905](../../../../../../../reference/runtime/host-main.cjs#L780901-L780905) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:780901 uses an implicit arrow-function return.
| [evaluation:581248-581252](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581248-L581252) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581248 uses an implicit arrow-function return.

### host:780901

Calls written directly in this body: `.describe`, `.optional`, `.trim`, `external_exports2.object`, `external_exports2.string`.

SHA-256 of the source span: `209acb4ffc037fdd10be8b2d872b5b72302c4fc312cc1cd8f480ba913f510774`.

### evaluation:581248

Calls written directly in this body: `.describe`, `.optional`, `.trim`, `external_exports3.object`, `external_exports3.string`.

SHA-256 of the source span: `961fbec8c68cd31c0aace90acd6407f25f58b9edb7fa327f7bef2965f2b4d7ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
