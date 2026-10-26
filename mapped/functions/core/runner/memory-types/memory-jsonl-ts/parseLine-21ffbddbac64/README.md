# `parseLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-jsonl.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-jsonl-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754609-754618](../../../../../../../reference/runtime/host-main.cjs#L754609-L754618) | `FunctionDeclaration` | não | `raw` |
| [evaluation:537576-537585](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537576-L537585) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754609-754618](../../../../../../../reference/runtime/host-main.cjs#L754609-L754618) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:537576-537585](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537576-L537585) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:754609

Chamadas escritas diretamente neste corpo: `JSON.parse`, `memoryJsonlLineSchema.safeParse`.

Alvos de atribuição ou incremento: `value`.

SHA-256 do trecho: `b687bcccde2fc0b3de7a542be27c0fbd73a8167b8c67b1775a1b636a76c95c6d`.

### evaluation:537576

Chamadas escritas diretamente neste corpo: `JSON.parse`, `memoryJsonlLineSchema.safeParse`.

Alvos de atribuição ou incremento: `value`.

SHA-256 do trecho: `4f2d1c73cda216746f13a930cce00217aea571f95642f2101f9f9d24a0d6bca7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
