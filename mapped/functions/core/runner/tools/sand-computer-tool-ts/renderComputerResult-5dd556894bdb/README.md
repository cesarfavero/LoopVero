# `renderComputerResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777253-777260](../../../../../../../reference/runtime/host-main.cjs#L777253-L777260) | `FunctionDeclaration` | não | `output2, operation, redact` |
| [evaluation:576898-576905](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576898-L576905) | `FunctionDeclaration` | não | `output2, operation, redact` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777253-777260](../../../../../../../reference/runtime/host-main.cjs#L777253-L777260) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576898-576905](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576898-L576905) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:777253

Chamadas escritas diretamente neste corpo: `createImageResult`, `createStringResult`, `describeOutcome`, `redact`.

SHA-256 do trecho: `8b9a0ce63643c74a58eadc80131e4039e679de427bf26d58ce1b3066583cdf37`.

### evaluation:576898

Chamadas escritas diretamente neste corpo: `createImageResult`, `createStringResult`, `describeOutcome`, `redact`.

SHA-256 do trecho: `8b9a0ce63643c74a58eadc80131e4039e679de427bf26d58ce1b3066583cdf37`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
