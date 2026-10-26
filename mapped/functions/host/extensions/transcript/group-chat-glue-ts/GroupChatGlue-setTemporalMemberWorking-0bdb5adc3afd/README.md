# `GroupChatGlue.setTemporalMemberWorking`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/group-chat-glue.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738712-738726](../../../../../../../reference/runtime/host-main.cjs#L738712-L738726) | `method` | não | `groupId, memberId, working` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738712-738726](../../../../../../../reference/runtime/host-main.cjs#L738712-L738726) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:738712

Chamadas escritas diretamente neste corpo: `.filter`, `this.activeTemporalMemberIdOf`, `this.tm.roster.emitAgentUpdate`, `this.workingTemporalMembersByGroup.delete`, `this.workingTemporalMembersByGroup.get`, `this.workingTemporalMembersByGroup.set`.

SHA-256 do trecho: `53b63d3a6d9c8cb45ec5c4bd0c20963e424b6614067efa72e5cf385e158c1f79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
