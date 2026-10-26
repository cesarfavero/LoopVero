# `errorTexts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780051-780058](../../../../../../../reference/runtime/host-main.cjs#L780051-L780058) | `FunctionDeclaration` | no | `error64` |
| [evaluation:580296-580303](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580296-L580303) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780051-780058](../../../../../../../reference/runtime/host-main.cjs#L780051-L780058) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:580296-580303](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580296-L580303) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:780051

Calls written directly in this body: `.map`, `error64.findDetails`.

SHA-256 of the source span: `b6c6cc12ec2a3460c9c2bc658991f289958538841efefdc4d629351e586ad7ae`.

### evaluation:580296

Calls written directly in this body: `.map`, `error63.findDetails`.

SHA-256 of the source span: `1653745edbaa9e7c02fd10d320679b198b0b02f0a955b64e62693d231cba22e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
