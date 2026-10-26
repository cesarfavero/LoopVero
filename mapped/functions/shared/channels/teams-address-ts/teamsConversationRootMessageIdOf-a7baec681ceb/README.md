# `teamsConversationRootMessageIdOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/teams-address.ts` · [README do módulo](../../../../../modules/shared/channels/teams-address-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754847-754854](../../../../../../reference/runtime/host-main.cjs#L754847-L754854) | `FunctionDeclaration` | não | `conversationId` |
| [evaluation:538199-538206](../../../../../../reference/runtime/sand-eval-runner.cjs#L538199-L538206) | `FunctionDeclaration` | não | `conversationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754847-754854](../../../../../../reference/runtime/host-main.cjs#L754847-L754854) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:538199-538206](../../../../../../reference/runtime/sand-eval-runner.cjs#L538199-L538206) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:754847

Chamadas escritas diretamente neste corpo: `conversationId.indexOf`, `conversationId.slice`.

SHA-256 do trecho: `07892d4ae038509d1c9db0955d04b00c1f5217572ddd521e8dba895cf3e66592`.

### evaluation:538199

Chamadas escritas diretamente neste corpo: `conversationId.indexOf`, `conversationId.slice`.

SHA-256 do trecho: `07892d4ae038509d1c9db0955d04b00c1f5217572ddd521e8dba895cf3e66592`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
