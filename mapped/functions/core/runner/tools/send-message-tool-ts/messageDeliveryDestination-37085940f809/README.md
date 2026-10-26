# `messageDeliveryDestination`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761255-761265](../../../../../../../reference/runtime/host-main.cjs#L761255-L761265) | `FunctionDeclaration` | não | `message` |
| [evaluation:552070-552080](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552070-L552080) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761255-761265](../../../../../../../reference/runtime/host-main.cjs#L761255-L761265) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:552070-552080](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552070-L552080) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:761255

Chamadas escritas diretamente neste corpo: `VoiceCallChannel.callIdOf`, `hashMessageChannelAddress`.

SHA-256 do trecho: `b3d7864f1d12f0f4fbb77c7a91bc01da01e05ac852f89cbf3f84edf5be32c619`.

### evaluation:552070

Chamadas escritas diretamente neste corpo: `VoiceCallChannel.callIdOf`, `hashMessageChannelAddress`.

SHA-256 do trecho: `b3d7864f1d12f0f4fbb77c7a91bc01da01e05ac852f89cbf3f84edf5be32c619`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
