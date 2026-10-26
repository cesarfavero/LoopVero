# `AgentWorkerConnection.walkExportClosure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715267-715280](../../../../../../reference/runtime/host-main.cjs#L715267-L715280) | `method` | sim | `retainedRootIdHex, limits, onProgress` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715267-715280](../../../../../../reference/runtime/host-main.cjs#L715267-L715280) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:715267

Chamadas escritas diretamente neste corpo: `this.send`.

SHA-256 do trecho: `72109718cf690953019e60eb5a95b3c7d74f9beafa2d2b7016c6cb8dd0c6a8f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
