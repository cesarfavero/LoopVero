# `isTeamsLegacyConversationId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/teams-address.ts` · [README do módulo](../../../../../modules/shared/channels/teams-address-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754782-754784](../../../../../../reference/runtime/host-main.cjs#L754782-L754784) | `FunctionDeclaration` | não | `conversationId` |
| [evaluation:538134-538136](../../../../../../reference/runtime/sand-eval-runner.cjs#L538134-L538136) | `FunctionDeclaration` | não | `conversationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754782-754784](../../../../../../reference/runtime/host-main.cjs#L754782-L754784) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538134-538136](../../../../../../reference/runtime/sand-eval-runner.cjs#L538134-L538136) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754782

Chamadas escritas diretamente neste corpo: `conversationId.endsWith`.

SHA-256 do trecho: `98a8da1baf65cb03599c2f770c151811663ffd123ec3c30983b9e205cb2f706a`.

### evaluation:538134

Chamadas escritas diretamente neste corpo: `conversationId.endsWith`.

SHA-256 do trecho: `98a8da1baf65cb03599c2f770c151811663ffd123ec3c30983b9e205cb2f706a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
