# `hasExecutorSubagent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/tasks/README.md).

**Módulo:** `core/sand-multitask.ts` · [README do módulo](../../../../modules/core/sand-multitask-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:752229-752233](../../../../../reference/runtime/host-main.cjs#L752229-L752233) | `FunctionDeclaration` | não | `configs` |
| [evaluation:530192-530196](../../../../../reference/runtime/sand-eval-runner.cjs#L530192-L530196) | `FunctionDeclaration` | não | `configs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752229-752233](../../../../../reference/runtime/host-main.cjs#L752229-L752233) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530192-530196](../../../../../reference/runtime/sand-eval-runner.cjs#L530192-L530196) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:752229

Chamadas escritas diretamente neste corpo: `configs.some`.

SHA-256 do trecho: `b681a84fae2061861571b227a7c98873fd92061a6c91d35b7505453b753aed5e`.

### evaluation:530192

Chamadas escritas diretamente neste corpo: `configs.some`.

SHA-256 do trecho: `b681a84fae2061861571b227a7c98873fd92061a6c91d35b7505453b753aed5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
