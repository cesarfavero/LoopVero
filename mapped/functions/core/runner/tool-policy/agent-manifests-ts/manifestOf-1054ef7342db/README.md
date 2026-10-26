# `manifestOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-manifests.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-manifests-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:543229-543236](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543229-L543236) | `FunctionDeclaration` | não | `kind, variant` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:543229-543236](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543229-L543236) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:543229

Chamadas escritas diretamente neste corpo: `isSandSubagentDynamicToolsKind`, `isSandSubagentHistoryKind`.

SHA-256 do trecho: `84abfd8532058983e6615263d5b6302a495806454fba3538174304f41fb3dee0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
