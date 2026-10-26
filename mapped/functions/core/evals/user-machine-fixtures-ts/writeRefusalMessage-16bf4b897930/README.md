# `writeRefusalMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596295-596297](../../../../../../reference/runtime/sand-eval-runner.cjs#L596295-L596297) | `FunctionDeclaration` | não | `refusal4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596295-596297](../../../../../../reference/runtime/sand-eval-runner.cjs#L596295-L596297) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596295

Chamadas escritas diretamente neste corpo: `new DeferredInteractionResponseError`, `new InteractionQuery`.

SHA-256 do trecho: `cbb0bf1a4fbdb1daeabe0d0812c730a6b19f8b2fdfc0a215c7eed5b3a75acb73`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
