# `createServerAgentActivity/armStale`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-agent-activity.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711067-711076](../../../../../../../reference/runtime/host-main.cjs#L711067-L711076) | `ArrowFunctionExpression` | não | `agentId, sessionId, session, staleInMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711067-711076](../../../../../../../reference/runtime/host-main.cjs#L711067-L711076) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:711067

Chamadas escritas diretamente neste corpo: `clock.schedule`, `session.staleTimer.dispose`, `settleStale`.

Alvos de atribuição ou incremento: `session.staleTimer`.

SHA-256 do trecho: `4e8e6f08382cd4ba72e2542e181f7d0a80f33219550d31ad31b3a38c63b1d23a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
