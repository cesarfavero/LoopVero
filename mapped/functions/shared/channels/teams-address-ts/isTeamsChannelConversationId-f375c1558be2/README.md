# `isTeamsChannelConversationId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/teams-address.ts` · [README do módulo](../../../../../modules/shared/channels/teams-address-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754779-754781](../../../../../../reference/runtime/host-main.cjs#L754779-L754781) | `FunctionDeclaration` | não | `conversationId` |
| [evaluation:538131-538133](../../../../../../reference/runtime/sand-eval-runner.cjs#L538131-L538133) | `FunctionDeclaration` | não | `conversationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754779-754781](../../../../../../reference/runtime/host-main.cjs#L754779-L754781) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538131-538133](../../../../../../reference/runtime/sand-eval-runner.cjs#L538131-L538133) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754779

Chamadas escritas diretamente neste corpo: `conversationId.endsWith`.

SHA-256 do trecho: `764874aea146d3678c18d00210d81d7eff64696a43eb51a71ec959435dbb440b`.

### evaluation:538131

Chamadas escritas diretamente neste corpo: `conversationId.endsWith`.

SHA-256 do trecho: `764874aea146d3678c18d00210d81d7eff64696a43eb51a71ec959435dbb440b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
