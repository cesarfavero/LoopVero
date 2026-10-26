# `credentialStateByRow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-display-runtime.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-display-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685099-685110](../../../../../../../reference/runtime/host-main.cjs#L685099-L685110) | `FunctionDeclaration` | no | `display` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685099-685110](../../../../../../../reference/runtime/host-main.cjs#L685099-L685110) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:685099

Calls written directly in this body: `.map`, `.sort`, `byIdentifier.set`, `isWithheldMcpDisplayServer`, `new Map`, `unnamedMcpRowIdentifier`.

SHA-256 of the source span: `23bdce90169325be1d073c76a6a23690205033b51ebf592491e06efcd9bbaf6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
