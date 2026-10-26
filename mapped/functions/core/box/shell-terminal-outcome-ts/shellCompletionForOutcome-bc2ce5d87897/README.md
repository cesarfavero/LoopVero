# `shellCompletionForOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shell-terminal-outcome.ts` · [README do módulo](../../../../../modules/core/box/shell-terminal-outcome-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:590256-590287](../../../../../../reference/runtime/host-main.cjs#L590256-L590287) | `FunctionDeclaration` | não | `outcome` |
| [evaluation:529979-530010](../../../../../../reference/runtime/sand-eval-runner.cjs#L529979-L530010) | `FunctionDeclaration` | não | `outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590256-590287](../../../../../../reference/runtime/host-main.cjs#L590256-L590287) | 7 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:529979-530010](../../../../../../reference/runtime/sand-eval-runner.cjs#L529979-L530010) | 7 | 0 | 0 | 6 | 0 | 0 |

### host:590256

Chamadas escritas diretamente neste corpo: `Math.round`.

SHA-256 do trecho: `049f7c2a6cc4ad2ade261f59b06854b5a3193cf625d7120ad422465429faec45`.

### evaluation:529979

Chamadas escritas diretamente neste corpo: `Math.round`.

SHA-256 do trecho: `049f7c2a6cc4ad2ade261f59b06854b5a3193cf625d7120ad422465429faec45`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
