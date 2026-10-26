# `SandAgentSessionStore.setSessionDraftingDisabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723489-723493](../../../../../../../reference/runtime/host-main.cjs#L723489-L723493) | `method` | não | `agentId, isDisabled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723489-723493](../../../../../../../reference/runtime/host-main.cjs#L723489-L723493) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:723489

Chamadas escritas diretamente neste corpo: `getSandSettingsPath`, `this.getAgentDir`, `writeSandSettingsFile`.

SHA-256 do trecho: `da34dd7d9ae0136cc1786dce8d2ed2de46e8463c1482d7a6a8273621201f10ed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
