# `sameRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/frozen-tool-descriptions.ts` · [README do módulo](../../../../../modules/core/runner/frozen-tool-descriptions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586442-586447](../../../../../../reference/runtime/sand-eval-runner.cjs#L586442-L586447) | `FunctionDeclaration` | não | `a, b2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586442-586447](../../../../../../reference/runtime/sand-eval-runner.cjs#L586442-L586447) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:586442

Chamadas escritas diretamente neste corpo: `Object.keys`, `leftKeys.every`.

SHA-256 do trecho: `87c0a2302e370f8c82db955912d4c0361b480167f047418b8fea4eeb6b96feca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
