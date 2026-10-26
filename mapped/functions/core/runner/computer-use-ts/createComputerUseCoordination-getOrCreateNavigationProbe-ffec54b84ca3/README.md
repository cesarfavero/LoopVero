# `createComputerUseCoordination/getOrCreateNavigationProbe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525537-525548](../../../../../../reference/runtime/sand-eval-runner.cjs#L525537-L525548) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525537-525548](../../../../../../reference/runtime/sand-eval-runner.cjs#L525537-L525548) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:525537

Chamadas escritas diretamente neste corpo: `createSandNavigationProbe`, `deps.actionAuditor`, `deps.getConversationId`.

Alvos de atribuição ou incremento: `navigationProbe`.

SHA-256 do trecho: `cec019c68b5525a461d1c0d7bfc44523aa59573bc2ba64a0d3b6886d1ce5e594`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
