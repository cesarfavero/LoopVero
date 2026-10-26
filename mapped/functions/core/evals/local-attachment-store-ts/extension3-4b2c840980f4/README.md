# `extension3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/local-attachment-store.ts` · [README do módulo](../../../../../modules/core/evals/local-attachment-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:595976-595979](../../../../../../reference/runtime/sand-eval-runner.cjs#L595976-L595979) | `FunctionDeclaration` | não | `filename` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:595976-595979](../../../../../../reference/runtime/sand-eval-runner.cjs#L595976-L595979) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:595976

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `import_node_path42.posix.extname`.

SHA-256 do trecho: `d2838012a67bbe18316e16e4571bd40d16fe621aebc00d8a7404d27ef6441dd1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
