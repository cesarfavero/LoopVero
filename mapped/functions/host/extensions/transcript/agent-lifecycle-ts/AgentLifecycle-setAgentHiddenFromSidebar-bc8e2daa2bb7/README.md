# `AgentLifecycle.setAgentHiddenFromSidebar`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733839-733842](../../../../../../../reference/runtime/host-main.cjs#L733839-L733842) | `method` | sim | `agentId, isHidden` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733839-733842](../../../../../../../reference/runtime/host-main.cjs#L733839-L733842) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:733839

Chamadas escritas diretamente neste corpo: `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.setSessionHiddenFromSidebar`.

SHA-256 do trecho: `e3448fd91f12960af2ad909ce98700f50158a15bdc0d3bf85fb0c5fcbce44a3c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
