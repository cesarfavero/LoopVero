# `build`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/account-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/account-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775393-775399](../../../../../../../../reference/runtime/host-main.cjs#L775393-L775399) | `ArrowFunctionExpression` | no | `{ host, turn, emitCard }` |
| [host:775403-775410](../../../../../../../../reference/runtime/host-main.cjs#L775403-L775410) | `ArrowFunctionExpression` | no | `{     host   }` |
| [host:775414-775434](../../../../../../../../reference/runtime/host-main.cjs#L775414-L775434) | `ArrowFunctionExpression` | no | `{     host,     turn,     props,     emitCard   }` |
| [host:775438-775494](../../../../../../../../reference/runtime/host-main.cjs#L775438-L775494) | `ArrowFunctionExpression` | no | `{     host,     turn,     props,     machines,     mcpReviewOptions   }` |
| [evaluation:575038-575044](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575038-L575044) | `ArrowFunctionExpression` | no | `{ host, turn, emitCard }` |
| [evaluation:575048-575055](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575048-L575055) | `ArrowFunctionExpression` | no | `{     host   }` |
| [evaluation:575059-575079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575059-L575079) | `ArrowFunctionExpression` | no | `{     host,     turn,     props,     emitCard   }` |
| [evaluation:575083-575139](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575083-L575139) | `ArrowFunctionExpression` | no | `{     host,     turn,     props,     machines,     mcpReviewOptions   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775393-775399](../../../../../../../../reference/runtime/host-main.cjs#L775393-L775399) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:775393 uses an implicit arrow-function return.
| [host:775403-775410](../../../../../../../../reference/runtime/host-main.cjs#L775403-L775410) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:775403 uses an implicit arrow-function return.
| [host:775414-775434](../../../../../../../../reference/runtime/host-main.cjs#L775414-L775434) | 1 | 0 | 0 | 2 | 0 | 0 |
| [host:775438-775494](../../../../../../../../reference/runtime/host-main.cjs#L775438-L775494) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:575038-575044](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575038-L575044) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:575038 uses an implicit arrow-function return.
| [evaluation:575048-575055](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575048-L575055) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:575048 uses an implicit arrow-function return.
| [evaluation:575059-575079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575059-L575079) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:575083-575139](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575083-L575139) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:775393

Calls written directly in this body: `createSortMemoriesTool`.

SHA-256 of the source span: `35759c0b0a0b885d548c8163ed39e88f226f5798c7521b2df94b58901aaa3525`.

### host:775403

Calls written directly in this body: `createRequestCookieOriginApprovalTool`, `offersCookieOriginApproval`, `withCookieOriginApprovalCards`.

SHA-256 of the source span: `f90435ac5b8ed66e95cd32d978dc820c172a45ce74e6fbaf3d7c899ccf26d3ee`.

### host:775414

Calls written directly in this body: `createRequestVirtualCardTool`, `hasStripeLinkConnector`, `host.gates.stripeLink`.

SHA-256 of the source span: `f99b835a2540d62f36abdf1a1469e5f16f5b5a5b52b0355b8eda4dfb1eb275d2`.

### host:775438

Calls written directly in this body: `createDownloadFileTool`, `createUploadFileTool`, `host.gates.webFetchDisabled`, `host.isMcpDiscoveryUnavailableForTurn`, `offersConnectorFileTools`.

SHA-256 of the source span: `02d1307eb7b686d4c9ce2b8fbaa17787ccbe420f7435c8a641e62354078ce734`.

### evaluation:575038

Calls written directly in this body: `createSortMemoriesTool`.

SHA-256 of the source span: `35759c0b0a0b885d548c8163ed39e88f226f5798c7521b2df94b58901aaa3525`.

### evaluation:575048

Calls written directly in this body: `createRequestCookieOriginApprovalTool`, `offersCookieOriginApproval`, `withCookieOriginApprovalCards`.

SHA-256 of the source span: `f90435ac5b8ed66e95cd32d978dc820c172a45ce74e6fbaf3d7c899ccf26d3ee`.

### evaluation:575059

Calls written directly in this body: `createRequestVirtualCardTool`, `hasStripeLinkConnector`, `host.gates.stripeLink`.

SHA-256 of the source span: `523ff0e9c64c25e238f9b24c50ad9744732a5840dc39f60541bef840b7b0fc2d`.

### evaluation:575083

Calls written directly in this body: `createDownloadFileTool`, `createUploadFileTool`, `host.gates.webFetchDisabled`, `host.isMcpDiscoveryUnavailableForTurn`, `offersConnectorFileTools`.

SHA-256 of the source span: `a536643ff6f19794311c2788862de5c530f544eab3eacaf27cdd6e4a8fbb80ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
