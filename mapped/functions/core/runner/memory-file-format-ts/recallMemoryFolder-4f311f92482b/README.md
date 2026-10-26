# `recallMemoryFolder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-file-format.ts` · [README do módulo](../../../../../modules/core/runner/memory-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536598-536605](../../../../../../reference/runtime/sand-eval-runner.cjs#L536598-L536605) | `FunctionDeclaration` | não | `facts, recentLimit` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536598-536605](../../../../../../reference/runtime/sand-eval-runner.cjs#L536598-L536605) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536598

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `.sort`, `Math.floor`, `Number.isFinite`.

SHA-256 do trecho: `8c152a9d7408ec1dce9f123a01a52d4581cc9864caa6cd6efbbb2752b2f648c7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
