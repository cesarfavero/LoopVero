# `isUnresolvedProviderKeyedTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/tool-calls.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:539112-539114](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539112-L539114) | `FunctionDeclaration` | não | `toolName, resolveHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539112-539114](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539112-L539114) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539112

Chamadas escritas diretamente neste corpo: `classifyProviderKeyedTool`, `isUrlLessBoxPlaywrightTool`, `toolName.includes`.

SHA-256 do trecho: `f0c1fda43118ca8b3a7826a79c947345070345558a02163f3fbf157232be5d1e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
