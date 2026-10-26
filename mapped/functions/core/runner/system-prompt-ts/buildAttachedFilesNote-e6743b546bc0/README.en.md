# `buildAttachedFilesNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532443-532476](../../../../../../reference/runtime/sand-eval-runner.cjs#L532443-L532476) | `FunctionDeclaration` | no | `{   entries,   sizeByPath = /* @__PURE__ */ new Map(),   onAgentBox = false,   inAgentStore = /* @__PURE__ */ new Set(),   subagentToolName = "Task" }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532443-532476](../../../../../../reference/runtime/sand-eval-runner.cjs#L532443-L532476) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:532443

Calls written directly in this body: `.join`, `cleaned.flatMap`, `cleaned.map`, `entries.flatMap`, `storeAttachmentsWhere`.

SHA-256 of the source span: `6b16664e13d020c05b298c53b64ceb4bf304ad8856bd6a928758531e117da181`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
