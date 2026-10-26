# `newestSentMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755637-755643](../../../../../../../../reference/runtime/host-main.cjs#L755637-L755643) | `FunctionDeclaration` | não | `{   threadText,   sendingAddress }` |
| [evaluation:541512-541518](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541512-L541518) | `FunctionDeclaration` | não | `{   threadText,   sendingAddress }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755637-755643](../../../../../../../../reference/runtime/host-main.cjs#L755637-L755643) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541512-541518](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541512-L541518) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755637

Chamadas escritas diretamente neste corpo: `.findLast`, `.map`, `listOf`, `parseDraftConnectorRecord`, `sendingAddress.toLowerCase`.

SHA-256 do trecho: `bd7b0c73cfae14535d4188caf76a2bf6570978a76d05701894272f3bf2f270a0`.

### evaluation:541512

Chamadas escritas diretamente neste corpo: `.findLast`, `.map`, `listOf`, `parseDraftConnectorRecord`, `sendingAddress.toLowerCase`.

SHA-256 do trecho: `bd7b0c73cfae14535d4188caf76a2bf6570978a76d05701894272f3bf2f270a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
