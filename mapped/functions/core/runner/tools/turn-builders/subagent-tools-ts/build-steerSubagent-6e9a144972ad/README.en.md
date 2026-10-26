# `build/steerSubagent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/turn-builders/subagent-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781159-781159](../../../../../../../../reference/runtime/host-main.cjs#L781159-L781159) | `ArrowFunctionExpression` | no | `subagentAgentId, message` |
| [host:781165-781165](../../../../../../../../reference/runtime/host-main.cjs#L781165-L781165) | `ArrowFunctionExpression` | no | `subagentAgentId, message` |
| [evaluation:581506-581506](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581506-L581506) | `ArrowFunctionExpression` | no | `subagentAgentId, message` |
| [evaluation:581512-581512](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581512-L581512) | `ArrowFunctionExpression` | no | `subagentAgentId, message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781159-781159](../../../../../../../../reference/runtime/host-main.cjs#L781159-L781159) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781159 uses an implicit arrow-function return.
| [host:781165-781165](../../../../../../../../reference/runtime/host-main.cjs#L781165-L781165) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781165 uses an implicit arrow-function return.
| [evaluation:581506-581506](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581506-L581506) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581506 uses an implicit arrow-function return.
| [evaluation:581512-581512](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581512-L581512) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581512 uses an implicit arrow-function return.

### host:781159

Calls written directly in this body: `detached.steer`.

SHA-256 of the source span: `f21e3055dc4b55ac37a5044eb356ddcdca51b2d9a685196fa8c25c96461072f2`.

### host:781165

Calls written directly in this body: `host.steerSubagent`.

SHA-256 of the source span: `9bb065fdae69afe00d0f56d1b6ba971f6696076f5b343ca9996583e8219edc1c`.

### evaluation:581506

Calls written directly in this body: `detached.steer`.

SHA-256 of the source span: `f21e3055dc4b55ac37a5044eb356ddcdca51b2d9a685196fa8c25c96461072f2`.

### evaluation:581512

Calls written directly in this body: `host.steerSubagent`.

SHA-256 of the source span: `9bb065fdae69afe00d0f56d1b6ba971f6696076f5b343ca9996583e8219edc1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
