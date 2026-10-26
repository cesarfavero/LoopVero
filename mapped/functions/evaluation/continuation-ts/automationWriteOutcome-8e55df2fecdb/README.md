# `automationWriteOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628661-628672](../../../../../reference/runtime/sand-eval-runner.cjs#L628661-L628672) | `FunctionDeclaration` | não | `automation, verb` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628661-628672](../../../../../reference/runtime/sand-eval-runner.cjs#L628661-L628672) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:628661

Chamadas escritas diretamente neste corpo: `describeTrigger`, `stateWriteFailed`, `stateWriteOk`.

SHA-256 do trecho: `4f644fa9c96ee0c0fbfa8339fbc2a14df6e487a34a645d3538c7f2e6cb5b163b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
