# `renderRecallMemoryLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/tools/recall-memory-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769719-769741](../../../../../../../reference/runtime/host-main.cjs#L769719-L769741) | `FunctionDeclaration` | não | `args` |
| [evaluation:565388-565410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565388-L565410) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769719-769741](../../../../../../../reference/runtime/host-main.cjs#L769719-L769741) | 5 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:565388-565410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565388-L565410) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:769719

Chamadas escritas diretamente neste corpo: `lines2.join`, `lines2.push`, `searchedLabel`.

Alvos de atribuição ou incremento: `budget`, `shown`.

SHA-256 do trecho: `87e69acc62f376ac699d0800713e80485cb3eb44add3df9673106e5053353bd1`.

### evaluation:565388

Chamadas escritas diretamente neste corpo: `lines2.join`, `lines2.push`, `searchedLabel`.

Alvos de atribuição ou incremento: `budget`, `shown`.

SHA-256 do trecho: `87e69acc62f376ac699d0800713e80485cb3eb44add3df9673106e5053353bd1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
