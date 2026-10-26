# `isAnonymousChannelName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735190-735192](../../../../../../../reference/runtime/host-main.cjs#L735190-L735192) | `FunctionDeclaration` | não | `headerName, channelId` |
| [evaluation:540764-540766](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540764-L540766) | `FunctionDeclaration` | não | `headerName, channelId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735190-735192](../../../../../../../reference/runtime/host-main.cjs#L735190-L735192) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540764-540766](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540764-L540766) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:735190

Chamadas escritas diretamente neste corpo: `/^DM\s*\(/.test`, `SLACK_CONVERSATION_ID.test`.

SHA-256 do trecho: `5b053cf181eb0e20e14e25ca8e34fb7ecf4d8ac36317e4219183d38204f13dc0`.

### evaluation:540764

Chamadas escritas diretamente neste corpo: `/^DM\s*\(/.test`, `SLACK_CONVERSATION_ID.test`.

SHA-256 do trecho: `5b053cf181eb0e20e14e25ca8e34fb7ecf4d8ac36317e4219183d38204f13dc0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
