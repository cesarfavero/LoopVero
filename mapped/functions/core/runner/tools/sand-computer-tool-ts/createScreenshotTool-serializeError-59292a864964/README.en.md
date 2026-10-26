# `createScreenshotTool/serializeError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777439-777439](../../../../../../../reference/runtime/host-main.cjs#L777439-L777439) | `ArrowFunctionExpression` | no | `error64` |
| [evaluation:577084-577084](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577084-L577084) | `ArrowFunctionExpression` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777439-777439](../../../../../../../reference/runtime/host-main.cjs#L777439-L777439) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:777439 uses an implicit arrow-function return.
| [evaluation:577084-577084](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577084-L577084) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:577084 uses an implicit arrow-function return.

### host:777439

Calls written directly in this body: `createScreenshotArgs`, `serializeComputerError`.

SHA-256 of the source span: `78e8bd65d68c5531dd0b6b3deadc3e5690d26a5a6637b78f578aff1bcd6b444a`.

### evaluation:577084

Calls written directly in this body: `createScreenshotArgs`, `serializeComputerError`.

SHA-256 of the source span: `cdf374852dc1181ae140b6e7e88e2211c496e30790ff2be0e5e3eaeccc980d03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
