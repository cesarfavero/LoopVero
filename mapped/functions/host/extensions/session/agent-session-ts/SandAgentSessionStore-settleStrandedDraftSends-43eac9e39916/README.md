# `SandAgentSessionStore.settleStrandedDraftSends`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723560-723562](../../../../../../../reference/runtime/host-main.cjs#L723560-L723562) | `method` | sim | `agentId, isInFlight` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723560-723562](../../../../../../../reference/runtime/host-main.cjs#L723560-L723562) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723560

Chamadas escritas diretamente neste corpo: `this.withAgentDb`.

SHA-256 do trecho: `731e8f3dafb19f88fa43854b49a98fd84c5366794b6774c1efdaea947d884c38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
