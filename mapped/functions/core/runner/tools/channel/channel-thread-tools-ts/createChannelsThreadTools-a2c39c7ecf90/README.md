# `createChannelsThreadTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/channel/channel-thread-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/channel/channel-thread-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768412-768414](../../../../../../../../reference/runtime/host-main.cjs#L768412-L768414) | `FunctionDeclaration` | não | `channels` |
| [evaluation:563928-563930](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563928-L563930) | `FunctionDeclaration` | não | `channels` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768412-768414](../../../../../../../../reference/runtime/host-main.cjs#L768412-L768414) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563928-563930](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563928-L563930) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768412

Chamadas escritas diretamente neste corpo: `channels.flatMap`.

SHA-256 do trecho: `3f28696c8f5b2da1e6e4cf0d080c6667e5d1bc6472344b8828a01b8098589f35`.

### evaluation:563928

Chamadas escritas diretamente neste corpo: `channels.flatMap`.

SHA-256 do trecho: `3f28696c8f5b2da1e6e4cf0d080c6667e5d1bc6472344b8828a01b8098589f35`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
