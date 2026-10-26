# `exactMatchesInScope`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727051-727059](../../../../../../../reference/runtime/host-main.cjs#L727051-L727059) | `FunctionDeclaration` | não | `matches, frameNeedle, inFrame, uniqueExactAcrossFrames` |
| [evaluation:561662-561670](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561662-L561670) | `FunctionDeclaration` | não | `matches, frameNeedle, inFrame, uniqueExactAcrossFrames` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727051-727059](../../../../../../../reference/runtime/host-main.cjs#L727051-L727059) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:561662-561670](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561662-L561670) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:727051

Chamadas escritas diretamente neste corpo: `inFrame`, `matches.filter`.

SHA-256 do trecho: `d240a6fd097b7e71035733f92f9c34474056a479a4c00d3692a4ac2c921e73fc`.

### evaluation:561662

Chamadas escritas diretamente neste corpo: `inFrame`, `matches.filter`.

SHA-256 do trecho: `d240a6fd097b7e71035733f92f9c34474056a479a4c00d3692a4ac2c921e73fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
