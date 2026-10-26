# `SandBoxNotReadyError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/box.ts` · [README do módulo](../../../../../modules/core/ports/box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:475649-475660](../../../../../../reference/runtime/sand-eval-runner.cjs#L475649-L475660) | `method` | não | `errorKind, message, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:475649-475660](../../../../../../reference/runtime/sand-eval-runner.cjs#L475649-L475660) | 4 | 0 | 0 | 0 | 0 | 0 |

### evaluation:475649

Chamadas escritas diretamente neste corpo: `BOX_NOT_READY_KINDS_AN_IMMEDIATE_RETRY_DOES_NOT_FIX.has`, `boxNotReadyCauseOf`, `super`.

Alvos de atribuição ou incremento: `this.errorKind`, `this.name`, `this.toolCallFailureDetail`, `this.toolCallTransientKind`.

SHA-256 do trecho: `4b934ffc75c73a9b71b8b6d6ca9feb3905ca95200844f62f02714da3fda6a3ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
