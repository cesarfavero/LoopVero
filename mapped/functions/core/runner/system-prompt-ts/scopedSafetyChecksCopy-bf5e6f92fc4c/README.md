# `scopedSafetyChecksCopy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:532991-533004](../../../../../../reference/runtime/sand-eval-runner.cjs#L532991-L533004) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532991-533004](../../../../../../reference/runtime/sand-eval-runner.cjs#L532991-L533004) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:532991

Chamadas escritas diretamente neste corpo: `configuredCopyOr`.

SHA-256 do trecho: `90ffe8d5b1b1e7f87d5feb5b2aa4354ef9b0b99ab5f51d102fd9dc2552a85812`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
