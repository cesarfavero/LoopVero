# `admitTurnTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/minimal-harness/minimal-harness.ts` · [README do módulo](../../../../../../modules/core/runner/minimal-harness/minimal-harness-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583380-583384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583380-L583384) | `FunctionDeclaration` | não | `tools, disabledToolIdentifiers, allowedTopLevelToolNames, dynamicTools = /* @__PURE__ */ new Set(), answeredByMock = () => false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583380-583384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583380-L583384) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583380

Chamadas escritas diretamente neste corpo: `tools.filter`.

SHA-256 do trecho: `8e8e5bd2ec79386176b3cd9df3c5062d4442d118ddb9d6c509503953012f799a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
