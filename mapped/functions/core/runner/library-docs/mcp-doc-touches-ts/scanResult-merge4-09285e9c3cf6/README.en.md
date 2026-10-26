# `scanResult/merge4`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/library-docs/mcp-doc-touches.ts` · [Module README](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:574022-574026](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574022-L574026) | `ArrowFunctionExpression` | no | `part` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:574022-574026](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574022-L574026) | 1 | 1 | 0 | 0 | 0 | 0 |

### evaluation:574022

Calls written directly in this body: `scan2.looseTitles.push`, `scan2.refs.push`, `scan2.titles.has`, `scan2.titles.set`.

SHA-256 of the source span: `824f116d27c962137619b6c67180e92441b3e723510e19169bd47075b2cb26aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
