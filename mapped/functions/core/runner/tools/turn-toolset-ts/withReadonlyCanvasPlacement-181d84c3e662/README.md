# `withReadonlyCanvasPlacement`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-toolset.ts` · [README do módulo](../../../../../../modules/core/runner/tools/turn-toolset-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582624-582629](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582624-L582629) | `FunctionDeclaration` | não | `tool, enforceReadonlyTools` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582624-582629](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582624-L582629) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:582624

Chamadas escritas diretamente neste corpo: `ENFORCED_READONLY_PAGE_EXCEPTION_LOOKUP_HINTS.get`.

SHA-256 do trecho: `24ac7a1afcc46a75441b501c9b13889cef7524faccbd0491781597610b833916`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
