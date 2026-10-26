# `runsPerTurnMemoryExtraction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/turn-memory.ts` · [README do módulo](../../../../../modules/core/runner/turn-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590610-590612](../../../../../../reference/runtime/sand-eval-runner.cjs#L590610-L590612) | `FunctionDeclaration` | não | `memoryTypes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590610-590612](../../../../../../reference/runtime/sand-eval-runner.cjs#L590610-L590612) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590610

Chamadas escritas diretamente neste corpo: `memoryTypes.some`.

SHA-256 do trecho: `b37bb87475247b548ec66881e16d754e395e377219bb2540b8b9a1347f0ca4a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
