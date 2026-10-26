# `readOutputText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565885-565894](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565885-L565894) | `FunctionDeclaration` | no | `output2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565885-565894](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565885-L565894) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:565885

Calls written directly in this body: `.toString`, `Buffer.from`.

SHA-256 of the source span: `a6b8b07a46450be543ec3c118e281d536e28a8d1286b9d3c6dfb0ffd637f481e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
