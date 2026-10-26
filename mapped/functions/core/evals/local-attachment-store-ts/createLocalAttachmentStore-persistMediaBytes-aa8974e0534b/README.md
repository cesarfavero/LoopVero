# `createLocalAttachmentStore/persistMediaBytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/local-attachment-store.ts` · [README do módulo](../../../../../modules/core/evals/local-attachment-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596008-596014](../../../../../../reference/runtime/sand-eval-runner.cjs#L596008-L596014) | `ArrowFunctionExpression` | sim | `filename, data2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596008-596014](../../../../../../reference/runtime/sand-eval-runner.cjs#L596008-L596014) | 2 | 0 | 1 | 1 | 2 | 0 |

### evaluation:596008

Chamadas escritas diretamente neste corpo: `filename.includes`, `filename.trim`, `new Error`, `store`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `3ab98d62e19330b1504d94528c289427985f1b65fa7d2bf44d43dc386a6c0871`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
