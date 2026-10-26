# `cloudAgentParametersFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567911-567946](../../../../../../reference/runtime/sand-eval-runner.cjs#L567911-L567946) | `FunctionDeclaration` | no | `enabled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567911-567946](../../../../../../reference/runtime/sand-eval-runner.cjs#L567911-L567946) | 9 | 0 | 0 | 2 | 0 | 0 |

### evaluation:567911

Calls written directly in this body: `.describe`, `.omit`, `.optional`, `.transform`, `.trim`, `base.extend`, `cloudAgentActionDescription`, `cloudAgentActionFor`, `cloudAgentAgentIdDescription`, `cloudAgentConfirmDescription`, `cloudAgentParameters.innerType`, `external_exports3.boolean`, `external_exports3.enum`, `external_exports3.preprocess`, `external_exports3.string`, `hostSpecific.superRefine`, `withReplyModes.extend`.

SHA-256 of the source span: `58c9c5e5676698b9eb5761a44da19a476128e262e6d06ceaf68594432efe9fd1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
