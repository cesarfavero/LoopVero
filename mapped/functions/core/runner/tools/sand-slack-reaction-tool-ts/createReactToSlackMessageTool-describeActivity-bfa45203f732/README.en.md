# `createReactToSlackMessageTool/describeActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-slack-reaction-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-slack-reaction-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768213-768213](../../../../../../../reference/runtime/host-main.cjs#L768213-L768213) | `ArrowFunctionExpression` | no | `args` |
| [evaluation:563729-563729](../../../../../../../reference/runtime/sand-eval-runner.cjs#L563729-L563729) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768213-768213](../../../../../../../reference/runtime/host-main.cjs#L768213-L768213) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:768213 uses an implicit arrow-function return.
| [evaluation:563729-563729](../../../../../../../reference/runtime/sand-eval-runner.cjs#L563729-L563729) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:563729 uses an implicit arrow-function return.

### host:768213

Calls written directly in this body: `args.channel.trim`, `args.emoji.trim`.

SHA-256 of the source span: `1a95a240b5dcddaf152852e0f9e5ca6b5df0f0384ea0c7cae35bb36afdab40aa`.

### evaluation:563729

Calls written directly in this body: `args.channel.trim`, `args.emoji.trim`.

SHA-256 of the source span: `1a95a240b5dcddaf152852e0f9e5ca6b5df0f0384ea0c7cae35bb36afdab40aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
