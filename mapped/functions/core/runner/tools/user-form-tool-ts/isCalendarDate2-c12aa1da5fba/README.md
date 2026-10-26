# `isCalendarDate2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726310-726316](../../../../../../../reference/runtime/host-main.cjs#L726310-L726316) | `FunctionDeclaration` | não | `value` |
| [evaluation:560925-560931](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560925-L560931) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726310-726316](../../../../../../../reference/runtime/host-main.cjs#L726310-L726316) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560925-560931](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560925-L560931) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726310

Chamadas escritas diretamente neste corpo: `/^(\d{4})-(\d{2})-(\d{2})$/.exec`, `Date.UTC`, `Number`, `date6.getUTCDate`, `date6.getUTCFullYear`, `date6.getUTCMonth`, `new Date`.

SHA-256 do trecho: `4738382a0f474ed04ba63cc02064b4a2e04f5140eaa89b848192b98578727e94`.

### evaluation:560925

Chamadas escritas diretamente neste corpo: `/^(\d{4})-(\d{2})-(\d{2})$/.exec`, `Date.UTC`, `Number`, `date6.getUTCDate`, `date6.getUTCFullYear`, `date6.getUTCMonth`, `new Date`.

SHA-256 do trecho: `4738382a0f474ed04ba63cc02064b4a2e04f5140eaa89b848192b98578727e94`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
