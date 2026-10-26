# `describeThreadSend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761266-761275](../../../../../../../reference/runtime/host-main.cjs#L761266-L761275) | `FunctionDeclaration` | não | `task, message, messageId` |
| [evaluation:552081-552090](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552081-L552090) | `FunctionDeclaration` | não | `task, message, messageId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761266-761275](../../../../../../../reference/runtime/host-main.cjs#L761266-L761275) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552081-552090](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552081-L552090) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:761266

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `attached`.

SHA-256 do trecho: `f43aa82756603751e035e7f85739755fe127c53e2b4b0d5949d05dc6537c377e`.

### evaluation:552081

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `attached`.

SHA-256 do trecho: `f43aa82756603751e035e7f85739755fe127c53e2b4b0d5949d05dc6537c377e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
