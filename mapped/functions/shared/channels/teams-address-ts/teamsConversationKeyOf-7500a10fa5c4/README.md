# `teamsConversationKeyOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/teams-address.ts` · [README do módulo](../../../../../modules/shared/channels/teams-address-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754843-754846](../../../../../../reference/runtime/host-main.cjs#L754843-L754846) | `FunctionDeclaration` | não | `conversationId` |
| [evaluation:538195-538198](../../../../../../reference/runtime/sand-eval-runner.cjs#L538195-L538198) | `FunctionDeclaration` | não | `conversationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754843-754846](../../../../../../reference/runtime/host-main.cjs#L754843-L754846) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538195-538198](../../../../../../reference/runtime/sand-eval-runner.cjs#L538195-L538198) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:754843

Chamadas escritas diretamente neste corpo: `conversationId.indexOf`, `conversationId.slice`.

SHA-256 do trecho: `99cc2aaf488e21f1b7bafc6d2afb90d99e85de1cf2fe80e65ea9cb99e649d19d`.

### evaluation:538195

Chamadas escritas diretamente neste corpo: `conversationId.indexOf`, `conversationId.slice`.

SHA-256 do trecho: `99cc2aaf488e21f1b7bafc6d2afb90d99e85de1cf2fe80e65ea9cb99e649d19d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
