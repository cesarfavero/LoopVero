# `renderSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-agent-activity-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-agent-activity-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765403-765427](../../../../../../../reference/runtime/host-main.cjs#L765403-L765427) | `FunctionDeclaration` | no | `summary, nowMs2` |
| [evaluation:558770-558794](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558770-L558794) | `FunctionDeclaration` | no | `summary, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765403-765427](../../../../../../../reference/runtime/host-main.cjs#L765403-L765427) | 6 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:558770-558794](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558770-L558794) | 6 | 2 | 0 | 1 | 0 | 0 |

### host:765403

Calls written directly in this body: `formatAgentActivityAge`, `lines2.join`, `lines2.push`, `summary.description.trim`.

SHA-256 of the source span: `a36ec9f2c61298d68f4436f9a03cb2dad9b36663d7afe2ec3d9cac1695bb722e`.

### evaluation:558770

Calls written directly in this body: `formatAgentActivityAge`, `lines2.join`, `lines2.push`, `summary.description.trim`.

SHA-256 of the source span: `28df0e9bd67a2c95cfa485a8aa681edabc49b5504d824d9d2a6da3cd85c0da8c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
