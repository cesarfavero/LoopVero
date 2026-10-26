# `isPathWithin2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/paths.ts` · [README do módulo](../../../../../modules/shared/node/paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:530392-530396](../../../../../../reference/runtime/sand-eval-runner.cjs#L530392-L530396) | `FunctionDeclaration` | não | `parent, child, opts = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530392-530396](../../../../../../reference/runtime/sand-eval-runner.cjs#L530392-L530396) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:530392

Chamadas escritas diretamente neste corpo: `rel.startsWith`.

SHA-256 do trecho: `118127380e869837865df6d5954f81f2dc8e1d36e90d4d6d6c002b65ce1768b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
