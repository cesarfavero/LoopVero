# `describeSources`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-connected-activity-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763692-763694](../../../../../../../reference/runtime/host-main.cjs#L763692-L763694) | `FunctionDeclaration` | não | `sources` |
| [evaluation:556740-556742](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556740-L556742) | `FunctionDeclaration` | não | `sources` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763692-763694](../../../../../../../reference/runtime/host-main.cjs#L763692-L763694) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556740-556742](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556740-L556742) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763692

Chamadas escritas diretamente neste corpo: `.join`, `sources.map`.

SHA-256 do trecho: `233aadcd39aef7ec266679a797f77ad80480be89e1e89f98dd4ff87f40d89395`.

### evaluation:556740

Chamadas escritas diretamente neste corpo: `.join`, `sources.map`.

SHA-256 do trecho: `233aadcd39aef7ec266679a797f77ad80480be89e1e89f98dd4ff87f40d89395`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
