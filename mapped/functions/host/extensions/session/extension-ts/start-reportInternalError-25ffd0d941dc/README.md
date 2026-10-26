# `start/reportInternalError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/session/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728446-728449](../../../../../../../reference/runtime/host-main.cjs#L728446-L728449) | `ArrowFunctionExpression` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728446-728449](../../../../../../../reference/runtime/host-main.cjs#L728446-L728449) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:728446 usa retorno implícito de arrow function.

### host:728446

Chamadas escritas diretamente neste corpo: `context2.deps.telemetry.logs.reportHostLog`, `errorClassOf`.

SHA-256 do trecho: `a13434765dc43ade1e4088b0335d66bc9539fa7ec565d604d5cd8cfd640a9cb3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
