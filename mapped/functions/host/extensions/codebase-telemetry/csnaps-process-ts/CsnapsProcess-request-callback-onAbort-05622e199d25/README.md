# `_CsnapsProcess.request/<callback>/onAbort`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/csnaps-process.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-process-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541520-541528](../../../../../../../reference/runtime/host-main.cjs#L541520-L541528) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541520-541528](../../../../../../../reference/runtime/host-main.cjs#L541520-L541528) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:541520

Chamadas escritas diretamente neste corpo: `new CsnapsProcessError`, `response.reject`, `this.fail`, `this.pendingRequests.delete`.

SHA-256 do trecho: `8278a17ffae4244d12e420fb990c53e6217afcee6471a30ee9a677aeefcca05b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
