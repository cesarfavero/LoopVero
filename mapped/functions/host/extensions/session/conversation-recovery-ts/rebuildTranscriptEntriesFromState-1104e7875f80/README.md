# `rebuildTranscriptEntriesFromState`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/conversation-recovery.ts` · [README do módulo](../../../../../../modules/host/extensions/session/conversation-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719886-719892](../../../../../../../reference/runtime/host-main.cjs#L719886-L719892) | `FunctionDeclaration` | não | `state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719886-719892](../../../../../../../reference/runtime/host-main.cjs#L719886-L719892) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719886

Chamadas escritas diretamente neste corpo: `deriveOutlineTurnsFromConversationState`, `outlineItemTimes`, `outlineTurnRequestIds`, `rebuildTranscriptEntriesFromOutline`.

SHA-256 do trecho: `9cba42c732fece91061c71d8c6c6789864bd8a1eb3a39705b5933c0b4bf1d5de`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
