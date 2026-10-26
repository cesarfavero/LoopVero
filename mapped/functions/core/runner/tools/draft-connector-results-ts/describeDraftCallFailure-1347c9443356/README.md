# `describeDraftCallFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732633-732656](../../../../../../../reference/runtime/host-main.cjs#L732633-L732656) | `FunctionDeclaration` | não | `result` |
| [evaluation:540155-540178](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540155-L540178) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732633-732656](../../../../../../../reference/runtime/host-main.cjs#L732633-L732656) | 11 | 0 | 0 | 9 | 0 | 0 |
| [evaluation:540155-540178](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540155-L540178) | 11 | 0 | 0 | 9 | 0 | 0 |

### host:732633

Chamadas escritas diretamente neste corpo: `.join`, `.trim`, `boundDraftCallError`, `inner.value.content.map`.

SHA-256 do trecho: `9f56537a5880af4d0c9e989c9e8a19e0f087fb5ce874f919eeed0e7f87db6705`.

### evaluation:540155

Chamadas escritas diretamente neste corpo: `.join`, `.trim`, `boundDraftCallError`, `inner.value.content.map`.

SHA-256 do trecho: `9f56537a5880af4d0c9e989c9e8a19e0f087fb5ce874f919eeed0e7f87db6705`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
