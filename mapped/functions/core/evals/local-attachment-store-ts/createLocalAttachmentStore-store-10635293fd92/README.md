# `createLocalAttachmentStore/store`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/local-attachment-store.ts` · [README do módulo](../../../../../modules/core/evals/local-attachment-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:595990-595997](../../../../../../reference/runtime/sand-eval-runner.cjs#L595990-L595997) | `ArrowFunctionExpression` | sim | `filename, data2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:595990-595997](../../../../../../reference/runtime/sand-eval-runner.cjs#L595990-L595997) | 1 | 0 | 2 | 1 | 1 | 0 |

### evaluation:595990

Chamadas escritas diretamente neste corpo: `attachmentByteLimitForName`, `extension3`, `import_node_path42.posix.join`, `new AttachmentTooLargeError`, `sha256Hex3`.

Alvos de lançamento explícito: `AttachmentTooLargeError`.

SHA-256 do trecho: `a8bd65e6deff861c07f5179c12b90b82f7cb6b57faad04e747b9ef2d02158e69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
