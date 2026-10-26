# `build`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/account-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/account-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775393-775399](../../../../../../../../reference/runtime/host-main.cjs#L775393-L775399) | `ArrowFunctionExpression` | não | `{ host, turn, emitCard }` |
| [host:775403-775410](../../../../../../../../reference/runtime/host-main.cjs#L775403-L775410) | `ArrowFunctionExpression` | não | `{     host   }` |
| [host:775414-775434](../../../../../../../../reference/runtime/host-main.cjs#L775414-L775434) | `ArrowFunctionExpression` | não | `{     host,     turn,     props,     emitCard   }` |
| [host:775438-775494](../../../../../../../../reference/runtime/host-main.cjs#L775438-L775494) | `ArrowFunctionExpression` | não | `{     host,     turn,     props,     machines,     mcpReviewOptions   }` |
| [evaluation:575038-575044](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575038-L575044) | `ArrowFunctionExpression` | não | `{ host, turn, emitCard }` |
| [evaluation:575048-575055](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575048-L575055) | `ArrowFunctionExpression` | não | `{     host   }` |
| [evaluation:575059-575079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575059-L575079) | `ArrowFunctionExpression` | não | `{     host,     turn,     props,     emitCard   }` |
| [evaluation:575083-575139](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575083-L575139) | `ArrowFunctionExpression` | não | `{     host,     turn,     props,     machines,     mcpReviewOptions   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775393-775399](../../../../../../../../reference/runtime/host-main.cjs#L775393-L775399) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:775393 usa retorno implícito de arrow function.
| [host:775403-775410](../../../../../../../../reference/runtime/host-main.cjs#L775403-L775410) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:775403 usa retorno implícito de arrow function.
| [host:775414-775434](../../../../../../../../reference/runtime/host-main.cjs#L775414-L775434) | 1 | 0 | 0 | 2 | 0 | 0 |
| [host:775438-775494](../../../../../../../../reference/runtime/host-main.cjs#L775438-L775494) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:575038-575044](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575038-L575044) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:575038 usa retorno implícito de arrow function.
| [evaluation:575048-575055](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575048-L575055) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:575048 usa retorno implícito de arrow function.
| [evaluation:575059-575079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575059-L575079) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:575083-575139](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575083-L575139) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:775393

Chamadas escritas diretamente neste corpo: `createSortMemoriesTool`.

SHA-256 do trecho: `35759c0b0a0b885d548c8163ed39e88f226f5798c7521b2df94b58901aaa3525`.

### host:775403

Chamadas escritas diretamente neste corpo: `createRequestCookieOriginApprovalTool`, `offersCookieOriginApproval`, `withCookieOriginApprovalCards`.

SHA-256 do trecho: `f90435ac5b8ed66e95cd32d978dc820c172a45ce74e6fbaf3d7c899ccf26d3ee`.

### host:775414

Chamadas escritas diretamente neste corpo: `createRequestVirtualCardTool`, `hasStripeLinkConnector`, `host.gates.stripeLink`.

SHA-256 do trecho: `f99b835a2540d62f36abdf1a1469e5f16f5b5a5b52b0355b8eda4dfb1eb275d2`.

### host:775438

Chamadas escritas diretamente neste corpo: `createDownloadFileTool`, `createUploadFileTool`, `host.gates.webFetchDisabled`, `host.isMcpDiscoveryUnavailableForTurn`, `offersConnectorFileTools`.

SHA-256 do trecho: `02d1307eb7b686d4c9ce2b8fbaa17787ccbe420f7435c8a641e62354078ce734`.

### evaluation:575038

Chamadas escritas diretamente neste corpo: `createSortMemoriesTool`.

SHA-256 do trecho: `35759c0b0a0b885d548c8163ed39e88f226f5798c7521b2df94b58901aaa3525`.

### evaluation:575048

Chamadas escritas diretamente neste corpo: `createRequestCookieOriginApprovalTool`, `offersCookieOriginApproval`, `withCookieOriginApprovalCards`.

SHA-256 do trecho: `f90435ac5b8ed66e95cd32d978dc820c172a45ce74e6fbaf3d7c899ccf26d3ee`.

### evaluation:575059

Chamadas escritas diretamente neste corpo: `createRequestVirtualCardTool`, `hasStripeLinkConnector`, `host.gates.stripeLink`.

SHA-256 do trecho: `523ff0e9c64c25e238f9b24c50ad9744732a5840dc39f60541bef840b7b0fc2d`.

### evaluation:575083

Chamadas escritas diretamente neste corpo: `createDownloadFileTool`, `createUploadFileTool`, `host.gates.webFetchDisabled`, `host.isMcpDiscoveryUnavailableForTurn`, `offersConnectorFileTools`.

SHA-256 do trecho: `a536643ff6f19794311c2788862de5c530f544eab3eacaf27cdd6e4a8fbb80ed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
