# `boxPathOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/cloud-agent-artifact-citation.ts` · [Module README](../../../../../modules/shared/agents/cloud-agent-artifact-citation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508139-508146](../../../../../../reference/runtime/host-main.cjs#L508139-L508146) | `FunctionDeclaration` | no | `source` |
| [evaluation:490251-490258](../../../../../../reference/runtime/sand-eval-runner.cjs#L490251-L490258) | `FunctionDeclaration` | no | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508139-508146](../../../../../../reference/runtime/host-main.cjs#L508139-L508146) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:490251-490258](../../../../../../reference/runtime/sand-eval-runner.cjs#L490251-L490258) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:508139

Calls written directly in this body: `/^file:/i.test`, `URL.canParse`, `new URL`, `source.trim`, `trimmed.startsWith`.

SHA-256 of the source span: `ce6ddfd72ecb8e3afd9b9d4f709ea53908b8b1c68c2c9d8068392a2fdab13b28`.

### evaluation:490251

Calls written directly in this body: `/^file:/i.test`, `URL.canParse`, `new URL`, `source.trim`, `trimmed.startsWith`.

SHA-256 of the source span: `ce6ddfd72ecb8e3afd9b9d4f709ea53908b8b1c68c2c9d8068392a2fdab13b28`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
