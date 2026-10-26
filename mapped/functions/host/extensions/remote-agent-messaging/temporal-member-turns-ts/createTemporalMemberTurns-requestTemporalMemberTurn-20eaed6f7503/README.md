# `createTemporalMemberTurns/requestTemporalMemberTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/remote-agent-messaging/temporal-member-turns.ts` · [README do módulo](../../../../../../modules/host/extensions/remote-agent-messaging/temporal-member-turns-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:708345-708414](../../../../../../../reference/runtime/host-main.cjs#L708345-L708414) | `FunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708345-708414](../../../../../../../reference/runtime/host-main.cjs#L708345-L708414) | 8 | 0 | 2 | 6 | 0 | 2 |

### host:708345

Chamadas escritas diretamente neste corpo: `.map`, `BigInt`, `args.peers.map`, `cancelUpstream`, `deps.client.requestGrokBotRoomMemberTurn`, `deps.clock.now`, `deps.mintNonce`, `deps.reportFailure`, `deps.turnDeadline.run`, `errorLogTag`, `new Promise`, `parseAgentId`, `pending.delete`, `settle3`, `toRoomTurnMessages`.

Alvos de atribuição ou incremento: `dispatch`.

SHA-256 do trecho: `bdc35014d357cc99c571596c7dfb348dbd64b4b68678c42dd6ecaecff2bc67d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
