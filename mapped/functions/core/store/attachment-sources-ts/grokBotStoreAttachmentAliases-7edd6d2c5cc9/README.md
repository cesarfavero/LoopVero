# `grokBotStoreAttachmentAliases`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/store/attachment-sources.ts` · [README do módulo](../../../../../modules/core/store/attachment-sources-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764198-764217](../../../../../../reference/runtime/host-main.cjs#L764198-L764217) | `FunctionDeclaration` | sim | `args` |
| [evaluation:557566-557585](../../../../../../reference/runtime/sand-eval-runner.cjs#L557566-L557585) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764198-764217](../../../../../../reference/runtime/host-main.cjs#L764198-L764217) | 3 | 1 | 1 | 2 | 0 | 0 |
| [evaluation:557566-557585](../../../../../../reference/runtime/sand-eval-runner.cjs#L557566-L557585) | 3 | 1 | 1 | 2 | 0 | 0 |

### host:764198

Chamadas escritas diretamente neste corpo: `grokBotStoreAttachmentCandidateOf`, `resolved.push`, `sources.resolve`.

SHA-256 do trecho: `18b992150ad279cf664fd06506be7636cd97c58b2ce0ae3c576db991b9dd38f8`.

### evaluation:557566

Chamadas escritas diretamente neste corpo: `grokBotStoreAttachmentCandidateOf`, `resolved.push`, `sources.resolve`.

SHA-256 do trecho: `18b992150ad279cf664fd06506be7636cd97c58b2ce0ae3c576db991b9dd38f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
