# `build/abortSubagent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/turn-builders/subagent-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781160-781160](../../../../../../../../reference/runtime/host-main.cjs#L781160-L781160) | `ArrowFunctionExpression` | no | `subagentAgentId` |
| [host:781166-781166](../../../../../../../../reference/runtime/host-main.cjs#L781166-L781166) | `ArrowFunctionExpression` | no | `subagentAgentId` |
| [evaluation:581507-581507](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581507-L581507) | `ArrowFunctionExpression` | no | `subagentAgentId` |
| [evaluation:581513-581513](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581513-L581513) | `ArrowFunctionExpression` | no | `subagentAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781160-781160](../../../../../../../../reference/runtime/host-main.cjs#L781160-L781160) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781160 uses an implicit arrow-function return.
| [host:781166-781166](../../../../../../../../reference/runtime/host-main.cjs#L781166-L781166) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781166 uses an implicit arrow-function return.
| [evaluation:581507-581507](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581507-L581507) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581507 uses an implicit arrow-function return.
| [evaluation:581513-581513](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581513-L581513) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581513 uses an implicit arrow-function return.

### host:781160

Calls written directly in this body: `detached.abort`.

SHA-256 of the source span: `d5a0dd909fd5eba7d8670c1a2a66801543d7b9e5a9effea3b5e77c03f2222d5c`.

### host:781166

Calls written directly in this body: `host.abortSubagent`.

SHA-256 of the source span: `63dfef79aa8163b6309a7235d9efb05d3792175bca18b130019f534fb4689f0e`.

### evaluation:581507

Calls written directly in this body: `detached.abort`.

SHA-256 of the source span: `d5a0dd909fd5eba7d8670c1a2a66801543d7b9e5a9effea3b5e77c03f2222d5c`.

### evaluation:581513

Calls written directly in this body: `host.abortSubagent`.

SHA-256 of the source span: `63dfef79aa8163b6309a7235d9efb05d3792175bca18b130019f534fb4689f0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
