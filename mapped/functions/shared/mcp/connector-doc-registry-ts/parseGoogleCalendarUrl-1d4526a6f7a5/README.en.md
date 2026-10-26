# `parseGoogleCalendarUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774218-774229](../../../../../../reference/runtime/host-main.cjs#L774218-L774229) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573433-573444](../../../../../../reference/runtime/sand-eval-runner.cjs#L573433-L573444) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774218-774229](../../../../../../reference/runtime/host-main.cjs#L774218-L774229) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573433-573444](../../../../../../reference/runtime/sand-eval-runner.cjs#L573433-L573444) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:774218

Calls written directly in this body: `eid.replaceAll`, `encodeURIComponent`, `matching`, `url2.hostname.toLowerCase`, `url2.searchParams.get`.

SHA-256 of the source span: `02df8d77e25be6a8d3f85e02b6c2e704c645ff458b6c72d96dfb0925e7db307f`.

### evaluation:573433

Calls written directly in this body: `eid.replaceAll`, `encodeURIComponent`, `matching`, `url2.hostname.toLowerCase`, `url2.searchParams.get`.

SHA-256 of the source span: `02df8d77e25be6a8d3f85e02b6c2e704c645ff458b6c72d96dfb0925e7db307f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
