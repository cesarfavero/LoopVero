# `sandEvalTeamIdGetter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/eval-team-id.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/eval-team-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596998-597009](../../../../../../../reference/runtime/sand-eval-runner.cjs#L596998-L597009) | `FunctionDeclaration` | não | `rawTeamId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596998-597009](../../../../../../../reference/runtime/sand-eval-runner.cjs#L596998-L597009) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:596998

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `Number`, `Number.isSafeInteger`, `invariant`, `rawTeamId.trim`.

SHA-256 do trecho: `361eee864b2d9239407248c700fb4853dc358689262d81d5c657918e648145a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
