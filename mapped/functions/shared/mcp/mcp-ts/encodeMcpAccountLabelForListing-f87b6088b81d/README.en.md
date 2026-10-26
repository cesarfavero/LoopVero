# `encodeMcpAccountLabelForListing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226001-226007](../../../../../../reference/runtime/host-main.cjs#L226001-L226007) | `FunctionDeclaration` | no | `label` |
| [evaluation:495224-495230](../../../../../../reference/runtime/sand-eval-runner.cjs#L495224-L495230) | `FunctionDeclaration` | no | `label` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226001-226007](../../../../../../reference/runtime/host-main.cjs#L226001-L226007) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495224-495230](../../../../../../reference/runtime/sand-eval-runner.cjs#L495224-L495230) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:226001

Calls written directly in this body: `label.replace`.

SHA-256 of the source span: `001bcafa503478fab61e972fd3cb473b5647e65990565d1d906a885bc1824adb`.

### evaluation:495224

Calls written directly in this body: `label.replace`.

SHA-256 of the source span: `001bcafa503478fab61e972fd3cb473b5647e65990565d1d906a885bc1824adb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
