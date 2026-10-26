# `transcriptTargetParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/sand-read-transcript-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766308-766318](../../../../../../../reference/runtime/host-main.cjs#L766308-L766318) | `ArrowFunctionExpression` | no | `verb, subagentToolName, subagent` |
| [evaluation:559672-559682](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559672-L559682) | `ArrowFunctionExpression` | no | `verb, subagentToolName, subagent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766308-766318](../../../../../../../reference/runtime/host-main.cjs#L766308-L766318) | 3 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:766308 uses an implicit arrow-function return.
| [evaluation:559672-559682](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559672-L559682) | 3 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:559672 uses an implicit arrow-function return.

### host:766308

Calls written directly in this body: `optionalId`.

SHA-256 of the source span: `696b6c9c0e6ffe5d553621b99b0cd33b88535c986e4eb8239b51a4528e3d79ba`.

### evaluation:559672

Calls written directly in this body: `optionalId`.

SHA-256 of the source span: `696b6c9c0e6ffe5d553621b99b0cd33b88535c986e4eb8239b51a4528e3d79ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
