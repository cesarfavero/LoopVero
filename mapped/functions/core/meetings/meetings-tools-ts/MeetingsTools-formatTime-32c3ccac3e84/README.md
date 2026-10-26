# `_MeetingsTools.formatTime`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773544-773546](../../../../../../reference/runtime/host-main.cjs#L773544-L773546) | `method` | não | `atMs` |
| [evaluation:572770-572772](../../../../../../reference/runtime/sand-eval-runner.cjs#L572770-L572772) | `method` | não | `atMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773544-773546](../../../../../../reference/runtime/host-main.cjs#L773544-L773546) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572770-572772](../../../../../../reference/runtime/sand-eval-runner.cjs#L572770-L572772) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773544

Chamadas escritas diretamente neste corpo: `.toISOString`, `new Date`.

SHA-256 do trecho: `a6dc215e3e45b1ae01988a2945de7d49309365741de4faee8f27371e313ff6dc`.

### evaluation:572770

Chamadas escritas diretamente neste corpo: `.toISOString`, `new Date`.

SHA-256 do trecho: `a6dc215e3e45b1ae01988a2945de7d49309365741de4faee8f27371e313ff6dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
