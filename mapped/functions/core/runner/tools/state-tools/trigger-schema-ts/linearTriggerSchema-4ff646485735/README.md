# `linearTriggerSchema`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/trigger-schema.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/trigger-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762309-762340](../../../../../../../../reference/runtime/host-main.cjs#L762309-L762340) | `FunctionDeclaration` | não | `copy` |
| [evaluation:554919-554950](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554919-L554950) | `FunctionDeclaration` | não | `copy` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762309-762340](../../../../../../../../reference/runtime/host-main.cjs#L762309-L762340) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554919-554950](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554919-L554950) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762309

Chamadas escritas diretamente neste corpo: `.optional`, `described`, `external_exports2.array`, `external_exports2.discriminatedUnion`, `external_exports2.literal`, `external_exports2.object`, `external_exports2.string`.

SHA-256 do trecho: `909e6fb3126cdb5b6a8ae9e15cc80a4b9b644a4a189576a0c1f14be0363f64a5`.

### evaluation:554919

Chamadas escritas diretamente neste corpo: `.optional`, `described`, `external_exports3.array`, `external_exports3.discriminatedUnion`, `external_exports3.literal`, `external_exports3.object`, `external_exports3.string`.

SHA-256 do trecho: `b622cca28547a9afa4e317eb6a514b92832d6a6aeaa229144f6a788b44c6c21d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
