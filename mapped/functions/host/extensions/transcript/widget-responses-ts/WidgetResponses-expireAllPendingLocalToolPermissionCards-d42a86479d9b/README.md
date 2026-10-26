# `WidgetResponses.expireAllPendingLocalToolPermissionCards`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782604-782649](../../../../../../../reference/runtime/host-main.cjs#L782604-L782649) | `method` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782604-782649](../../../../../../../reference/runtime/host-main.cjs#L782604-L782649) | 4 | 1 | 2 | 2 | 0 | 3 |

### host:782604

Chamadas escritas diretamente neste corpo: `reportSweepFailure`, `this.settlePendingLocalToolPermissionAsksOnSession`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.expirePendingLocalToolPermissionAsks`, `this.tm.sessionStore.listAgentIds`.

Alvos de atribuição ou incremento: `agentIds`, `expired`.

SHA-256 do trecho: `2e1dc1d4db9c135e7da721ae2067cca9df7197c2329a6e595daed1abacc723f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
