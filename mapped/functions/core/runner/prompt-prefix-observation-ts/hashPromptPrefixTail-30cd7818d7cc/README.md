# `hashPromptPrefixTail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546491-546536](../../../../../../reference/runtime/sand-eval-runner.cjs#L546491-L546536) | `FunctionDeclaration` | não | `request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546491-546536](../../../../../../reference/runtime/sand-eval-runner.cjs#L546491-L546536) | 8 | 1 | 0 | 1 | 0 | 0 |

### evaluation:546491

Chamadas escritas diretamente neste corpo: `.filter`, `.includes`, `.map`, `Math.max`, `isTurnMessage`, `messageContentForHash`, `messageText`, `messages.slice`, `sha256HexOfText`, `sha256HexOfTexts`, `sizeOf`, `splitDrivingMessage`, `turn.findLastIndex`, `turn.slice`, `turnNoteBlocksOf`.

Alvos de atribuição ou incremento: `drivingIndex`, `end`, `start`.

SHA-256 do trecho: `26b3cb5797441a8298b1880edb570d8f9fd8a63e9c084af453eb08e7ccf5582b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
