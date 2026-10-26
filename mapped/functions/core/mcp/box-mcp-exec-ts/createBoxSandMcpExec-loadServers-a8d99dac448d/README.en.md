# `createBoxSandMcpExec/loadServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684920-684923](../../../../../../reference/runtime/host-main.cjs#L684920-L684923) | `FunctionExpression` | yes | `configJson` |
| [evaluation:514708-514711](../../../../../../reference/runtime/sand-eval-runner.cjs#L514708-L514711) | `FunctionExpression` | yes | `configJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684920-684923](../../../../../../reference/runtime/host-main.cjs#L684920-L684923) | 0 | 0 | 1 | 0 | 0 | 0 |
| [evaluation:514708-514711](../../../../../../reference/runtime/sand-eval-runner.cjs#L514708-L514711) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:684920

Calls written directly in this body: `boxLoadMcpServers`, `loadOptions`.

Assignment or increment targets: `loadedConfigJson`.

SHA-256 of the source span: `7c0cf60d6966bb308c5220a01ee0eb92d4792002d05f06363f762c098df946d2`.

### evaluation:514708

Calls written directly in this body: `boxLoadMcpServers`, `loadOptions`.

Assignment or increment targets: `loadedConfigJson`.

SHA-256 of the source span: `7c0cf60d6966bb308c5220a01ee0eb92d4792002d05f06363f762c098df946d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
