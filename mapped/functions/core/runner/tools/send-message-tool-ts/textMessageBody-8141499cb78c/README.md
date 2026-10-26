# `textMessageBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760910-760926](../../../../../../../reference/runtime/host-main.cjs#L760910-L760926) | `FunctionDeclaration` | não | `rawArgs, deps, cards` |
| [evaluation:551725-551741](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551725-L551741) | `FunctionDeclaration` | não | `rawArgs, deps, cards` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760910-760926](../../../../../../../reference/runtime/host-main.cjs#L760910-L760926) | 5 | 0 | 0 | 4 | 1 | 0 |
| [evaluation:551725-551741](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551725-L551741) | 5 | 0 | 0 | 4 | 1 | 0 |

### host:760910

Chamadas escritas diretamente neste corpo: `.map`, `buildLinkItemsContent`, `deps.linkItems.stored`, `findLinkItemsRepetition`, `new SandToolInputError`, `normalizeSendMessageTextContent`, `renderCardMessageBody`, `shipmentCardOfArgs`, `shoppingCardOfArgs`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `6aeb0be94a668606c3c2c686df90e63edc3e19c25b002be8282edb7b5881fa5c`.

### evaluation:551725

Chamadas escritas diretamente neste corpo: `.map`, `buildLinkItemsContent`, `deps.linkItems.stored`, `findLinkItemsRepetition`, `new SandToolInputError`, `normalizeSendMessageTextContent`, `renderCardMessageBody`, `shipmentCardOfArgs`, `shoppingCardOfArgs`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `6aeb0be94a668606c3c2c686df90e63edc3e19c25b002be8282edb7b5881fa5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
