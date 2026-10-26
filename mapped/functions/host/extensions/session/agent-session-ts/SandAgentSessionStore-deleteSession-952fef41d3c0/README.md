# `SandAgentSessionStore.deleteSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723224-723230](../../../../../../../reference/runtime/host-main.cjs#L723224-L723230) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723224-723230](../../../../../../../reference/runtime/host-main.cjs#L723224-L723230) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:723224

Chamadas escritas diretamente neste corpo: `deleteSandAgentDbWriteGeneration`, `getAgentDbPath`, `publishTranscriptMutation`, `removeSandDataTree`, `this.extrasCache.delete`.

SHA-256 do trecho: `606c7b90b347224aa3fcc2d0ae6a855d7c6ccbb594edffea29a687c83c5d5810`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
