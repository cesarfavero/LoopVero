# `createLocalAttachmentStore/ingestAttachment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/local-attachment-store.ts` · [README do módulo](../../../../../modules/core/evals/local-attachment-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:595999-596007](../../../../../../reference/runtime/sand-eval-runner.cjs#L595999-L596007) | `ArrowFunctionExpression` | sim | `sourcePath2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:595999-596007](../../../../../../reference/runtime/sand-eval-runner.cjs#L595999-L596007) | 0 | 0 | 2 | 1 | 1 | 1 |

### evaluation:595999

Chamadas escritas diretamente neste corpo: `readFailure`, `store`.

Alvos de atribuição ou incremento: `data2`.

Alvos de lançamento explícito: `readFailure`.

SHA-256 do trecho: `f157f8b2428fd597d4188cd67bc7eb1463bb69f608a5f45e0c0c8fd4ae3a2680`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
