# `createReportSiteBlockedTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/report-site-blocked-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/report-site-blocked-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776737-776747](../../../../../../../../reference/runtime/host-main.cjs#L776737-L776747) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:576388-576398](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576388-L576398) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776737-776747](../../../../../../../../reference/runtime/host-main.cjs#L776737-L776747) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576388-576398](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576388-L576398) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776737

Chamadas escritas diretamente neste corpo: `d.getConversationId`, `d.reportSiteBlocked`, `getRequestId`, `siteBlockDomain`.

SHA-256 do trecho: `0ba9dc3211c8ed8ffa48f75bd23bcd03ecf4f29ec20277002b7581eed333aa8b`.

### evaluation:576388

Chamadas escritas diretamente neste corpo: `d.getConversationId`, `d.reportSiteBlocked`, `getRequestId`, `siteBlockDomain`.

SHA-256 do trecho: `0ba9dc3211c8ed8ffa48f75bd23bcd03ecf4f29ec20277002b7581eed333aa8b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
