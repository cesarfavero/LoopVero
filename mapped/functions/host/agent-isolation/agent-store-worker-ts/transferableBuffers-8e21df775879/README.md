# `transferableBuffers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-store-worker.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-store-worker-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:22654-22660](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22654-L22660) | `FunctionDeclaration` | não | `views` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22654-22660](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22654-L22660) | 1 | 1 | 0 | 1 | 0 | 0 |

### state-worker:22654

Chamadas escritas diretamente neste corpo: `buffers.push`.

SHA-256 do trecho: `3b6fb11c213e72a7f1a00e0d5c909e7b67cba52894adf076c3771dc421ebc29e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
