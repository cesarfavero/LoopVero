# `createPressureCpuProfiler`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731840-731941](../../../../../../../reference/runtime/host-main.cjs#L731840-L731941) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731840-731941](../../../../../../../reference/runtime/host-main.cjs#L731840-L731941) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:731840

Chamadas escritas diretamente neste corpo: `createInspectorBackend`.

SHA-256 do trecho: `72ad771f3709957a062f81e49e82d973cd31a1bb08cfdff48af3956427a5bba4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
