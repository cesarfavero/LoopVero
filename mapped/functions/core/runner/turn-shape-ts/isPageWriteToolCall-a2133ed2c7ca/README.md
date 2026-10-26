# `isPageWriteToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-shape.ts` · [README do módulo](../../../../../modules/core/runner/turn-shape-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587205-587207](../../../../../../reference/runtime/sand-eval-runner.cjs#L587205-L587207) | `FunctionDeclaration` | não | `part` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587205-587207](../../../../../../reference/runtime/sand-eval-runner.cjs#L587205-L587207) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587205

Chamadas escritas diretamente neste corpo: `invokesFirstPartyTool`.

SHA-256 do trecho: `1ac3feb8511c680365c4a09f191e5becda131af28a8bc4a8218ab1045a4b4e2f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
