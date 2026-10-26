# `boundedLaunchToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-tool-call-telemetry.ts` · [Module README](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693364-693382](../../../../../../reference/runtime/host-main.cjs#L693364-L693382) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693364-693382](../../../../../../reference/runtime/host-main.cjs#L693364-L693382) | 7 | 0 | 0 | 3 | 0 | 0 |

### host:693364

Calls written directly in this body: `/\s/.test`, `LAUNCH_TOKEN.test`, `raw.trim`, `token.includes`, `token.indexOf`, `token.slice`, `token.split`, `token.startsWith`, `token.toLowerCase`.

Assignment or increment targets: `token`.

SHA-256 of the source span: `8e2cfd9495546ad0174d49cfadc08d2116ae7b4759506ac5e44400dd33da64ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
