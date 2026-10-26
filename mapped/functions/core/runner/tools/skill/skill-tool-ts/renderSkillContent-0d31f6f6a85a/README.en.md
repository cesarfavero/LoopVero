# `renderSkillContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565840-565850](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565840-L565850) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565840-565850](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565840-L565850) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:565840

Calls written directly in this body: `.join`, `args.body.trim`, `escapeXml`, `skillDirectoryLines`.

SHA-256 of the source span: `811fbf1625ba04d695d220af7269ec1a8ca03fad04e811097248a3d66d26f784`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
