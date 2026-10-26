# `isSentFrom`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755625-755629](../../../../../../../../reference/runtime/host-main.cjs#L755625-L755629) | `FunctionDeclaration` | não | `message, address` |
| [evaluation:541500-541504](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541500-L541504) | `FunctionDeclaration` | não | `message, address` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755625-755629](../../../../../../../../reference/runtime/host-main.cjs#L755625-L755629) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:541500-541504](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541500-L541504) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:755625

Chamadas escritas diretamente neste corpo: `Array.isArray`, `message.labelIds.includes`, `message.sender.toLowerCase`, `sender.endsWith`.

SHA-256 do trecho: `2744a7a5850e0d86122757ea62bfdcd95ca3b6c3c9efa56330accf5149e95bd4`.

### evaluation:541500

Chamadas escritas diretamente neste corpo: `Array.isArray`, `message.labelIds.includes`, `message.sender.toLowerCase`, `sender.endsWith`.

SHA-256 do trecho: `2744a7a5850e0d86122757ea62bfdcd95ca3b6c3c9efa56330accf5149e95bd4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
