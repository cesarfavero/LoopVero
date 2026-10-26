# `formatConnectedActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-connected-activity-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763712-763738](../../../../../../../reference/runtime/host-main.cjs#L763712-L763738) | `FunctionDeclaration` | não | `source, result` |
| [evaluation:556760-556786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556760-L556786) | `FunctionDeclaration` | não | `source, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763712-763738](../../../../../../../reference/runtime/host-main.cjs#L763712-L763738) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556760-556786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556760-L556786) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:763712

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `emptyNote`, `formatUsage`, `result.items.map`.

SHA-256 do trecho: `88fb6b690831a0d29aeb417f6f49a1b261de6ee514d0c7f9cac5973f61f6c9b8`.

### evaluation:556760

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `emptyNote`, `formatUsage`, `result.items.map`.

SHA-256 do trecho: `88fb6b690831a0d29aeb417f6f49a1b261de6ee514d0c7f9cac5973f61f6c9b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
