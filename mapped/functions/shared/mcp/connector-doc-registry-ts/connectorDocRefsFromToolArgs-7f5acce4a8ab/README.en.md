# `connectorDocRefsFromToolArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:573760-573764](../../../../../../reference/runtime/sand-eval-runner.cjs#L573760-L573764) | `FunctionDeclaration` | no | `connector, toolName, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573760-573764](../../../../../../reference/runtime/sand-eval-runner.cjs#L573760-L573764) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:573760

Calls written directly in this body: `.flatMap`, `build2`.

SHA-256 of the source span: `67c25542a6a55b321750ac0ba4fc1699e9efcfff6903a1a60a6f038314e73bcb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
