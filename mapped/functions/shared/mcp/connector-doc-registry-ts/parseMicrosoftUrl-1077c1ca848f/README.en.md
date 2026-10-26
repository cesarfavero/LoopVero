# `parseMicrosoftUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774020-774037](../../../../../../reference/runtime/host-main.cjs#L774020-L774037) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573235-573252](../../../../../../reference/runtime/sand-eval-runner.cjs#L573235-L573252) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774020-774037](../../../../../../reference/runtime/host-main.cjs#L774020-L774037) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:573235-573252](../../../../../../reference/runtime/sand-eval-runner.cjs#L573235-L573252) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:774020

Calls written directly in this body: `encodeURIComponent`, `hostname4.endsWith`, `isHostOf`, `url2.hostname.toLowerCase`, `url2.searchParams.get`.

SHA-256 of the source span: `93f6121d677241a85f6f0595f9c07bb1b595915618ccb6902542a29e10a0000c`.

### evaluation:573235

Calls written directly in this body: `encodeURIComponent`, `hostname3.endsWith`, `isHostOf`, `url2.hostname.toLowerCase`, `url2.searchParams.get`.

SHA-256 of the source span: `de83cda0297d4426b9d4477100774ad7a73c4d5b8a3683486d3971c2ee1de305`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
