# `createAgentCpuSaturationService`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-cpu-saturation/agent-cpu-saturation-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-cpu-saturation/agent-cpu-saturation-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494383-494415](../../../../../../../reference/runtime/host-main.cjs#L494383-L494415) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494383-494415](../../../../../../../reference/runtime/host-main.cjs#L494383-L494415) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494383

Chamadas escritas diretamente neste corpo: `deps.samplePolicy.start`.

SHA-256 do trecho: `8a177d53daf5ae0c6b2e4fc373b3301b225fad1cb0d7e805bbd1d680c78f298a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
