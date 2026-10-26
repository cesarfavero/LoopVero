# `ProtoSerde.deserialize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/serde.js` · [README do módulo](../../../../modules/agent-kv/serde-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615886-615888](../../../../../reference/runtime/host-main.cjs#L615886-L615888) | `method` | não | `blob` |
| [evaluation:284671-284673](../../../../../reference/runtime/sand-eval-runner.cjs#L284671-L284673) | `method` | não | `blob` |
| [state-worker:21690-21692](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21690-L21692) | `method` | não | `blob` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615886-615888](../../../../../reference/runtime/host-main.cjs#L615886-L615888) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284671-284673](../../../../../reference/runtime/sand-eval-runner.cjs#L284671-L284673) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:21690-21692](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21690-L21692) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615886

Chamadas escritas diretamente neste corpo: `this.proto.fromBinary`.

SHA-256 do trecho: `6ab7ecf753d40366926d1332e57999d54b4c1d1982630f1c0e196dd5f22747a8`.

### evaluation:284671

Chamadas escritas diretamente neste corpo: `this.proto.fromBinary`.

SHA-256 do trecho: `6ab7ecf753d40366926d1332e57999d54b4c1d1982630f1c0e196dd5f22747a8`.

### state-worker:21690

Chamadas escritas diretamente neste corpo: `this.proto.fromBinary`.

SHA-256 do trecho: `6ab7ecf753d40366926d1332e57999d54b4c1d1982630f1c0e196dd5f22747a8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
