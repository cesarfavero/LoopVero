# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-cpu-saturation/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-cpu-saturation/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494421-494434](../../../../../../../reference/runtime/host-main.cjs#L494421-L494434) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494421-494434](../../../../../../../reference/runtime/host-main.cjs#L494421-L494434) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494421

Chamadas escritas diretamente neste corpo: `context2.onStop`, `createAgentCpuSaturationService`, `createPollingPolicy2`.

SHA-256 do trecho: `faf07350d1f062e9d8568b687890c139b4d1df408dba86ca385930d50b8bdfca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
