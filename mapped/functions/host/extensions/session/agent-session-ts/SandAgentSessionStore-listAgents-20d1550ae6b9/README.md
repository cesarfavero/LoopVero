# `SandAgentSessionStore.listAgents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723422-723424](../../../../../../../reference/runtime/host-main.cjs#L723422-L723424) | `method` | sim | `activeAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723422-723424](../../../../../../../reference/runtime/host-main.cjs#L723422-L723424) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723422

Chamadas escritas diretamente neste corpo: `listAgents`, `this.rosterHost`.

SHA-256 do trecho: `f263a90336a42d319f2d2a6ad7835f1db68d36e1e0b1f51456e670d830609ded`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
