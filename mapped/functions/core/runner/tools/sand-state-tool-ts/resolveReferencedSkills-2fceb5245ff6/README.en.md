# `resolveReferencedSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762712-762720](../../../../../../../reference/runtime/host-main.cjs#L762712-L762720) | `FunctionDeclaration` | no | `prompt, deps` |
| [evaluation:555322-555330](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555322-L555330) | `FunctionDeclaration` | no | `prompt, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762712-762720](../../../../../../../reference/runtime/host-main.cjs#L762712-L762720) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:555322-555330](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555322-L555330) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:762712

Calls written directly in this body: `.map`, `collectMentionedSkills`, `deps.skillStore.list`.

SHA-256 of the source span: `d7fa6316d712b015e880883c0aa80e8fc7695d7d038d3f5e0ecf533205700b3c`.

### evaluation:555322

Calls written directly in this body: `.map`, `collectMentionedSkills`, `deps.skillStore.list`.

SHA-256 of the source span: `d7fa6316d712b015e880883c0aa80e8fc7695d7d038d3f5e0ecf533205700b3c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
