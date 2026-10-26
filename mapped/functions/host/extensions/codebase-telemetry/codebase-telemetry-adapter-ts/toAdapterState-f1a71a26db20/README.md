# `toAdapterState`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/codebase-telemetry-adapter.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-adapter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:540778-540783](../../../../../../../reference/runtime/host-main.cjs#L540778-L540783) | `FunctionDeclaration` | não | `authId, state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540778-540783](../../../../../../../reference/runtime/host-main.cjs#L540778-L540783) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:540778

Chamadas escritas diretamente neste corpo: `state.tracked.map`.

SHA-256 do trecho: `33b98b0b0f91ef1736e8469e85a0a320ecb6669f0ac3df4474d32d2ce239368f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
