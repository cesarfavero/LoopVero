# `scanJson/visit3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/library-docs/mcp-doc-touches.ts` · [Module README](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:573978-574006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573978-L574006) | `ArrowFunctionExpression` | no | `value, depth, role` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573978-574006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573978-L574006) | 12 | 4 | 0 | 3 | 0 | 0 |

### evaluation:573978

Calls written directly in this body: `Array.isArray`, `Object.entries`, `PARENT_KEY_RE.test`, `URL_KEY_RE.test`, `childRole`, `isDocumentShaped`, `jsonObjectOf2`, `keyedStrings`, `own3.push`, `resolver.id`, `resolver.url`, `scan2.looseTitles.push`, `scan2.refs.push`, `scan2.titles.has`, `scan2.titles.set`, `titleOfObject`, `visit3`.

Assignment or increment targets: `nodes`.

SHA-256 of the source span: `4019ca81d723434d0c97688b2e7903068e63984833f71812d083cdab3becc705`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
