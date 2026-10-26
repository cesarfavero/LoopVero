# `normalizeFixtureCommand`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596251-596253](../../../../../../reference/runtime/sand-eval-runner.cjs#L596251-L596253) | `FunctionDeclaration` | não | `command` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596251-596253](../../../../../../reference/runtime/sand-eval-runner.cjs#L596251-L596253) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596251

Chamadas escritas diretamente neste corpo: `.replace`, `command.trim`.

SHA-256 do trecho: `5f0305f11e990f8c8779c5e9aa66a0a5d6289d86320baf4792c5c527dd12261a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
