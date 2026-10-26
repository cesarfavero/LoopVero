# `schemeAndQueryOrderInsensitiveUrlKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/web-search-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/web-search-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596920-596929](../../../../../../reference/runtime/sand-eval-runner.cjs#L596920-L596929) | `FunctionDeclaration` | não | `rawUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596920-596929](../../../../../../reference/runtime/sand-eval-runner.cjs#L596920-L596929) | 0 | 0 | 0 | 2 | 0 | 1 |

### evaluation:596920

Chamadas escritas diretamente neste corpo: `new URL`, `rawUrl.trim`, `url2.pathname.replace`, `url2.searchParams.sort`.

Alvos de atribuição ou incremento: `url2`.

SHA-256 do trecho: `4f202d07a63a6fe8a1d8123cdb31af0e7713b087f918f62c846c1ed5d5d51e8d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
