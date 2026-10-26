# `createSlackThreadTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/slack/slack-thread-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/slack/slack-thread-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768257-768264](../../../../../../../../reference/runtime/host-main.cjs#L768257-L768264) | `FunctionDeclaration` | no | `host` |
| [evaluation:563773-563780](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563773-L563780) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768257-768264](../../../../../../../../reference/runtime/host-main.cjs#L768257-L768264) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563773-563780](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563773-L563780) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:768257

Calls written directly in this body: `createDeleteOwnSlackMessageTool`, `createSetSlackStatusTool`, `tools.push`.

SHA-256 of the source span: `1f1c88606a4ee84664c7edd153182c6432abe97081efa9e289a9fe52d79a5d6e`.

### evaluation:563773

Calls written directly in this body: `createDeleteOwnSlackMessageTool`, `createSetSlackStatusTool`, `tools.push`.

SHA-256 of the source span: `1f1c88606a4ee84664c7edd153182c6432abe97081efa9e289a9fe52d79a5d6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
