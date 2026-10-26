# `createCloudAgentsClient/listAppSecretsRequestedFolders`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513296-513303](../../../../../../reference/runtime/host-main.cjs#L513296-L513303) | `FunctionDeclaration` | sim | `bcId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513296-513303](../../../../../../reference/runtime/host-main.cjs#L513296-L513303) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:513296

Chamadas escritas diretamente neste corpo: `.getBackgroundComposerConversation`, `appSecretsRequestedFoldersOf`, `bcId.trim`, `client`, `new GetBackgroundComposerConversationRequest`.

SHA-256 do trecho: `3308f3f6e3c08b304ff821f90cef78ea36d7a415cba8fdac3fabf9f72995dca2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
