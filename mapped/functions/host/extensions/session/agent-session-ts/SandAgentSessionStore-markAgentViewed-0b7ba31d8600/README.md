# `SandAgentSessionStore.markAgentViewed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723462-723472](../../../../../../../reference/runtime/host-main.cjs#L723462-L723472) | `method` | não | `agentId, at3 = Date.now(), options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723462-723472](../../../../../../../reference/runtime/host-main.cjs#L723462-L723472) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:723462

Chamadas escritas diretamente neste corpo: `db.close`, `db.markViewed`, `getAgentDbPath`, `this.createAgentDb`.

Alvos de atribuição ou incremento: `db`.

SHA-256 do trecho: `a1034f2f78956b5bdbc6cb9a6bc5af687d4d2960430c42642f9c8e7a35cc4eb7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
