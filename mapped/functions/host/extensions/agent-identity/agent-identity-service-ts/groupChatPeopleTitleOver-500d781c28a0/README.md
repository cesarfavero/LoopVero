# `groupChatPeopleTitleOver`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495111-495123](../../../../../../../reference/runtime/host-main.cjs#L495111-L495123) | `FunctionDeclaration` | não | `name18, peopleNames` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495111-495123](../../../../../../../reference/runtime/host-main.cjs#L495111-L495123) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:495111

Chamadas escritas diretamente neste corpo: `conversationNameForDisplay`, `conversationNameFromPrompt`, `formatNarrowList`, `peopleNames.filter`, `peopleNames.map`.

SHA-256 do trecho: `24222c1d810057db0aad813910fad87a0e57f7c564a507fde7790831fbef6ab4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
