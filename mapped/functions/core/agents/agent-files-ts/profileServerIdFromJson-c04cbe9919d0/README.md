# `profileServerIdFromJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-files.ts` · [README do módulo](../../../../../modules/core/agents/agent-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490823-490827](../../../../../../reference/runtime/host-main.cjs#L490823-L490827) | `FunctionDeclaration` | não | `parsed2` |
| [evaluation:629034-629038](../../../../../../reference/runtime/sand-eval-runner.cjs#L629034-L629038) | `FunctionDeclaration` | não | `parsed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490823-490827](../../../../../../reference/runtime/host-main.cjs#L490823-L490827) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:629034-629038](../../../../../../reference/runtime/sand-eval-runner.cjs#L629034-L629038) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:490823

Chamadas escritas diretamente neste corpo: `parsed2.serverId.trim`.

SHA-256 do trecho: `ffedd2ecadba9a8ee262499bf91678beb4175042e290b702b9efb10467362312`.

### evaluation:629034

Chamadas escritas diretamente neste corpo: `parsed.serverId.trim`.

SHA-256 do trecho: `9170bec1e3a696c8dc5e12c14d7447f05769bd76cc0b7621cbb5e8a9e068b495`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
