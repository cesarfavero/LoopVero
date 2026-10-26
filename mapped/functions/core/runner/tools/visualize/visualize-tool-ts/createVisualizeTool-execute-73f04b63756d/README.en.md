# `createVisualizeTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/visualize/visualize-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/visualize/visualize-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768570-768623](../../../../../../../../reference/runtime/host-main.cjs#L768570-L768623) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:564085-564138](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564085-L564138) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768570-768623](../../../../../../../../reference/runtime/host-main.cjs#L768570-L768623) | 17 | 0 | 3 | 3 | 6 | 0 |
| [evaluation:564085-564138](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564085-L564138) | 17 | 0 | 3 | 3 | 6 | 0 |

### host:768570

Calls written directly in this body: `Date.now`, `d.emit`, `d.pages`, `d.revisions`, `d.sendBlockReason`, `describeChannelAddressProblem`, `fragmentProblem`, `new SandToolInputError`, `new SandVisualizationUnavailableError`, `pages.save`, `readFragment`, `revisions.revise`, `visualIdOf`.

Explicit throw targets: `SandToolInputError`, `SandVisualizationUnavailableError`.

SHA-256 of the source span: `eed9dfb27090244fafafce9c7b4493d2edb04430f2752160bc252e614a36ac1b`.

### evaluation:564085

Calls written directly in this body: `Date.now`, `d.emit`, `d.pages`, `d.revisions`, `d.sendBlockReason`, `describeChannelAddressProblem`, `fragmentProblem`, `new SandToolInputError`, `new SandVisualizationUnavailableError`, `pages.save`, `readFragment`, `revisions.revise`, `visualIdOf`.

Explicit throw targets: `SandToolInputError`, `SandVisualizationUnavailableError`.

SHA-256 of the source span: `22256fb08ea7ea692d14add11f73c49708fa028f42db29bf7a8e95002734de9d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
