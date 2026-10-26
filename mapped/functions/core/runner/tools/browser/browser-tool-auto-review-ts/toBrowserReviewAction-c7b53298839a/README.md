# `toBrowserReviewAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/browser/browser-tool-auto-review.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/browser-tool-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743359-743391](../../../../../../../../reference/runtime/host-main.cjs#L743359-L743391) | `FunctionDeclaration` | não | `op, args, defaultViewId` |
| [evaluation:516210-516242](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516210-L516242) | `FunctionDeclaration` | não | `op, args, defaultViewId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743359-743391](../../../../../../../../reference/runtime/host-main.cjs#L743359-L743391) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516210-516242](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516210-L516242) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:743359

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `booleanArg`, `numberArg`, `stringArg`, `stringArrayArg`.

SHA-256 do trecho: `038b7252245e137b3afaced3b8fc736c15e1e522116b8ddb760db819e22156c4`.

### evaluation:516210

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `booleanArg`, `numberArg`, `stringArg`, `stringArrayArg`.

SHA-256 do trecho: `038b7252245e137b3afaced3b8fc736c15e1e522116b8ddb760db819e22156c4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
