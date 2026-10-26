# `firstPickOfEachName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-carry-over-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-carry-over-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535760-535768](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535760-L535768) | `FunctionDeclaration` | não | `picks` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535760-535768](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535760-L535768) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:535760

Chamadas escritas diretamente neste corpo: `new Set`, `picks.filter`.

SHA-256 do trecho: `c329091fffa9b8efa3ed48ab84aba14d5f9d8a7cffefc9ed788dcd4539fbd468`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
