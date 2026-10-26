# `cloudAgentArtifactBoxPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-artifact-plan.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-artifact-plan-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508240-508247](../../../../../../../reference/runtime/host-main.cjs#L508240-L508247) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508240-508247](../../../../../../../reference/runtime/host-main.cjs#L508240-L508247) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:508240

Calls written directly in this body: `.filter`, `artifactPathRelativeToBoxDir`, `cloudAgentArtifactsBoxDir`, `segments.includes`, `segments.join`, `withoutRoot.split`.

SHA-256 of the source span: `be8c47edd7c181b4ec1761e675e444fc42fb77c664f0f508a70456abf568a337`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
