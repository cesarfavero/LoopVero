# `boxAgentMcpHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-capabilities.ts` · [Module README](../../../../../modules/core/box/box-capabilities-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546716-546718](../../../../../../reference/runtime/host-main.cjs#L546716-L546718) | `FunctionDeclaration` | yes | `box, ctx, agentId` |
| [evaluation:475811-475813](../../../../../../reference/runtime/sand-eval-runner.cjs#L475811-L475813) | `FunctionDeclaration` | yes | `box, ctx, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546716-546718](../../../../../../reference/runtime/host-main.cjs#L546716-L546718) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:475811-475813](../../../../../../reference/runtime/sand-eval-runner.cjs#L475811-L475813) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:546716

Calls written directly in this body: `box.agentMcpHost`.

SHA-256 of the source span: `cabd99ed0098812f7678f27bcb30486a4b24a5df81d2096e6699963659c6f30e`.

### evaluation:475811

Calls written directly in this body: `box.agentMcpHost`.

SHA-256 of the source span: `cabd99ed0098812f7678f27bcb30486a4b24a5df81d2096e6699963659c6f30e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
